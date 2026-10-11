"""Create the smaller size variants that templates list in srcset (via the image_srcset filter).

    python scripts/make_image_variants.py assets/img/publication_preview 240,360
    python scripts/make_image_variants.py assets/img/presentations/talk.webp 540,810,1080

For each WebP image wider than a requested width, writes <name>-<width>.webp next to it (Lanczos, quality 90),
skipping variants that already exist and files that are themselves variants. Browsers then pick the smallest
file that is still sharp at the device's pixel density; the original stays the largest candidate.
"""
import glob
import os
import re
import sys

from PIL import Image


def main(target, widths):
    files = sorted(glob.glob(os.path.join(target, "*.webp"))) if os.path.isdir(target) else [target]
    for path in files:
        m = re.search(r"-\d+\.webp$", path)
        if m and os.path.exists(path[:m.start()] + ".webp"):      # already a variant of another file
            continue
        with Image.open(path) as im:
            w, h = im.size
            for tw in widths:
                out = f"{path[:-5]}-{tw}.webp"
                if tw >= w or os.path.exists(out):
                    continue
                th = round(h * tw / w)
                im.convert("RGB").resize((tw, th), Image.LANCZOS).save(out, "WEBP", quality=90, method=6)
                print(f"{out} ({tw}x{th}, {os.path.getsize(out) // 1024} KB)")


if __name__ == "__main__":
    main(sys.argv[1], [int(x) for x in sys.argv[2].split(",")])
