---
layout: page
title: "Home"
body_class: home-page
description: "A modern computer engineering portfolio highlighting technical interests, featured work, and recent writing."
---

<section class="hero-grid portfolio-hero">
  <div class="hero-copy">
    <p class="eyebrow">Computer Engineering Portfolio</p>
    <h1>Hi, I'm {{ site.title }} — Computer Engineering Student</h1>
    <p class="hero-subtitle">I build solutions through programming, problem-solving, and hardware-software integration.</p>
    <p>This portfolio brings together my academic growth, technical interests, featured work, and ongoing blog writing. It is designed as a long-term record of how I learn, build, and grow as an engineer.</p>
    <div class="button-row">
      <a class="primary-link" href="#featured-work">View Projects</a>
      <a class="secondary-link" href="{{ "/blog/" | relative_url }}">Read Blog</a>
    </div>
    <div class="hero-meta">
      <span>Programming</span>
      <span>Problem Solving</span>
      <span>Embedded Thinking</span>
    </div>
  </div>

  <aside class="hero-visual-card">
    <div class="hero-visual-art" aria-hidden="true">
      <svg viewBox="0 0 320 260" role="presentation">
        <defs>
          <linearGradient id="heroCircuit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#52d6c4"></stop>
            <stop offset="100%" stop-color="#7da6ff"></stop>
          </linearGradient>
        </defs>
        <rect x="40" y="30" width="240" height="180" rx="24" fill="rgba(255,255,255,0.04)" stroke="rgba(125,166,255,0.35)"></rect>
        <rect x="110" y="75" width="100" height="90" rx="16" fill="rgba(16,32,51,0.88)" stroke="url(#heroCircuit)" stroke-width="3"></rect>
        <circle cx="85" cy="95" r="9" fill="#52d6c4"></circle>
        <circle cx="235" cy="95" r="9" fill="#7da6ff"></circle>
        <circle cx="85" cy="145" r="9" fill="#f4b860"></circle>
        <circle cx="235" cy="145" r="9" fill="#52d6c4"></circle>
        <path d="M94 95h38m88 0h6M85 104v32m0 18v6m150-56v32m0 18v6M94 145h16m110 0h6M160 75V44m0 121v20" stroke="url(#heroCircuit)" stroke-width="4" stroke-linecap="round"></path>
      </svg>
    </div>
    <div class="hero-visual-copy">
      <p class="eyebrow">Building Forward</p>
      <h3>Software, systems, and continuous learning</h3>
      <p>I am focused on strengthening both technical depth and practical thinking through programming, engineering concepts, and project-based learning.</p>
    </div>
  </aside>
</section>

<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">About Me</p>
    <h2>A concise introduction to my background and direction</h2>
    <p class="section-intro">I am building a portfolio that reflects long-term growth in computer engineering, with a focus on technical learning, practical problem solving, and documenting meaningful progress over time.</p>
  </div>
  <div class="about-home-layout">
    <article class="about-summary-card">
      <h3>About Me</h3>
      <ul class="about-points">
        <li><strong>Degree</strong><span>BSc Computer Engineering</span></li>
        <li><strong>University</strong><span>UET Lahore, Faisalabad Campus</span></li>
        <li><strong>Location</strong><span>{{ site.location }}</span></li>
        <li><strong>Focus Areas</strong><span>{% for area in site.data.home.focus_areas %}{{ area }}{% unless forloop.last %}, {% endunless %}{% endfor %}</span></li>
      </ul>
    </article>

    <div class="feature-grid feature-grid--portfolio">
      {% for item in site.data.home.about_cards %}
      <article class="feature-card">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">What I Do</p>
    <h2>Areas where I am building strong capability</h2>
  </div>
  <div class="service-grid">
    {% for item in site.data.home.what_i_do %}
    <article class="service-card">
      <div class="service-icon">{{ item.icon }}</div>
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </article>
    {% endfor %}
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">At a Glance</p>
    <h2>Portfolio highlights</h2>
  </div>
  <div class="metric-grid metric-grid--portfolio">
    <article class="metric-card">
      <span class="metric-value">{{ site.posts | size }}</span>
      <span class="metric-label">Articles Written</span>
      <p>A growing archive of experiences, lessons, and technical progress.</p>
    </article>
    <article class="metric-card">
      <span class="metric-value">Python + SQL</span>
      <span class="metric-label">Technical Skills</span>
      <p>Programming, database systems, and practical technical learning.</p>
    </article>
    <article class="metric-card">
      <span class="metric-value">Consistent Growth</span>
      <span class="metric-label">Academic Achievement</span>
      <p>Steady improvement through disciplined study and project work.</p>
    </article>
  </div>
</section>

<section id="featured-work" class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Featured Work</p>
    <h2>Selected work that represents my development</h2>
  </div>
  <div class="project-grid">
    {% for project in site.data.home.featured_work %}
    <article class="project-card">
      <span class="project-tag">{{ project.tag }}</span>
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <a class="secondary-link" href="{{ project.url | relative_url }}">{{ project.link_label }}</a>
    </article>
    {% endfor %}
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Latest Posts</p>
    <h2>Recent writing from my journey</h2>
  </div>
  <div class="journal-grid">
    {% for post in site.posts limit: 3 %}
    <article class="journal-card post-preview-card">
      <span class="journal-index">{{ post.date | date: site.date_format }}</span>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.summary | default: post.excerpt | strip_html | truncate: 150 }}</p>
      <a class="secondary-link" href="{{ post.url | relative_url }}">Read Post</a>
    </article>
    {% endfor %}
  </div>
</section>
