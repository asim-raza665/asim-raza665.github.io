---
layout: page
title: "Projects"
description: "A curated collection of academic and technical projects, organized with screenshots, technologies, and project details."
body_class: "projects-page"
stylesheet: "/assets/css/projects.css"
---

{% assign sorted_projects = site.projects | sort: "project_order" %}

<section class="section-block projects-index" aria-label="Projects">
  <div class="project-list">
    {% for project in sorted_projects %}
    <article class="project-card project-summary-card">
      <div class="project-summary-card__media">
        {% if project.images and project.images.size > 0 %}
        <img src="{{ project.images[0] | relative_url }}" alt="{{ project.title }} screenshot" class="project-summary-card__image">
        {% endif %}
        {% if project.status %}
        <span class="project-status">{{ project.status }}</span>
        {% endif %}
      </div>

      <div class="project-summary-card__content">
        <div>
          {% if project.category %}<p class="eyebrow">{{ project.category }}</p>{% endif %}
          <h2>{{ project.title }}</h2>
          {% if project.summary %}<p>{{ project.summary }}</p>{% endif %}
        </div>

        {% if project.technologies %}
        <div class="post-tags" aria-label="Project technologies">
          {% for technology in project.technologies %}
          <span class="post-tag">{{ technology }}</span>
          {% endfor %}
        </div>
        {% endif %}

        <div class="button-row project-actions">
          <a class="primary-link" href="{{ project.url | relative_url }}">View Details</a>
          {% if project.github_url %}
          <a class="secondary-link" href="{{ project.github_url }}" target="_blank" rel="noopener">GitHub</a>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</section>
