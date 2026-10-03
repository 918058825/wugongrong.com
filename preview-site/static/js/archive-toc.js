document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".archive-toc-button");
  const dialog = document.querySelector(".archive-toc-dialog");
  if (!button || !dialog) return;

  const closeButton = dialog.querySelector("[data-archive-toc-close]");
  const links = [...dialog.querySelectorAll('a[href^="#"]')];
  const sections = links.map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))));
  let followAnchor = false;

  const updateActive = () => {
    let activeIndex = 0;
    sections.forEach((section, index) => {
      if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.35) activeIndex = index;
    });
    links.forEach((link, index) => {
      const active = index === activeIndex;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();

  button.addEventListener("click", () => {
    updateActive();
    dialog.showModal();
    button.setAttribute("aria-expanded", "true");
    closeButton.focus();
  });

  closeButton.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target.closest('a[href^="#"]')) {
      followAnchor = true;
      dialog.close();
      return;
    }

    const bounds = dialog.getBoundingClientRect();
    if (event.clientY < bounds.top) dialog.close();
  });

  dialog.addEventListener("close", () => {
    button.setAttribute("aria-expanded", "false");
    if (!followAnchor) button.focus({ preventScroll: true });
    followAnchor = false;
  });
});
