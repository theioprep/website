/* ==========================================================================
   Shared vanilla JS: mobile nav toggle, signup modal, signup form handler,
   and an optional carousel (only runs if a .carousel element exists).
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- mobile nav toggle ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
    });
  }

  /* ---------- signup modal ---------- */
  // Event delegation (not querySelectorAll-at-load) so this also works for
  // elements added later, e.g. the recent-post cards rendered by the
  // per-page inline script after this file has already run.
  const modalOverlay = document.getElementById("signup-modal");
  let pendingRedirect = null; // set when a trigger wants a redirect after the modal closes

  function openModal(redirectHref) {
    if (!modalOverlay) return;
    pendingRedirect = redirectHref || null;
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
    if (pendingRedirect) {
      const dest = pendingRedirect;
      pendingRedirect = null;
      window.location.href = dest;
    }
  }

  document.addEventListener("click", function (e) {
    const opener = e.target.closest("[data-open-signup]");
    if (opener) {
      e.preventDefault();
      openModal(opener.getAttribute("data-redirect-href"));
      return;
    }
    const closer = e.target.closest("[data-close-signup]");
    if (closer) {
      closeModal();
    }
  });
  // Clicking a card with a nested "read more" link/button should also
  // trigger the same gate rather than the link firing directly.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
    if ((e.key === "Enter" || e.key === " ") && e.target.matches("[data-open-signup]")) {
      e.preventDefault();
      openModal(e.target.getAttribute("data-redirect-href"));
    }
  });
  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) closeModal();
    });
  }

  /* ---------- signup form(s) — modal + any inline forms ---------- */
  // TODO: wire this up to a real email provider (Mailchimp, ConvertKit,
  // Beehiiv, etc.). Right now it just prevents default and shows a
  // success message so the UI is demonstrable without a backend.
  document.querySelectorAll("form[data-signup-form]").forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const successEl = form.querySelector(".form-success");
      if (successEl) {
        successEl.classList.add("show");
        successEl.textContent = "Thanks — you're on the list. Check your inbox to confirm.";
      }
      form.reset();
      setTimeout(closeModal, 1600);
    });
  });

  /* ---------- carousel ---------- */
  const carousel = document.querySelector(".carousel");
  if (carousel) {
    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
    const dotsWrap = carousel.parentElement.querySelector(".carousel-dots");
    const prevBtn = carousel.querySelector(".carousel-arrow.prev");
    const nextBtn = carousel.querySelector(".carousel-arrow.next");
    let index = 0;
    let timer = null;

    function renderDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = "";
      slides.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.className = "carousel-dot" + (i === index ? " active" : "");
        dot.setAttribute("aria-label", "Go to slide " + (i + 1));
        dot.addEventListener("click", () => goTo(i));
        dotsWrap.appendChild(dot);
      });
    }

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = "translateX(-" + index * 100 + "%)";
      renderDots();
    }

    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    function startAutoplay() {
      stopAutoplay();
      timer = setInterval(next, 5000);
    }
    function stopAutoplay() {
      if (timer) clearInterval(timer);
    }

    if (prevBtn) prevBtn.addEventListener("click", () => { prev(); startAutoplay(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { next(); startAutoplay(); });
    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);

    renderDots();
    startAutoplay();
  }

  /* ---------- lucide icons ---------- */
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
