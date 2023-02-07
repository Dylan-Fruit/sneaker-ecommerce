// Lightbox

const lightbox = document.querySelector(".lightbox");
const lightboxMainPic = document.querySelector(".lightbox_mainPicture");
const bigPicture = document.querySelector(".main_imagebox-big");

const images = [
  `<img src="./assets/image-product-1.jpg" alt="product image" />`,
  `<img src="./assets/image-product-2.jpg" alt="product image" />`,
  `<img src="./assets/image-product-3.jpg" alt="product image" />`,
  `<img src="./assets/image-product-4.jpg" alt="product image" />`,
];

bigPicture.addEventListener("click", (e) => {
  e.preventDefault();
  lightbox.style.display = "flex";
  lightboxMainPic.innerHTML = images[0];
});

// input event

const input = document.querySelector("#product_quantity");
const plusBtn = document.querySelector(".main_content-addToCart__input-plus");
const minusBtn = document.querySelector(".main_content-addToCart__input-minus");

plusBtn.addEventListener("click", (e) => {
  e.preventDefault();
  input.value = parseInt(input.value) + 1;
});
minusBtn.addEventListener("click", (e) => {
  e.preventDefault();
  input.value = parseInt(input.value) - 1;
});

// cart

const cartIcon = document.querySelector(".header_right-cart__icon");
const cartModal = document.querySelector(".header_right-cart");

cartIcon.addEventListener("click", () => {
  cartModal.classList.toggle("visible");
});
