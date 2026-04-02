---
layout: page
title: "Blog"
permalink: /blog/
body_class: blog-page
eyebrow: "Journal & Writing"
description: "A scalable archive of articles about my computer engineering journey, projects, lessons, and technical growth."
---

{% assign featured_posts = site.posts | where: "featured", true %}

<section class="blog-intro">
  <p>This archive updates automatically whenever a new post is added to <code>_posts/</code>. Articles appear from latest to oldest, can be searched instantly, and support categories, tags, reading time, featured images, and professional navigation.</p>
  <div class="phase-links">
    <a href="#latest">Latest Articles</a>
    {% if featured_posts != empty %}<a href="#featured">Featured</a>{% endif %}
    <a href="{{ "/categories/" | relative_url }}">Categories</a>
    <a href="{{ "/tags/" | relative_url }}">Tags</a>
  </div>
</section>

<section class="blog-toolbox">
  <label class="blog-search" for="blog-search">
    <span class="blog-search__label">Search articles</span>
    <input id="blog-search" type="search" placeholder="Search by title, summary, category, or tag" data-blog-search>
  </label>
  <div class="blog-toolbox__links">
    <a class="secondary-link" href="{{ "/categories/" | relative_url }}">Browse Categories</a>
    <a class="secondary-link" href="{{ "/tags/" | relative_url }}">Browse Tags</a>
  </div>
</section>

{% if featured_posts != empty %}
<section id="featured" class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Featured Posts</p>
    <h2>Selected milestones and standout moments</h2>
  </div>
  <div class="post-preview-grid post-preview-grid--featured">
    {% for post in featured_posts limit: site.featured_posts_limit %}
    {% include post-card.html post=post show_tags=true variant="featured" %}
    {% endfor %}
  </div>
</section>
{% endif %}

<section id="latest" class="section-block blog-archive" data-blog-archive data-posts-per-page="{{ site.posts_per_page | default: 6 }}">
  <div class="section-heading section-heading--split">
    <div>
      <p class="eyebrow">All Articles</p>
      <h2>Latest to oldest</h2>
    </div>
    <p class="blog-archive__note">New weekly posts will appear here automatically.</p>
  </div>
  <p class="blog-result-count" data-blog-result-count></p>

  <div class="post-preview-grid" data-blog-list>
    {% for post in site.posts %}
    {% include post-card.html post=post show_tags=true %}
    {% endfor %}
  </div>

  <div class="blog-empty-state" data-blog-empty hidden>
    <h3>No articles match your search</h3>
    <p>Try a different keyword or browse the full archive through categories and tags.</p>
  </div>

  <nav class="pagination-controls" aria-label="Blog pagination" data-blog-pagination hidden>
    <button type="button" class="secondary-link pagination-controls__button" data-blog-prev>Previous</button>
    <span class="pagination-controls__status" data-blog-status></span>
    <button type="button" class="secondary-link pagination-controls__button" data-blog-next>Next</button>
  </nav>
</section>
