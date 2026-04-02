(() => {
  const slugify = (value) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  const decorateArticleImages = () => {
    const images = document.querySelectorAll(".prose img");

    images.forEach((image) => {
      image.loading = "lazy";
      image.decoding = "async";

      if (image.closest("figure") || image.closest(".post-feature-image")) {
        return;
      }

      const parent = image.parentElement;
      const paragraph =
        parent && parent.tagName === "P"
          ? parent
          : parent &&
            parent.tagName === "A" &&
            parent.parentElement &&
            parent.parentElement.tagName === "P"
          ? parent.parentElement
          : null;

      if (!paragraph || paragraph.textContent.trim() !== "") {
        return;
      }

      const figure = document.createElement("figure");
      figure.className = "content-figure";

      const media =
        image.parentElement && image.parentElement.tagName === "A"
          ? image.parentElement
          : image;

      paragraph.parentNode.insertBefore(figure, paragraph);
      figure.appendChild(media);

      if (image.title) {
        const caption = document.createElement("figcaption");
        caption.textContent = image.title;
        figure.appendChild(caption);
      }

      paragraph.remove();
    });
  };

  const buildPostToc = () => {
    const content = document.querySelector("[data-post-content]");
    const tocContainer = document.querySelector("[data-post-toc-container]");
    const tocTarget = document.querySelector("[data-post-toc]");

    if (!content || !tocContainer || !tocTarget) {
      return;
    }

    const headings = Array.from(content.querySelectorAll("h2, h3")).filter((heading) =>
      heading.textContent.trim()
    );

    if (!headings.length) {
      return;
    }

    const usedIds = new Set();
    const list = document.createElement("ul");
    list.className = "post-outline__list";

    headings.forEach((heading) => {
      let id = heading.id || slugify(heading.textContent);

      while (!id || usedIds.has(id) || (document.getElementById(id) && document.getElementById(id) !== heading)) {
        id = `${slugify(heading.textContent)}-${usedIds.size + 1}`;
      }

      heading.id = id;
      usedIds.add(id);

      const item = document.createElement("li");
      item.className = `post-outline__item post-outline__item--${heading.tagName.toLowerCase()}`;

      const link = document.createElement("a");
      link.href = `#${id}`;
      link.textContent = heading.textContent;

      item.appendChild(link);
      list.appendChild(item);
    });

    tocTarget.innerHTML = "";
    tocTarget.appendChild(list);
    tocContainer.hidden = false;
  };

  decorateArticleImages();
  buildPostToc();
})();
