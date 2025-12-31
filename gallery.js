let images = [];
let index = 0;

function openGallery(imgs) {
  images = imgs;
  index = 0;
  document.getElementById("lightbox").style.display = "flex";
  show();
}

function closeGallery() {
  document.getElementById("lightbox").style.display = "none";
}

function show() {
  document.getElementById("lightbox-img").src = images[index];
}

function next() {
  index = (index + 1) % images.length;
  show();
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  show();
}
