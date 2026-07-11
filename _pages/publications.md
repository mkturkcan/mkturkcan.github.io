---
layout: page
permalink: /publications/
title: Publications
description: Peer-reviewed papers, conference publications, and preprints, updated through 2026.
nav: true
nav_order: 2
publication_filters: true
publication_citations: true
publication_badges: true
---
<!-- _pages/publications.md -->
<form class="publication-toolbar" id="publication-toolbar" role="search" aria-label="Filter publications">
  <div class="publication-toolbar__search">
    <label class="sr-only" for="publication-search">Search publications</label>
    <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
    <input id="publication-search" name="q" type="search" placeholder="Search title, author, venue, or keyword" autocomplete="off">
  </div>
  <div class="publication-toolbar__filters">
    <label class="sr-only" for="publication-year">Year</label>
    <select id="publication-year" name="year"><option value="">All years</option></select>
    <label class="sr-only" for="publication-area">Topic</label>
    <select id="publication-area" name="area"><option value="">All topics</option></select>
    <label class="sr-only" for="publication-artifact">Resource</label>
    <select id="publication-artifact" name="resource">
      <option value="">All resources</option>
      <option value="code">Code</option>
      <option value="dataset">Datasets</option>
      <option value="model">Models</option>
      <option value="slides">Slides</option>
      <option value="video">Videos</option>
    </select>
    <button class="publication-toolbar__clear" id="publication-clear" type="reset" title="Clear filters" aria-label="Clear publication filters"><i class="fa-solid fa-rotate-left" aria-hidden="true"></i></button>
  </div>
  <div class="publication-toolbar__summary">
    <span id="publication-count" role="status" aria-live="polite"></span>
    <a href="{{ '/assets/bibliography/papers.bib' | relative_url }}" download><i class="fa-solid fa-download" aria-hidden="true"></i> Complete BibTeX</a>
  </div>
</form>

<p class="publication-no-results" id="publication-no-results" hidden>No publications match these filters.</p>

<div class="publications">

{% bibliography -f {{ site.scholar.bibliography }} %}

</div>
