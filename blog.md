---
layout: page
title: "Blog"
description: "A complete record of my computer engineering journey, organized as linked posts from admission to second semester growth."
---

{% assign sorted_posts = site.posts | sort: "sequence" %}
{% assign phase_one = sorted_posts | where: "phase", "Getting In & Starting Out" %}
{% assign phase_two = sorted_posts | where: "phase", "First Semester Growth" %}
{% assign phase_three = sorted_posts | where: "phase", "Second Semester Momentum" %}

<section class="blog-intro">
  <p>This page collects my full portfolio articles. Each article opens separately so the complete post can be read in detail.</p>
  <div class="phase-links">
    <a href="#phase-one">Admission &amp; Transition</a>
    <a href="#phase-two">First Semester Growth</a>
    <a href="#phase-three">Second Semester Momentum</a>
  </div>
</section>

<section id="phase-one" class="phase-section">
  <div class="section-heading">
    <p class="eyebrow">Phase 01</p>
    <h2>Getting In &amp; Starting Out</h2>
  </div>
  <div class="journal-grid">
    {% for post in phase_one %}
    <article class="journal-card">
      <span class="journal-index">Article {{ post.sequence }}</span>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.summary }}</p>
      <div class="journal-meta">
        <span>{{ post.journey_stage }}</span>
        <span>{{ post.read_time }}</span>
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section id="phase-two" class="phase-section">
  <div class="section-heading">
    <p class="eyebrow">Phase 02</p>
    <h2>First Semester Growth</h2>
  </div>
  <div class="journal-grid">
    {% for post in phase_two %}
    <article class="journal-card">
      <span class="journal-index">Article {{ post.sequence }}</span>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.summary }}</p>
      <div class="journal-meta">
        <span>{{ post.journey_stage }}</span>
        <span>{{ post.read_time }}</span>
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section id="phase-three" class="phase-section">
  <div class="section-heading">
    <p class="eyebrow">Phase 03</p>
    <h2>Second Semester Momentum</h2>
  </div>
  <div class="journal-grid">
    {% for post in phase_three %}
    <article class="journal-card">
      <span class="journal-index">Article {{ post.sequence }}</span>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.summary }}</p>
      <div class="journal-meta">
        <span>{{ post.journey_stage }}</span>
        <span>{{ post.read_time }}</span>
      </div>
    </article>
    {% endfor %}
  </div>
</section>
