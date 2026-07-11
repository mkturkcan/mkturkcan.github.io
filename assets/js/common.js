document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".navbar-toggler");
  const navMenu = document.getElementById("navbarNav");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("show");
      navToggle.classList.toggle("collapsed", !isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a:not(.dropdown-toggle)").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("show");
        navToggle.classList.add("collapsed");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll(".dropdown-toggle").forEach(function (toggle) {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      const menu = toggle.nextElementSibling;
      if (!menu) return;
      const isOpen = menu.classList.toggle("show");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    document.querySelectorAll(".dropdown-menu.show, .navbar-collapse.show").forEach(function (element) {
      element.classList.remove("show");
    });
    if (navToggle) {
      navToggle.classList.add("collapsed");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.querySelectorAll(".publications button.abstract, .publications button.bibtex").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const entry = button.closest(".publication-entry") || button.closest("li");
      if (!entry) return;
      const targetClass = button.classList.contains("bibtex") ? "bibtex" : "abstract";
      const target = entry.querySelector("div." + targetClass + ".hidden");
      entry.querySelectorAll("div.abstract.hidden.open, div.bibtex.hidden.open").forEach(function (panel) {
        if (panel !== target) panel.classList.remove("open");
      });
      if (target) target.classList.toggle("open");
    });
  });

  document.querySelectorAll("button.more-authors").forEach(function (button) {
    button.addEventListener("click", function () {
      const current = button.textContent;
      button.textContent = current === button.dataset.collapsedText ? button.dataset.expandedText : button.dataset.collapsedText;
      button.setAttribute("aria-expanded", String(button.textContent === button.dataset.expandedText));
    });
  });

  document.querySelectorAll("a").forEach(function (link) {
    link.classList.remove("waves-effect", "waves-light");
  });

  document.querySelectorAll("table").forEach(function (table) {
    table.classList.toggle("table-dark", document.documentElement.getAttribute("data-theme") === "dark");
    if (!table.closest('[class*="news"], [class*="card"], code')) table.classList.add("table-hover");
  });

  if (window.jQuery && window.Toc && document.getElementById("toc-sidebar")) {
    const navSelector = "#toc-sidebar";
    window.Toc.init(window.jQuery(navSelector));
    window.jQuery("body").scrollspy({ target: navSelector });
  }

  document.querySelectorAll(".jupyter-notebook-iframe-container iframe").forEach(function (frame) {
    frame.addEventListener("load", function () {
      try {
        const cssLink = document.createElement("link");
        cssLink.href = "../css/jupyter.css";
        cssLink.rel = "stylesheet";
        frame.contentDocument.head.appendChild(cssLink);
        if (document.documentElement.getAttribute("data-theme") === "dark") {
          frame.contentDocument.body.setAttribute("data-jp-theme-light", "false");
          frame.contentDocument.body.setAttribute("data-jp-theme-name", "JupyterLab Dark");
        }
      } catch (error) {
        // Cross-origin notebook frames cannot be styled by the parent page.
      }
    });
  });
});
