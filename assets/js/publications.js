document.addEventListener("DOMContentLoaded", function () {
  const toolbar = document.getElementById("publication-toolbar");
  const publications = document.querySelector(".publications");
  if (!toolbar || !publications) return;

  const search = document.getElementById("publication-search");
  const year = document.getElementById("publication-year");
  const area = document.getElementById("publication-area");
  const artifact = document.getElementById("publication-artifact");
  const count = document.getElementById("publication-count");
  const noResults = document.getElementById("publication-no-results");
  const entries = Array.from(publications.querySelectorAll(".publication-entry")).map(function (entry) {
    return {
      element: entry,
      item: entry.closest("li"),
      text: entry.textContent.toLowerCase(),
      year: entry.dataset.year,
      area: entry.dataset.area,
      areaLabel: entry.dataset.areaLabel,
      artifacts: entry.dataset.artifacts.split(/\s+/).filter(Boolean),
    };
  });

  Array.from(new Set(entries.map(function (entry) { return entry.year; }).filter(Boolean)))
    .sort(function (a, b) { return Number(b) - Number(a); })
    .forEach(function (value) { year.add(new Option(value, value)); });

  const areas = new Map();
  entries.forEach(function (entry) { if (entry.area) areas.set(entry.area, entry.areaLabel); });
  Array.from(areas.entries()).sort(function (a, b) { return a[1].localeCompare(b[1]); })
    .forEach(function (entry) { area.add(new Option(entry[1], entry[0])); });

  const params = new URLSearchParams(window.location.search);
  search.value = params.get("q") || "";
  year.value = params.get("year") || "";
  area.value = params.get("area") || "";
  artifact.value = params.get("resource") || "";

  function updateGroupVisibility() {
    publications.querySelectorAll("ol.bibliography").forEach(function (list) {
      const hasVisibleEntries = Array.from(list.children).some(function (item) { return !item.hidden; });
      list.hidden = !hasVisibleEntries;
      let heading = list.previousElementSibling;
      while (heading && !heading.matches("h2.bibliography")) heading = heading.previousElementSibling;
      if (heading) heading.hidden = !hasVisibleEntries;
    });
  }

  function updateUrl() {
    const next = new URLSearchParams();
    if (search.value.trim()) next.set("q", search.value.trim());
    if (year.value) next.set("year", year.value);
    if (area.value) next.set("area", area.value);
    if (artifact.value) next.set("resource", artifact.value);
    const query = next.toString();
    history.replaceState(null, "", window.location.pathname + (query ? "?" + query : "") + window.location.hash);
  }

  function applyFilters() {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    entries.forEach(function (entry) {
      const matches = (!query || entry.text.includes(query))
        && (!year.value || entry.year === year.value)
        && (!area.value || entry.area === area.value)
        && (!artifact.value || entry.artifacts.includes(artifact.value));
      if (entry.item) entry.item.hidden = !matches;
      if (matches) visible += 1;
    });
    updateGroupVisibility();
    count.textContent = visible + (visible === 1 ? " publication" : " publications");
    noResults.hidden = visible !== 0;
    updateUrl();
  }

  toolbar.addEventListener("submit", function (event) { event.preventDefault(); });
  search.addEventListener("input", applyFilters);
  [year, area, artifact].forEach(function (control) { control.addEventListener("change", applyFilters); });
  toolbar.addEventListener("reset", function () { window.setTimeout(applyFilters, 0); });
  applyFilters();
});
