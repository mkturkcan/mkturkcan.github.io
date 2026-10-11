// Removes CSS rules that no page uses from the two large stylesheets after `jekyll build`.
// Content is every built HTML and JS file, so classes that scripts add (show, open, table-dark, ...) are kept.
// SITE_DIR lets the same config run against a local build directory.
const site = process.env.SITE_DIR || "_site";

module.exports = {
  content: [`${site}/**/*.html`, `${site}/**/*.js`],
  css: [`${site}/assets/css/bootstrap.min.css`, `${site}/assets/css/main.css`],
  output: `${site}/assets/css/`,
  skippedContentGlobs: [`${site}/assets/**/*.html`],
  // attribute selectors on these are always kept: data-theme and friends are set by scripts at runtime, and the
  // default extractor cannot read attribute values such as the "mailto:" in a[href^="mailto:"]
  dynamicAttributes: ["data-theme", "data-jp-theme-light", "data-jp-theme-name", "aria-expanded", "href"],
  safelist: {
    // classes injected by libraries loaded from CDNs (medium-zoom, MathJax)
    standard: [/^medium-zoom/, /^mjx-/, /^MathJax/],
    // greedy patterns are tested against each selector part (class, tag, or attribute name): keeps abbr[title] and
    // MathJax's mjx-container[...] rules
    greedy: [/^abbr$/, /^mjx-/, /medium-zoom/],
  },
};
