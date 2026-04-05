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
  <p>This page collects my full portfolio articles. Each article opens separately so the complete post can be read in detail.</p>
  <div class="category-filters">
    <button class="category-tag active" data-category="all">All Posts</button>
    <button class="category-tag" data-category="semester-1">Semester 1</button>
    <button class="category-tag" data-category="semester-2">Semester 2</button>
    <button class="category-tag" data-category="admission">Admission</button>
    <button class="category-tag" data-category="hostel">Hostel Life</button>
    <button class="category-tag" data-category="labs">Labs & Projects</button>
    <button class="category-tag" data-category="mentorship">Mentorship</button>
  </div>
</section>

<div id="posts-container">
  {% for post in sorted_posts %}
  <article class="journal-card" data-phase="{{ post.phase }}" data-categories="{{ post.categories | join: ' ' }} {{ post.journey_stage | downcase | replace: ' ', '-' }}" data-phase-group="{% if post.phase == 'Getting In & Starting Out' %}1{% elsif post.phase == 'First Semester Growth' %}2{% elsif post.phase == 'Second Semester Momentum' %}3{% endif %}">
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
        const category = this.getAttribute('data-category');

        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        posts.forEach(post => {
          const phaseGroup = post.getAttribute('data-phase-group');
          const journeyStage = post.getAttribute('data-journey-stage') || '';
          const categories = post.getAttribute('data-categories') || '';

          let shouldShow = false;

          if (category === 'all') {
            shouldShow = true;
          } else if (category === 'semester-1') {
            shouldShow = phaseGroup === '1' || phaseGroup === '2';
          } else if (category === 'semester-2') {
            shouldShow = phaseGroup === '3';
          } else if (category === 'admission') {
            shouldShow = categories.includes('admission') || categories.includes('scholarship') || categories.includes('first-departure');
          } else if (category === 'hostel') {
            shouldShow = categories.includes('hostel') || categories.includes('adjustment');
          } else if (category === 'labs') {
            shouldShow = categories.includes('lab') || categories.includes('database') || categories.includes('success');
          } else if (category === 'mentorship') {
            shouldShow = categories.includes('mentorship') || categories.includes('leadership');
          }

          if (shouldShow) {
            post.style.display = '';
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
          } else {
            post.style.opacity = '0';
            post.style.transform = 'translateY(20px)';
            setTimeout(() => { post.style.display = 'none'; }, 300);
          }
        });
      });
    });
  });
</script>
