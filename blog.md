---
layout: page
title: "Blog"
permalink: /blog/
description: "A complete record of my computer engineering journey, organized as linked posts from admission to second semester growth."
---

{% assign sorted_posts = site.posts | sort: "sequence" %}

<section class="blog-intro">
  <p>This page collects my full portfolio articles. Click on any tag below to filter posts by topic.</p>
  <div class="category-filters" id="tag-filters">
    <button class="category-tag active" data-tag="all">All</button>
    {% assign all_tags = "" %}
    {% for post in sorted_posts %}
      {% for tag in post.tags %}
        {% unless all_tags contains tag %}
          {% assign all_tags = all_tags | append: "," | append: tag %}
        {% endunless %}
      {% endfor %}
    {% endfor %}
    {% for tag in all_tags split: "," offset: 1 %}
      <button class="category-tag" data-tag="{{ tag | strip }}">{{ tag | strip }}</button>
    {% endfor %}
  </div>
</section>

<div id="posts-container">
  {% for post in sorted_posts %}
  <article class="journal-card" data-tags="{{ post.tags | join: ',' | downcase }}">
    {% if post.image %}<img src="{{ post.image }}" alt="{{ post.title }}" class="post-image">{% endif %}
    <span class="journal-index">Article {{ post.sequence }}</span>
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p>{{ post.summary }}</p>
    <div class="journal-meta">
      <span>{{ post.journey_stage }}</span>
      <span>{{ post.read_time }}</span>
      <span class="semester-tag">{% if post.phase contains 'First Semester' %}Semester 1{% elsif post.phase contains 'Second Semester' %}Semester 2{% else %}Pre-Semester{% endif %}</span>
    </div>
    <div class="post-tags">
      {% for tag in post.tags %}
      <span class="post-tag">{{ tag }}</span>
      {% endfor %}
    </div>
  </article>
  {% endfor %}
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('#tag-filters .category-tag');
    const posts = document.querySelectorAll('#posts-container .journal-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const selectedTag = this.getAttribute('data-tag');

        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        posts.forEach(post => {
          const postTags = post.getAttribute('data-tags') || '';

          if (selectedTag === 'all' || postTags.includes(selectedTag.toLowerCase())) {
            post.style.display = '';
            setTimeout(() => {
              post.style.opacity = '1';
              post.style.transform = 'translateY(0)';
            }, 50);
          } else {
            post.style.opacity = '0';
            post.style.transform = 'translateY(20px)';
            setTimeout(() => {
              post.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  });
</script>
