---
layout: page
title: "Tags"
permalink: /tags/
body_class: taxonomy-page
eyebrow: "Browse Topics"
description: "Explore portfolio articles by tag to quickly find specific topics, tools, and themes across the archive."
---

{% assign sorted_tags = site.tags | sort %}

<section class="blog-intro">
  <p>Tags make it easier to find specific tools, ideas, and themes such as Python, SQL, scholarships, machine learning, student life, and collaboration.</p>
  <div class="taxonomy-directory">
    {% for tag in sorted_tags %}
      {% assign tag_name = tag | first %}
      {% assign tag_posts = tag | last %}
      <a class="taxonomy-pill" href="#{{ tag_name | slugify }}">
        {{ tag_name | replace: "-", " " }}
        <span class="taxonomy-count">{{ tag_posts | size }}</span>
      </a>
    {% endfor %}
  </div>
</section>

{% for tag in sorted_tags %}
  {% assign tag_name = tag | first %}
  {% assign tag_posts = tag | last %}
  {% assign tag_count = tag_posts | size %}
  <section id="{{ tag_name | slugify }}" class="section-block taxonomy-section">
    <div class="section-heading section-heading--split">
      <div>
        <p class="eyebrow">Tag</p>
        <h2>{{ tag_name | replace: "-", " " }}</h2>
      </div>
      <p class="blog-archive__note">{{ tag_count }} article{% if tag_count != 1 %}s{% endif %}</p>
    </div>
    <div class="post-preview-grid post-preview-grid--compact">
      {% for post in tag_posts %}
      {% include post-card.html post=post variant="compact" %}
      {% endfor %}
    </div>
  </section>
{% endfor %}
