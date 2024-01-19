document.addEventListener("DOMContentLoaded", function () {
  const carousel = new bootstrap.Carousel(
    document.getElementById("carouselExample")
  );

  const toggleButton = document.getElementById("togglePhotos");
  const additionalPhotos = document.getElementById("additionalPhotos");
  const readMoreBtn = document.getElementById("readMoreBtn");

  toggleButton.addEventListener("click", function () {
    additionalPhotos.classList.toggle("d-none");
  });

  readMoreBtn.addEventListener("click", function () {
    const readMoreContent = document.querySelector(".read-more-content");
    readMoreContent.style.display =
      readMoreContent.style.display === "none" ? "inline" : "none";
    readMoreBtn.textContent =
      readMoreContent.style.display === "none" ? " Read more..." : " Read less";
  });

  // Adjusting the Bootstrap Carousel event handlers for manual controls
  const carouselPrev = document.querySelector(".carousel-control-prev");
  const carouselNext = document.querySelector(".carousel-control-next");

  carouselPrev.addEventListener("click", function () {
    carousel.prev();
  });

  carouselNext.addEventListener("click", function () {
    carousel.next();
  });
});
