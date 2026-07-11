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
  <article class="open-source-card">
    <div>
      <h2>{{ repository.name }}</h2>
      <p>{{ repository.description }}</p>
    </div>
    <div class="open-source-card__footer">
      <div class="open-source-tags" aria-label="Technologies">
        {% for tag in repository.tags %}<span>{{ tag }}</span>{% endfor %}
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
