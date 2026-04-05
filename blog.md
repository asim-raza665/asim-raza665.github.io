---
layout: page
title: "Blog"
permalink: /blog/
description: "A complete record of my computer engineering journey, organized as linked posts from admission to second semester growth."
---

{% assign sorted_posts = site.posts | sort: "sequence" %}
{% assign all_tags = "" | split: "" %}
{% for post in sorted_posts %}
  {% if post.tags %}
    {% assign all_tags = all_tags | concat: post.tags %}
  {% endif %}
{% endfor %}
{% assign all_tags = all_tags | uniq | sort %}

<section class="blog-intro">
  <p>This page collects my full portfolio articles. Click on any tag below to view the related posts more clearly.</p>
  <div class="category-filters" id="tag-filters">
    <button class="category-tag active" data-tag="all">All</button>
    {% for tag in all_tags %}
      <button class="category-tag" data-tag="{{ tag | slugify }}">{{ tag }}</button>
    {% endfor %}
  </div>
</section>

<div id="posts-container">
  {% for post in sorted_posts %}
  <article class="journal-card journal-card--interactive" data-tags="{% for tag in post.tags %}{{ tag | slugify }}{% unless forloop.last %}|{% endunless %}{% endfor %}" data-url="{{ post.url | relative_url }}" tabindex="0" role="link" aria-label="Open article {{ post.title }}">
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
    const activeTagFromUrl = new URLSearchParams(window.location.search).get('tag');

    const applyFilter = selectedTag => {
      let firstVisiblePost = null;

      filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tag') === selectedTag);
      });

      posts.forEach(post => {
        const postTags = (post.getAttribute('data-tags') || '').split('|').filter(Boolean);
        const shouldShow = selectedTag === 'all' || postTags.includes(selectedTag);

        if (shouldShow) {
          post.style.display = '';
          post.style.opacity = '1';
          post.style.transform = 'translateY(0)';
          if (!firstVisiblePost && selectedTag !== 'all') {
            firstVisiblePost = post;
          }
        } else {
          post.style.display = 'none';
          post.style.opacity = '0';
          post.style.transform = 'translateY(20px)';
        }
      });

      if (selectedTag === 'all') {
        history.replaceState(null, '', window.location.pathname);
      } else {
        const nextUrl = new URL(window.location.href);
        nextUrl.searchParams.set('tag', selectedTag);
        history.replaceState(null, '', nextUrl);
      }

      if (firstVisiblePost) {
        firstVisiblePost.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        applyFilter(this.getAttribute('data-tag'));
      });
    });

    posts.forEach(post => {
      const openArticle = event => {
        if (event.target.closest('a, button')) return;
        const url = post.getAttribute('data-url');
        if (url) {
          window.location.href = url;
        }
      };

      post.addEventListener('click', openArticle);
      post.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openArticle(event);
        }
      });
    });

    if (activeTagFromUrl) {
      const matchingButton = document.querySelector(`#tag-filters .category-tag[data-tag="${activeTagFromUrl.toLowerCase()}"]`);
      if (matchingButton) {
        applyFilter(activeTagFromUrl.toLowerCase());
      }
    }
  });
</script>
