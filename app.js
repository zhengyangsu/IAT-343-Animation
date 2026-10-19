(() => {
  const data = window.PROJECT_CONTENT;
  const nav = document.querySelector("#site-nav");
  const info = document.querySelector("#project-info");
  const content = document.querySelector("#page-content");

  function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }

  function mediaMarkup(media, className = "media-slot") {
    const src = media?.src?.trim();
    if (!src) {
      const label = media?.label || "Add image";
      return `<figure class="${className} media-empty" role="img" aria-label="${escapeHTML(media?.alt || label)}">
        <span class="media-mark" aria-hidden="true">＋</span>
        <figcaption>${escapeHTML(label)}</figcaption>
      </figure>`;
    }

    const label = media.alt || media.label || "image";
    const description = media.description
      ? `<figcaption class="media-description">${escapeHTML(media.description)}</figcaption>`
      : "";

    return `<figure class="${className}">
      <a class="media-link" href="${escapeHTML(src)}" target="_blank" rel="noopener noreferrer" aria-label="Open full-size image: ${escapeHTML(label)}">
        <img src="${escapeHTML(src)}" alt="${escapeHTML(media.alt || "")}">
      </a>
      ${description}
    </figure>`;
  }

  function renderSidebar() {
    info.innerHTML = `
      <h1>${escapeHTML(data.project.title)}</h1>
      <p class="synopsis">${escapeHTML(data.project.synopsis)}</p>
      <h2>Character models needed</h2>
      <ul>${data.project.characters.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
      <h2 class="team-name">${escapeHTML(data.project.teamName)}</h2>
      <ul>${data.project.team.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
  }

  function renderConcepts(page) {
    const concepts = page.concepts.map((item) => `
      <article class="concept-card">
        ${mediaMarkup({ src: item.src, alt: item.alt, label: item.title }, "concept-art")}
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.text)}</p>
      </article>`).join("");
    const precedents = page.precedents.images
      .map((item) => mediaMarkup(item, "precedent-art"))
      .join("");

    return `<section class="concept-section">
      <h2 class="content-heading">Char/Enviro Concepts</h2>
      <div class="concept-grid">${concepts}</div>
    </section>
    <section class="precedents-section">
      <h2 class="content-heading">${escapeHTML(page.precedents.title || "Precedents")}</h2>
      <p class="precedent-citation">${escapeHTML(page.precedents.citation)}</p>
      <div class="precedents-grid">${precedents}</div>
    </section>`;
  }

  function renderPage() {
    const id = location.hash.slice(1) || "home";
    const page = data.pages.find((item) => item.id === id) || data.pages[0];
    nav.innerHTML = data.pages.map((item) => `
      <a href="#${escapeHTML(item.id)}"${item.id === page.id ? ' aria-current="page"' : ""}>${escapeHTML(item.label)}</a>`).join("");
    document.title = `${page.title} — Robot Heist`;

    switch (page.kind) {
      case "hero":
        content.innerHTML = `<div class="hero-wrap">${mediaMarkup(page.media, "hero-art")}</div>`;
        break;
      case "script":
        content.innerHTML = `<article class="script-copy">
          <h2 class="content-heading">Script</h2>
          ${page.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}
        </article>`;
        break;
      case "storyboard":
        content.innerHTML = `<section class="storyboard-section">
          <h2 class="content-heading">Pitched Storyboard</h2>
          <div class="storyboard-board">${page.frames.map((frame) => mediaMarkup(frame, "story-frame")).join("")}</div>
        </section>`;
        break;
      case "concepts":
        content.innerHTML = renderConcepts(page);
        break;
      default:
        content.innerHTML = `<div class="placeholder-page">
          <p class="section-kicker">Coming soon</p>
          <h2>${escapeHTML(page.title)}</h2>
          <p>${escapeHTML(page.note)}</p>
          ${mediaMarkup(page.media, "placeholder-art")}
        </div>`;
    }
  }

  renderSidebar();
  window.addEventListener("hashchange", renderPage);
  renderPage();
})();
