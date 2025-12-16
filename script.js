/* Anchor nav + scroll-spy + mobile overlay + experience collapse */
(function () {
  const buttons = Array.from(document.querySelectorAll("[data-scroll]"));
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const overlay = document.querySelector("[data-overlay]");
  const burger = document.querySelector("[data-burger]");

  function setActive(id) {
    buttons.forEach(b => b.classList.toggle("menu__btn--active", b.getAttribute("data-scroll") === id));
  }

  function closeOverlay() {
    if (!overlay) return;
    overlay.hidden = true;
  }

  function scrollToId(id) {
    const el = document.querySelector(id);
    if (!el) return;
    const y = window.scrollY + el.getBoundingClientRect().top - 12;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-scroll]");
    if (!btn) return;
    e.preventDefault();
    const id = btn.getAttribute("data-scroll");
    if (!id) return;

    if (overlay && !overlay.hidden) {
      overlay.hidden = true;
    }
    scrollToId(id);
  });

  function onScroll() {
    const y = window.scrollY + 120;
    let current = "#" + (sections[0]?.id || "");
    for (const s of sections) {
      if (s.offsetTop <= y) current = "#" + s.id;
    }
    setActive(current);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile burger
  if (burger && overlay) {
    burger.addEventListener("click", () => {
      overlay.hidden = !overlay.hidden;
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.hidden = true;
    });
  }
})();

(function () {
  const cards = Array.from(document.querySelectorAll("[data-exp]"));
  const toggleAll = document.querySelector(".chevron-toggle-all");
  if (cards.length === 0) return;

  function setCard(card, open) {
    const btn = card.querySelector(".chevron-btn");
    const body = card.querySelector(".experience-card__body");
    if (!btn || !body) return;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? "▼" : "▶";
    body.hidden = !open;
  }

  cards.forEach(card => {
    const btn = card.querySelector(".chevron-btn");
    const body = card.querySelector(".experience-card__body");
    if (!btn || !body) return;

    const open = btn.getAttribute("aria-expanded") === "true";
    body.hidden = !open;

    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      setCard(card, !isOpen);
    });
  });

  if (toggleAll) {
    toggleAll.addEventListener("click", () => {
      const expanded = toggleAll.getAttribute("aria-expanded") === "true";
      const next = !expanded;
      toggleAll.setAttribute("aria-expanded", next ? "true" : "false");
      toggleAll.textContent = next ? "▼" : "▶";
      cards.forEach(c => setCard(c, next));
    });
  }
})();
