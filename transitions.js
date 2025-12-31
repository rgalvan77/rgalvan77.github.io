const page = document.getElementById("page");
let navigating = false;

document.querySelectorAll("a[href]").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    if (
      navigating ||
      !href ||
      href.startsWith("#") ||
      href.startsWith("http")
    ) return;

    e.preventDefault();
    navigating = true;

    page.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = href;
    }, 600);
  });
});
