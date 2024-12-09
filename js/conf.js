const PORT = `https://bombay-barber-shop.netlify.app/`;

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const closeButton = document.querySelector(".close-button");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("d-block");
});

closeButton.addEventListener("click", () => {
  navbar.classList.remove("d-block");
});

