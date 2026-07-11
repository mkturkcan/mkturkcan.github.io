---
layout: page
title: Projects
permalink: /projects/
description: Research software, applied AI systems, and public project pages.
nav: true
nav_order: 3
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects projects--index">
{%- assign sorted_projects = site.projects | sort: "importance" -%}
  <div class="project-grid">
  {%- for project in sorted_projects -%}
    {% include projects.html %}
  {%- endfor %}
  </div>
</div>
