/* Anchor nav + scroll-spy + mobile overlay + experience collapse */
(function () {
  const buttons = Array.from(document.querySelectorAll(".menu [data-scroll]"));
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
    const y = window.scrollY + el.getBoundingClientRect().top - 20;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  document.addEventListener("click", (e) => {
    if (!(e.target instanceof Element)) return;
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
    const y = window.scrollY + 20;
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

(function () {
  const jobCards = Array.from(document.querySelectorAll("[data-job-card]"));
  if (jobCards.length === 0) return;

  function setJobCard(card, open) {
    const button = card.querySelector(".job-toggle");
    const details = card.querySelector(".job-details");
    if (!button || !details) return;
    button.setAttribute("aria-expanded", open ? "true" : "false");
    details.hidden = !open;
  }

  jobCards.forEach((card) => {
    const button = card.querySelector(".job-toggle");
    const details = card.querySelector(".job-details");
    if (!button || !details) return;

    const open = button.getAttribute("aria-expanded") === "true";
    details.hidden = !open;
  });

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest(".job-toggle");
    const head = event.target.closest(".job-head");

    let card = null;
    if (button) {
      card = button.closest("[data-job-card]");
    } else if (head && !event.target.closest("a")) {
      card = head.closest("[data-job-card]");
    }
    if (!card) return;

    const toggle = card.querySelector(".job-toggle");
    if (!toggle) return;

    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setJobCard(card, !isOpen);
  });
})();

(function () {
  const galleries = Array.from(document.querySelectorAll("[data-gallery]"));
  if (galleries.length === 0) return;

  galleries.forEach((gallery) => {
    const track = gallery.querySelector(".project-gallery__track");
    const viewport = gallery.querySelector(".project-gallery__viewport");
    const dotsWrap = gallery.querySelector("[data-gallery-dots]");
    const prevBtn = gallery.querySelector("[data-gallery-prev]");
    const nextBtn = gallery.querySelector("[data-gallery-next]");
    if (!track || !dotsWrap) return;

    const imagesRaw = gallery.getAttribute("data-images") || "";
    const images = imagesRaw
      .split("|")
      .map((item) => item.trim())
      .filter(Boolean);
    const alt = gallery.getAttribute("data-alt") || "Gallery image";
    const originalAlt = gallery.getAttribute("data-i18n-data-alt") || alt;
    if (images.length === 0) return;

    track.innerHTML = "";
    dotsWrap.innerHTML = "";

    images.forEach((src, index) => {
      const slide = document.createElement("figure");
      slide.className = "project-gallery__slide";
      const isPlaceholder = /image[_ ]placeholder\.svg$/i.test(src);
      if (isPlaceholder) {
        slide.classList.add("project-gallery__slide--placeholder");
      }

      const img = document.createElement("img");
      img.src = src;
      img.alt = alt + " " + (index + 1);
      img.setAttribute("data-i18n-alt", originalAlt + " " + (index + 1));
      img.loading = index === 0 ? "eager" : "lazy";
      img.width = 720;
      img.height = 405;

      if (isPlaceholder) {
        slide.appendChild(img);
      } else {
        const link = document.createElement("a");
        link.className = "project-gallery__link";
        link.href = src;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("aria-label", `${alt} ${index + 1}: ${window.t ? window.t("открыть в новой вкладке") : "открыть в новой вкладке"}`);
        link.setAttribute("data-i18n-aria-label", `${originalAlt} ${index + 1}: открыть в новой вкладке`);
        link.appendChild(img);
        slide.appendChild(link);
      }
      track.appendChild(slide);

      const dot = document.createElement("i");
      if (index === 0) dot.classList.add("active");
      dot.setAttribute("aria-hidden", "true");
      dotsWrap.appendChild(dot);
    });

    const dots = Array.from(dotsWrap.querySelectorAll("i"));
    let currentIndex = 0;

    function updateAspectRatio(index) {
      if (!viewport) return;
      const slide = track.children[index];
      if (!(slide instanceof Element)) return;
      const img = slide.querySelector("img");
      if (!(img instanceof HTMLImageElement)) return;

      const applyRatio = () => {
        if (img.naturalWidth <= 0 || img.naturalHeight <= 0) return;
        gallery.style.setProperty("--gallery-aspect-ratio", `${img.naturalWidth} / ${img.naturalHeight}`);
      };

      if (img.complete) {
        applyRatio();
      } else {
        img.addEventListener("load", applyRatio, { once: true });
      }
    }

    function render() {
      track.style.transform = `translateX(${-currentIndex * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
      updateAspectRatio(currentIndex);
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        render();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        render();
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentIndex = i;
        render();
      });
      dot.style.cursor = "pointer";
    });

    if (viewport) {
      let startX = 0;
      let startY = 0;
      viewport.addEventListener("touchstart", (e) => {
        startX = e.changedTouches[0].clientX;
        startY = e.changedTouches[0].clientY;
      }, { passive: true });
      viewport.addEventListener("touchend", (e) => {
        const dx = e.changedTouches[0].clientX - startX;
        const dy = e.changedTouches[0].clientY - startY;
        if (Math.abs(dx) < 40 || Math.abs(dy) > Math.abs(dx)) return;
        currentIndex = dx < 0
          ? (currentIndex + 1) % images.length
          : (currentIndex - 1 + images.length) % images.length;
        render();
      }, { passive: true });
    }

    render();
  });
})();

(function () {
  const copyButtons = Array.from(document.querySelectorAll("[data-copy-email]"));
  if (copyButtons.length === 0) return;

  function copyWithFallback(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    copyWithFallback(text);
  }

  copyButtons.forEach((button) => {
    const originalLabel = button.querySelector("span")?.textContent || "E-Mail";
    button.addEventListener("click", async () => {
      const email = button.getAttribute("data-copy-email");
      if (!email) return;

      try {
        await copyText(email);
        const labelNode = button.querySelector("span");
        if (labelNode) labelNode.textContent = window.t ? window.t("Скопировано") : "Скопировано";
      } catch (error) {
        const labelNode = button.querySelector("span");
        if (labelNode) labelNode.textContent = window.t ? window.t("Ошибка") : "Ошибка";
      }

      window.setTimeout(() => {
        const labelNode = button.querySelector("span");
        if (labelNode) labelNode.textContent = originalLabel;
      }, 1200);
    });
  });
})();
