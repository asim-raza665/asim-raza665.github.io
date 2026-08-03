---
layout: page
title: "Certificates"
description: "A collection of certificates, achievements, and learning milestones."
body_class: "certificates-page"
stylesheet: "/assets/css/certificates.css"
---

{% assign sorted_certificates = site.certificates | sort: "certificate_order" %}

<section class="section-block certificates-index" aria-label="Certificates">
  {% if sorted_certificates.size > 0 %}
  <div class="certificate-grid">
    {% for certificate in sorted_certificates %}
    <article class="journal-card certificate-card">
      {% if certificate.image %}
      <img src="{{ certificate.image | relative_url }}" alt="{{ certificate.title }} certificate" class="certificate-card__image">
      {% endif %}

      <div class="certificate-card__content">
        <p class="eyebrow">Certificate</p>
        <h2>{{ certificate.title }}</h2>
        {% if certificate.organization %}
        <p class="certificate-card__issuer">{{ certificate.organization }}</p>
        {% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
  {% else %}
  <div class="blog-intro certificates-empty">
    <p>Certificates will appear here after certificate files are added.</p>
  </div>
  {% endif %}
</section>
