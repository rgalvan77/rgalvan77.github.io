let images = [];
let index = 0;
let startX = 0;

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const counter = document.getElementById("counter");

function openGallery(imgs) {
  images = imgs;
  index = 0;
  lightbox.style.display = "flex";
  show();
}

function closeGallery() {
  lightbox.style.display = "none";
}

function show() {
  lightboxImg.classList.remove("fade-in");
  setTimeout(() => {
    lightboxImg.src = images[index];
    counter.textContent = `${index + 1} / ${images.length}`;
    lightboxImg.classList.add("fade-in");
  }, 100);
}

function next() {
  index = (index + 1) % images.length;
  show();
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  show();
}

/* Keyboard navigation */
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display !== "flex") return;
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
  if (e.key === "Escape") closeGallery();
});

/* Swipe support */
lightbox.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

lightbox.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) next();
  if (endX - startX > 50) prev();
});
