---
layout: page
title: "Categories"
permalink: /categories/
body_class: taxonomy-page
eyebrow: "Browse Archive"
description: "Explore portfolio articles by category, from admissions and student life to databases, projects, and technical growth."
---

{% assign sorted_categories = site.categories | sort %}

<section class="blog-intro">
  <p>Browse the archive by category to quickly find articles about admissions, academic growth, labs, projects, student life, and technical development.</p>
  <div class="taxonomy-directory">
    {% for category in sorted_categories %}
      {% assign category_name = category | first %}
      {% assign category_posts = category | last %}
      <a class="taxonomy-pill" href="#{{ category_name | slugify }}">
        {{ category_name | replace: "-", " " }}
        <span class="taxonomy-count">{{ category_posts | size }}</span>
      </a>
    {% endfor %}
  </div>
</section>

{% for category in sorted_categories %}
  {% assign category_name = category | first %}
  {% assign category_posts = category | last %}
  {% assign category_count = category_posts | size %}
  <section id="{{ category_name | slugify }}" class="section-block taxonomy-section">
    <div class="section-heading section-heading--split">
      <div>
        <p class="eyebrow">Category</p>
        <h2>{{ category_name | replace: "-", " " }}</h2>
      </div>
      <p class="blog-archive__note">{{ category_count }} article{% if category_count != 1 %}s{% endif %}</p>
    </div>
    <div class="post-preview-grid post-preview-grid--compact">
      {% for post in category_posts %}
      {% include post-card.html post=post variant="compact" %}
      {% endfor %}
    </div>
  </section>
{% endfor %}
