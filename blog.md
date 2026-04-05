---
layout: page
title: "Blog"
permalink: /blog/
description: "A complete record of my computer engineering journey, organized as linked posts from admission to second semester growth."
---

{% assign sorted_posts = site.posts | sort: "sequence" %}
{% assign phase_one = sorted_posts | where: "phase", "Getting In & Starting Out" %}
{% assign phase_two = sorted_posts | where: "phase", "First Semester Growth" %}
{% assign phase_three = sorted_posts | where: "phase", "Second Semester Momentum" %}

<section class="blog-intro">
  <p>This page collects my full portfolio articles. Click on any tag below to read that specific article.</p>
  <div class="category-filters">
    <button class="category-tag active" data-sequence="all">All</button>
    {% for post in sorted_posts %}
    <button class="category-tag" data-sequence="{{ post.sequence }}">Article {{ post.sequence }}</button>
    {% endfor %}
  </div>
</section>

<div id="posts-container">
  {% for post in sorted_posts %}
  <article class="journal-card" data-sequence="{{ post.sequence }}">
    {% if post.image %}<img src="{{ post.image }}" alt="{{ post.title }}" class="post-image">{% endif %}
    <span class="journal-index">Article {{ post.sequence }}</span>
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p>{{ post.summary }}</p>
    <div class="journal-meta">
      <span>{{ post.journey_stage }}</span>
      <span>{{ post.read_time }}</span>
      <span class="semester-tag">{% if post.phase contains 'First Semester' %}Semester 1{% elsif post.phase contains 'Second Semester' %}Semester 2{% else %}Pre-Semester{% endif %}</span>
    </div>
  </article>
  {% endfor %}
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.category-tag');
    const posts = document.querySelectorAll('#posts-container .journal-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const sequence = this.getAttribute('data-sequence');

        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        posts.forEach(post => {
          const postSequence = post.getAttribute('data-sequence');

          if (sequence === 'all' || postSequence === sequence) {
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
