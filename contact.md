---
layout: page
title: "Contact"
permalink: /contact/
description: "Ways to connect with Asim Raza for academic networking, professional conversation, portfolio feedback, and collaboration."
---

<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Let's Connect</p>
    <h2>Open to thoughtful academic and professional conversations</h2>
  </div>
  <div class="contact-grid">
    <article class="contact-card">
      <h3>Email</h3>
      <p>For portfolio feedback, academic discussion, collaboration, or professional opportunities, email is the best way to reach me directly.</p>
      <a class="primary-link" href="mailto:{{ site.social.email }}">{{ site.social.email }}</a>
    </article>
    <article class="contact-card">
      <h3>GitHub</h3>
      <p>You can review my public work, portfolio repository, and ongoing technical presence through GitHub.</p>
      <a class="secondary-link" href="{{ site.social.github }}" target="_blank" rel="noreferrer">Visit GitHub</a>
    </article>
    <article class="contact-card">
      <h3>Location</h3>
      <p>I am based in {{ site.location }} and continue building my academic and technical profile through UET Lahore, Faisalabad Campus.</p>
      <span class="contact-note">{{ site.location }}</span>
    </article>
    {% if site.social.linkedin and site.social.linkedin != "" %}
    <article class="contact-card">
      <h3>LinkedIn</h3>
      <p>Connect with me on LinkedIn for professional networking and updates beyond my blog archive.</p>
      <a class="secondary-link" href="{{ site.social.linkedin }}" target="_blank" rel="noreferrer">View LinkedIn</a>
    </article>
    {% endif %}
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">What I Welcome</p>
    <h2>Topics I would be glad to discuss</h2>
  </div>
  <div class="feature-grid">
    <article class="feature-card">
      <h3>Student Journey</h3>
      <p>Admissions, scholarships, hostel adjustment, university routines, and how to navigate the transition into engineering education.</p>
    </article>
    <article class="feature-card">
      <h3>Technical Learning</h3>
      <p>Programming fundamentals, SQL, database tools, beginner machine learning work, and strategies for learning unfamiliar concepts.</p>
    </article>
    <article class="feature-card">
      <h3>Portfolio Feedback</h3>
      <p>Suggestions on writing, structure, presentation, and how to document technical progress in a professional and scalable way.</p>
    </article>
    <article class="feature-card">
      <h3>Collaboration</h3>
      <p>Academic networking, peer learning, shared projects, and conversations with people who value consistent and skill-oriented growth.</p>
    </article>
  </div>
</section>

<section class="cta-panel">
  <div>
    <p class="eyebrow">Social Links</p>
    <h2>Available channels</h2>
    <p>My configured contact channels are shown below and in the site footer, so they stay reusable across the whole portfolio.</p>
  </div>
  {% include social-links.html class_name="contact-social-links" %}
</section>
