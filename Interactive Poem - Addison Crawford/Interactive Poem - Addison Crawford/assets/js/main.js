

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".grid-container img");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      if (image.classList.contains("fade-out")) return;

      image.classList.add("fade-out");

      setTimeout(() => {
        image.style.display = "none";
      }, 1000);
    });
  });
});
