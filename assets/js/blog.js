(() => {
  const archive = document.querySelector("[data-blog-archive]");

  if (!archive) {
    return;
  }

  const searchInput = document.querySelector("[data-blog-search]");
  const cards = Array.from(archive.querySelectorAll("[data-post-card]"));
  const resultCount = archive.querySelector("[data-blog-result-count]");
  const emptyState = archive.querySelector("[data-blog-empty]");
  const pagination = archive.querySelector("[data-blog-pagination]");
  const previousButton = archive.querySelector("[data-blog-prev]");
  const nextButton = archive.querySelector("[data-blog-next]");
  const status = archive.querySelector("[data-blog-status]");
  const pageSize = Number.parseInt(archive.dataset.postsPerPage || "6", 10) || 6;

  let query = "";
  let currentPage = 1;

  const getFilteredCards = () =>
    cards.filter((card) => (card.dataset.search || "").includes(query));

  const render = () => {
    const filteredCards = getFilteredCards();
    const totalItems = filteredCards.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

    if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const visibleCards = filteredCards.slice(start, end);

    cards.forEach((card) => {
      card.hidden = true;
    });

    visibleCards.forEach((card) => {
      card.hidden = false;
    });

    if (resultCount) {
      if (totalItems === 0) {
        resultCount.textContent = query
          ? `No articles found for "${searchInput.value.trim()}".`
          : "No articles available yet.";
      } else {
        const rangeStart = start + 1;
        const rangeEnd = Math.min(end, totalItems);
        resultCount.textContent = query
          ? `Showing ${rangeStart}-${rangeEnd} of ${totalItems} matching articles.`
          : `Showing ${rangeStart}-${rangeEnd} of ${totalItems} articles.`;
      }
    }

    if (emptyState) {
      emptyState.hidden = totalItems !== 0;
    }

    if (pagination) {
      pagination.hidden = totalItems <= pageSize || totalItems === 0;
    }

    if (previousButton) {
      previousButton.disabled = currentPage === 1 || totalItems === 0;
    }

    if (nextButton) {
      nextButton.disabled = currentPage === totalPages || totalItems === 0;
    }

    if (status) {
      status.textContent = totalItems === 0 ? "Page 0 of 0" : `Page ${currentPage} of ${totalPages}`;
    }
  };

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      query = searchInput.value.trim().toLowerCase();
      currentPage = 1;
      render();
    });
  }

  if (previousButton) {
    previousButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage -= 1;
        render();
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      const totalPages = Math.max(1, Math.ceil(getFilteredCards().length / pageSize));

      if (currentPage < totalPages) {
        currentPage += 1;
        render();
      }
    });
  }

  render();
})();
