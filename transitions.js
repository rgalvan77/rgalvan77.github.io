const page = document.getElementById("page");
let isNavigating = false;

/* Fade in ONCE on page load */
window.addEventListener("pageshow", () => {
  page.classList.remove("fade-out");
  page.classList.add("fade-in");
});

/* Fade out ONLY when leaving the page */
document.querySelectorAll("a[href]").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    /* Ignore external, anchor, or same-page links */
    if (
      isNavigating ||
      !href ||
      href.startsWith("#") ||
      href.startsWith("http")
    ) return;

    e.preventDefault();
    isNavigating = true;

    page.classList.remove("fade-in");
    page.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
});
