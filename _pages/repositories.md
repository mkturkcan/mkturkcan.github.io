---
layout: page
permalink: /repositories/
title: Open Source
nav_title: Code
description: Public software, models, and datasets for deployable AI and scientific computing.
nav: true
nav_order: 4
---

I publish research software, models, and datasets with the implementation, evaluation, deployment notes, and documentation needed to understand and reuse them.

<div class="open-source-grid">
  {% for repository in site.data.repositories.repositories %}
  {% assign repository_stats = site.data.repository_stats.repositories[repository.name] %}
  <article class="open-source-card">
    <div>
      <h2>{% if repository.project %}<a href="{{ repository.project | relative_url }}">{{ repository.name }}</a>{% else %}{{ repository.name }}{% endif %}</h2>
      <p>{{ repository.description }}</p>
    </div>
    {% if repository_stats.github or repository_stats.huggingface %}
    <div class="open-source-metrics" aria-label="Public repository statistics">
      {% if repository.github and repository_stats.github %}
        {% if repository_stats.github.stars and repository_stats.github.stars > 0 %}<span title="GitHub stars"><i class="fa-solid fa-star" aria-hidden="true"></i> {{ repository_stats.github.stars }}</span>{% endif %}
        {% if repository_stats.github.forks and repository_stats.github.forks > 0 %}<span title="GitHub forks"><i class="fa-solid fa-code-fork" aria-hidden="true"></i> {{ repository_stats.github.forks }}</span>{% endif %}
        {% if repository_stats.github.license %}<span>{{ repository_stats.github.license }}</span>{% endif %}
      {% endif %}
      {% if repository.huggingface and repository_stats.huggingface %}
        {% if repository_stats.huggingface.downloads and repository_stats.huggingface.downloads > 0 %}<span title="Hugging Face downloads"><i class="fa-solid fa-download" aria-hidden="true"></i> {{ repository_stats.huggingface.downloads }}</span>{% endif %}
        {% if repository_stats.huggingface.likes and repository_stats.huggingface.likes > 0 %}<span title="Hugging Face likes"><i class="fa-solid fa-heart" aria-hidden="true"></i> {{ repository_stats.huggingface.likes }}</span>{% endif %}
      {% endif %}
    </div>
    {% endif %}
    <div class="open-source-card__footer">
      <div>
        <div class="open-source-tags" aria-label="Technologies">
          {% for tag in repository.tags %}<span>{{ tag }}</span>{% endfor %}
        </div>
        {% if repository.project or repository.paper %}
        <div class="open-source-artifacts">
          {% if repository.project %}<a href="{{ repository.project | relative_url }}">Project</a>{% endif %}
          {% if repository.paper %}<a href="{{ repository.paper }}">Paper</a>{% endif %}
        </div>
        {% endif %}
      </div>
      {% if repository.github != blank or repository.huggingface != blank %}
      <div class="open-source-links">
        {% if repository.github != blank %}
        <a href="{{ repository.github }}" target="_blank" rel="noopener noreferrer" aria-label="{{ repository.name }} on GitHub" title="GitHub"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
        {% endif %}
        {% if repository.huggingface != blank %}
        <a href="{{ repository.huggingface }}" target="_blank" rel="noopener noreferrer" aria-label="{{ repository.name }} on Hugging Face" title="Hugging Face"><img src="{{ '/assets/img/icons/huggingface.svg' | relative_url }}" alt="" width="20" height="19" aria-hidden="true"></a>
        {% endif %}
      </div>
      {% endif %}
    </div>
  </article>
  {% endfor %}
</div>

## GitHub activity

The profile snapshot below is generated during deployment with the GitHub Readme Stats Action, so the page does not depend on the retired public stats endpoint at runtime.

{% include repository/repo_user.html username=site.data.repositories.profile %}

<div class="repository-profile-links">
  <a href="https://github.com/mkturkcan" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i> All GitHub repositories</a>
  <a href="https://huggingface.co/mehmetkeremturkcan" target="_blank" rel="noopener noreferrer"><img src="{{ '/assets/img/icons/huggingface.svg' | relative_url }}" alt="" width="18" height="17" aria-hidden="true"> Hugging Face models and datasets</a>
</div>
