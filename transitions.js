const page = document.getElementById("page");

/* Fade in on load */
window.addEventListener("load", () => {
  page.classList.add("fade-in");
});

/* Fade out on navigation */
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http")) return;

    e.preventDefault();
    page.classList.remove("fade-in");
    page.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = href;
    }, 250);
  });
});
