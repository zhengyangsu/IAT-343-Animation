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
    if (src) return `<figure class="${className}"><img src="${escapeHTML(src)}" alt="${escapeHTML(media.alt || "")}"></figure>`;
    return `<figure class="${className} media-empty" role="img" aria-label="${escapeHTML(media?.alt || media?.label || "Image placeholder")}"><span class="media-mark" aria-hidden="true">＋</span><figcaption>${escapeHTML(media?.label || "Add image")}</figcaption></figure>`;
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

  function renderPage() {
    const id = location.hash.slice(1) || "home";
    const page = data.pages.find((item) => item.id === id) || data.pages[0];
    nav.innerHTML = data.pages.map((item) => `<a href="#${escapeHTML(item.id)}"${item.id === page.id ? ' aria-current="page"' : ""}>${escapeHTML(item.label)}</a>`).join("");
    document.title = `${page.title} — Robot Heist`;
    if (page.kind === "hero") {
      content.innerHTML = `<div class="hero-wrap">${mediaMarkup(page.media, "hero-art")}</div>`;
    } else if (page.kind === "script") {
      content.innerHTML = `<article class="script-copy"><p class="section-kicker">Project Script</p>${page.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}</article>`;
    } else if (page.kind === "storyboard") {
      content.innerHTML = `<div class="storyboard-board">${page.frames.map((frame) => mediaMarkup(frame, "story-frame")).join("")}</div>`;
    } else if (page.kind === "concepts") {
      content.innerHTML = `<section class="concept-section"><h2 class="content-heading">Concepts</h2><div class="concept-grid">${page.concepts.map((item) => `<article class="concept-card">${mediaMarkup({ src: item.src, alt: item.alt, label: item.title }, "concept-art")}<h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.text)}</p></article>`).join("")}</div></section><section class="precedents-section"><h2 class="content-heading">${escapeHTML(page.precedents.title || "Precedents")}</h2><p class="precedent-citation">${escapeHTML(page.precedents.citation)}</p><div class="precedents-grid">${page.precedents.images.map((item) => mediaMarkup(item, "precedent-art")).join("")}</div></section>`;
    } else {
      content.innerHTML = `<div class="placeholder-page"><p class="section-kicker">Coming soon</p><h2>${escapeHTML(page.title)}</h2><p>${escapeHTML(page.note)}</p>${mediaMarkup(page.media, "placeholder-art")}</div>`;
    }
  }

  renderSidebar();
  window.addEventListener("hashchange", renderPage);
  renderPage();
})();
