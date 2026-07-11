document.addEventListener("DOMContentLoaded", function () {
  window.medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee",
  });
});
