// Lightbox

const lightbox = document.querySelector(".lightbox");
const lightboxMainPic = document.querySelector(".lightbox_mainPicture");
const lightboxThumbnails = document.querySelector(".lightbox_thumbnails");
const bigPicture = document.querySelector(".main_imagebox-big");
const closeCross = document.querySelector(".closeCross");
const closeDiv = document.querySelector(".lightbox_close-icon");

const images = [
  `<img src="./assets/image-product-1.jpg" alt="product image">`,
  `<img src="./assets/image-product-2.jpg" alt="product image">`,
  `<img src="./assets/image-product-3.jpg" alt="product image">`,
  `<img src="./assets/image-product-4.jpg" alt="product image">`,
];

const thumbnails = [
  `<img
  src="./assets/image-product-1-thumbnail.jpg"
  alt="product image thumbnail"
/>`,
  `<img
  src="./assets/image-product-2-thumbnail.jpg"
  alt="product image thumbnail"
/>`,
  `<img
  src="./assets/image-product-3-thumbnail.jpg"
  alt="product image thumbnail"
/>`,
  `<img
  src="./assets/image-product-4-thumbnail.jpg"
  alt="product image thumbnail"
/>`,
];

bigPicture.addEventListener("click", (e) => {
  e.preventDefault();
  const index = images.indexOf(bigPicture.innerHTML.trim());
  if (index !== -1) {
    lightboxMainPic.innerHTML = images[index];
    lightbox.style.display = "flex";
    closeDiv.style.display = "flex";
    lightboxThumbnails.innerHTML = "";
    thumbnails.forEach((thumbnail) => {
      lightboxThumbnails.innerHTML += thumbnail;
    });

    addOverlay();
  }
});

closeCross.addEventListener("click", (e) => {
  e.preventDefault();
  lightbox.style.display = "none";
  removeOverlay();
});

function addOverlay() {
  if (!document.body.contains(document.querySelector(".overlay"))) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");
    document.body.append(overlayElement);
    overlayElement.style.display = "block";
  }
}

function removeOverlay() {
  if (document.body.contains(document.querySelector(".overlay"))) {
    document.querySelector(".overlay").remove();
  }
}

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
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
});

// cart

const cartIcon = document.querySelector(".header_right-cart__icon");
const cartModal = document.querySelector(".header_right-cart");

cartIcon.addEventListener("click", () => {
  cartModal.classList.toggle("visible");
});
