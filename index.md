---
layout: page
title: "Home"
body_class: home-page
description: "Professional portfolio of Asim Raza, a Computer Engineering student documenting technical growth, projects, and long-term learning."
---

<section class="hero-grid">
  <div class="hero-copy">
    <p class="eyebrow">Computer Engineering Portfolio</p>
    <h1>Asim Raza</h1>
    <p class="hero-subtitle">Computer Engineering student passionate about learning, building practical systems, and turning challenges into long-term growth.</p>
    <p>This portfolio presents my academic journey, technical development, and project-based learning in a clean and professional format. It is designed to grow with me over time, from foundational university experiences to future work in software, data, and engineering problem-solving.</p>
    <div class="button-row">
      <a class="primary-link" href="{{ "/about/" | relative_url }}">About Me</a>
      <a class="secondary-link" href="{{ "/blog/" | relative_url }}">Read Articles</a>
    </div>
    <div class="hero-highlights">
      <span>Python and problem solving</span>
      <span>Databases and SQL</span>
      <span>Machine learning exposure</span>
      <span>Consistent academic growth</span>
    </div>
  </div>

  <aside class="profile-panel">
    <div class="profile-badge">AR</div>
    <p class="profile-role">Student, builder, and lifelong learner</p>
    <ul class="profile-facts">
      <li><strong>Location:</strong> {{ site.location }}</li>
      <li><strong>Academic Base:</strong> UET Lahore, Faisalabad Campus</li>
      <li><strong>Focus:</strong> Programming, Databases, Machine Learning, Technical Communication</li>
      <li><strong>Approach:</strong> Learn deeply, build consistently, and keep improving</li>
    </ul>
  </aside>
</section>

<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">About Me</p>
    <h2>A portfolio built around growth, discipline, and real experiences</h2>
  </div>
  <div class="about-grid">
    <article class="about-card">
      <h3>Professional Direction</h3>
      <p>I am building my foundation in computer engineering through practical learning, reflective writing, and a steady focus on skills that matter in modern technical work.</p>
    </article>
    <article class="about-card">
      <h3>What This Site Shows</h3>
      <p>My homepage remains a stable professional introduction, while the blog archive grows automatically as I publish new weekly articles about projects, learning milestones, and personal development.</p>
    </article>
    <article class="about-card">
      <h3>How I Learn</h3>
      <p>I learn best by combining coursework, self-study, peer collaboration, and hands-on experimentation with tools such as Python, SQL, and academic lab platforms.</p>
    </article>
    <article class="about-card">
      <h3>What I Value</h3>
      <p>Gratitude, consistency, adaptability, and service guide how I work. I want my portfolio to reflect not only what I learn, but also how I grow through the process.</p>
    </article>
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Skills</p>
    <h2>Core strengths I am developing</h2>
  </div>
  <div class="skill-grid">
    <article class="skill-card">
      <h3>Programming Foundations</h3>
      <div class="skill-tags">
        <span>Python</span>
        <span>Problem Solving</span>
        <span>OOP Concepts</span>
        <span>Logical Thinking</span>
      </div>
    </article>
    <article class="skill-card">
      <h3>Data and Databases</h3>
      <div class="skill-tags">
        <span>SQL</span>
        <span>MySQL</span>
        <span>Database Design</span>
        <span>Data Organization</span>
      </div>
    </article>
    <article class="skill-card">
      <h3>Tools and Workflow</h3>
      <div class="skill-tags">
        <span>GitHub</span>
        <span>Documentation</span>
        <span>Portfolio Writing</span>
        <span>Continuous Learning</span>
      </div>
    </article>
    <article class="skill-card">
      <h3>Professional Qualities</h3>
      <div class="skill-tags">
        <span>Discipline</span>
        <span>Adaptability</span>
        <span>Collaboration</span>
        <span>Leadership Support</span>
      </div>
    </article>
  </div>
</section>

<section class="section-block">
  <div class="section-heading section-heading--split">
    <div>
      <p class="eyebrow">Projects</p>
      <h2>Highlighted work and technical milestones</h2>
    </div>
    <a class="secondary-link" href="{{ "/blog/" | relative_url }}">View Full Archive</a>
  </div>
  <div class="project-grid">
    <article class="project-card">
      <p class="project-card__eyebrow">Applied Machine Learning</p>
      <h3>Cardiovascular Disease Prediction Model</h3>
      <p>A Python-based academic project where my team cleaned data, explored visual patterns, and compared machine learning models to find the best prediction approach.</p>
      <div class="project-tech">
        <span>Python</span>
        <span>Data Cleaning</span>
        <span>Random Forest</span>
      </div>
      <a class="secondary-link" href="{{ "/blog/completing-my-first-semester-challenges-learning-and-success/" | relative_url }}">Read the project story</a>
    </article>
    <article class="project-card">
      <p class="project-card__eyebrow">Database Skills</p>
      <h3>SQL Learning and Database Workflow</h3>
      <p>My database journey includes MySQL setup, SQL query practice, schema understanding, and project-based learning built around structured data systems.</p>
      <div class="project-tech">
        <span>SQL</span>
        <span>MySQL</span>
        <span>Database Systems</span>
      </div>
      <a class="secondary-link" href="{{ "/blog/online-classes-sql-learning-and-collaborative-projects/" | relative_url }}">See the learning process</a>
    </article>
    <article class="project-card">
      <p class="project-card__eyebrow">Portfolio Engineering</p>
      <h3>Scalable Portfolio and Blog System</h3>
      <p>This website itself is part of my work: a structured GitHub Pages portfolio with reusable layouts, searchable articles, and a weekly publishing workflow.</p>
      <div class="project-tech">
        <span>Jekyll</span>
        <span>GitHub Pages</span>
        <span>Content Strategy</span>
      </div>
      <a class="secondary-link" href="{{ "/blog/an-online-lab-experience-challenges-projects-and-responsibility/" | relative_url }}">See the background</a>
    </article>
  </div>
</section>

<section class="section-block">
  <div class="section-heading section-heading--split">
    <div>
      <p class="eyebrow">Latest Articles</p>
      <h2>Recent updates from my journey</h2>
    </div>
    <a class="secondary-link" href="{{ "/blog/" | relative_url }}">Browse All Posts</a>
  </div>
  <div class="post-preview-grid">
    {% for post in site.posts limit: site.latest_posts_limit %}
    {% include post-card.html post=post %}
    {% endfor %}
  </div>
</section>

<section class="quote-panel">
  <p class="quote-mark">"</p>
  <blockquote>Your skills will define your future, not just your degree title.</blockquote>
  <p class="quote-source">A lesson that continues to shape how I approach computer engineering, projects, and long-term career growth.</p>
</section>

<section class="cta-panel">
  <div>
    <p class="eyebrow">Explore More</p>
    <h2>Follow the journey as new articles are added</h2>
    <p>The portfolio homepage stays stable and professional, while the blog keeps growing with new weekly writing, better projects, and deeper technical experience.</p>
  </div>
  <a class="primary-link" href="{{ "/contact/" | relative_url }}">Contact Me</a>
</section>
