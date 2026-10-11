"""Shrink the built site's icon fonts to the glyphs its pages use.

Run after `jekyll build`:  python3 scripts/subset_icon_fonts.py _site

Scans every HTML and JS file in the built site for Font Awesome (fa-*) and Academicons (ai-*) class names, maps them
to code points with the compiled CSS, and rewrites each icon WOFF2 file in place with only those glyphs. Code points
that the site's own CSS uses directly (content values in the Private Use Area) are kept as well. Requires fonttools
and brotli.
"""
import glob
import os
import re
import sys

from fontTools import subset
from fontTools.ttLib import TTFont

FONTS = ["assets/webfonts/fa-solid-900.woff2", "assets/webfonts/fa-regular-400.woff2",
         "assets/webfonts/fa-brands-400.woff2", "assets/webfonts/fa-v4compatibility.woff2",
         "assets/fonts/academicons.woff2"]
ICON_RULE = re.compile(r"\.((?:fa|ai)-[a-z0-9-]+)::?before\s*\{\s*content:\s*\"([^\"]+)\"")
PUA_CONTENT = re.compile(r"content:\s*\"([^\"]+)\"")


def chars(value):
    """CSS content string -> code points; handles literal characters and \\e9d9-style escapes."""
    out, i = [], 0
    while i < len(value):
        m = re.match(r"\\([0-9a-fA-F]{1,6})\s?", value[i:])
        if m:
            out.append(int(m.group(1), 16))
            i += m.end()
        else:
            out.append(ord(value[i]))
            i += 1
    return out


def main(site):
    used = set()
    for path in glob.glob(os.path.join(site, "**", "*.html"), recursive=True) + \
            glob.glob(os.path.join(site, "**", "*.js"), recursive=True):
        with open(path, encoding="utf-8", errors="ignore") as f:
            used |= set(re.findall(r"\b(?:fa|ai)-[a-z0-9-]+", f.read()))
    css = ""
    for path in glob.glob(os.path.join(site, "assets", "css", "*.css")):
        with open(path, encoding="utf-8", errors="ignore") as f:
            css += f.read()
    icons = {}
    for name, value in ICON_RULE.findall(css):
        icons.setdefault(name, set()).update(chars(value))
    keep = set()
    for name in used:
        keep |= icons.get(name, set())
    icon_rule_values = {v for _, v in ICON_RULE.findall(css)}
    for value in PUA_CONTENT.findall(css):           # glyphs the site's own CSS draws directly
        if value not in icon_rule_values:
            keep |= {c for c in chars(value) if 0xE000 <= c <= 0xF8FF}
    print(f"{len([n for n in used if n in icons])} icon classes in use, {len(keep)} code points kept")
    for rel in FONTS:
        path = os.path.join(site, rel)
        if not os.path.exists(path):
            continue
        before = os.path.getsize(path)
        opts = subset.Options()
        opts.flavor = "woff2"
        opts.layout_features = []
        opts.name_IDs = ["*"]
        opts.notdef_outline = True
        font = None
        # some shipped WOFF2 files decode in browsers but not in fontTools; their TTF twins carry the same glyphs
        for source in (path, path[:-len(".woff2")] + ".ttf"):
            if not os.path.exists(source):
                continue
            try:
                font = TTFont(source)
                wanted = sorted(keep & set(font.getBestCmap()))
                sub = subset.Subsetter(opts)
                sub.populate(unicodes=wanted + [0x20])
                sub.subset(font)
                break
            except Exception as err:          # noqa: BLE001 - try the next source
                print(f"{rel}: cannot subset {os.path.basename(source)} ({err})")
                font = None
        if font is None:
            continue
        font.flavor = "woff2"
        font.save(path)
        print(f"{rel}: {len(wanted)} glyphs, {before // 1024} KB -> {os.path.getsize(path) // 1024} KB")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "_site")
