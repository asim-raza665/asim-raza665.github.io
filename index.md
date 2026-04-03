---
layout: page
title: "Home"
body_class: home-page
description: "A polished introduction to my academic path, achievements, and future direction in computer engineering."
---

<section class="hero-grid">
  <div class="hero-copy">
    <p class="eyebrow">Computer Engineering Journey</p>
    <h1>Asim Raza</h1>
    <p class="hero-subtitle">Computer Engineering student building a future through discipline, gratitude, practical learning, and continuous growth.</p>
    <p>I created this portfolio to present my journey through university life, technical growth, scholarships, hostel experiences, labs, projects, and academic development. It is designed to grow with me as I continue adding new articles and experiences over time.</p>
    <div class="button-row">
      <a class="primary-link" href="{{ "/about/" | relative_url }}">Explore My Story</a>
      <a class="secondary-link" href="{{ "/blog/" | relative_url }}">Read My Articles</a>
    </div>
  </div>

  <aside class="profile-panel">
    <div class="profile-badge">AR</div>
    <p class="profile-role">Computer Engineering Student</p>
    <ul class="profile-facts">
      <li><strong>University:</strong> UET Lahore, Faisalabad Campus</li>
      <li><strong>Location:</strong> {{ site.location }}</li>
      <li><strong>Focus:</strong> Programming, Databases, Machine Learning</li>
      <li><strong>Portfolio:</strong> A growing record of my academic and personal journey</li>
      <li><strong>Mindset:</strong> Learn deeply, grow consistently, and keep building</li>
    </ul>
  </aside>
</section>

<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Journey Snapshot</p>
    <h2>Four defining parts of my story</h2>
  </div>
  <div class="feature-grid">
    <article class="feature-card">
      <h3>Admission With Purpose</h3>
      <p>I balanced FSc board preparation with competitive entry tests and secured admission to UET Lahore in Computer Engineering through steady planning and self-study.</p>
    </article>
    <article class="feature-card">
      <h3>Support That Changed Everything</h3>
      <p>A life-changing scholarship and the trust of generous mentors removed financial barriers and gave me the strength to pursue higher education with confidence.</p>
    </article>
    <article class="feature-card">
      <h3>From Hostel Life to Labs</h3>
      <p>Living independently, adjusting to university routines, and learning through practical labs taught me adaptability, discipline, and confidence in new environments.</p>
    </article>
    <article class="feature-card">
      <h3>Growth Through Consistency</h3>
      <p>From struggling with Python in the beginning to completing a machine learning project and ranking near the top of my class, I learned how persistence creates results.</p>
    </article>
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Academic Identity</p>
    <h2>A portfolio that grows with my journey</h2>
  </div>
  <div class="metric-grid">
    <article class="metric-card">
      <span class="metric-value">{{ site.posts | size }}</span>
      <span class="metric-label">published portfolio articles documenting real experiences</span>
    </article>
    <article class="metric-card">
      <span class="metric-value">{{ site.posts | first | date: "%Y" }}</span>
      <span class="metric-label">latest chapter currently reflected in this growing archive</span>
    </article>
    <article class="metric-card">
      <span class="metric-value">1 / Week</span>
      <span class="metric-label">article plan to continue documenting my journey through future semesters</span>
    </article>
    <article class="metric-card">
      <span class="metric-value">1</span>
      <span class="metric-label">clear mission: become skill-driven, consistent, and impactful</span>
    </article>
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Core Strengths</p>
    <h2>The qualities I am building</h2>
  </div>
  <div class="timeline-grid">
    <article class="timeline-card">
      <h3>Discipline</h3>
      <p>I learned to balance studies, hostel life, assignments, labs, and exam preparation through structured routines and strong self-management.</p>
    </article>
    <article class="timeline-card">
      <h3>Adaptability</h3>
      <p>I adjusted to new cities, new people, online learning shifts, technical subjects, and challenging academic expectations without giving up.</p>
    </article>
    <article class="timeline-card">
      <h3>Collaboration</h3>
      <p>Group study, supportive friends, and academic discussions helped me understand difficult concepts and grow with confidence.</p>
    </article>
    <article class="timeline-card">
      <h3>Responsibility</h3>
      <p>When my teacher trusted me to guide classmates on the portfolio project, I discovered a new sense of leadership and service.</p>
    </article>
  </div>
</section>

<section class="quote-panel">
  <p class="quote-mark">“</p>
  <blockquote>Your skills will define your future, not just your degree title.</blockquote>
  <p class="quote-source">A lesson from Dr. Bilal that continues to shape my direction in computer engineering.</p>
</section>

<section class="cta-panel">
  <div>
    <p class="eyebrow">Next Step</p>
    <h2>Read the complete journey in the blog section</h2>
    <p>The first page stays focused on my introduction, while the blog page keeps growing article by article as I continue documenting my journey.</p>
  </div>
  <a class="primary-link" href="{{ "/blog/" | relative_url }}">Open Blog</a>
</section>
