// Lightbox

const lightbox = document.querySelector(".lightbox");
const lightboxMainPic = document.querySelector(".lightbox_mainPicture");
const lightboxThumbnails = document.querySelector(".lightbox_thumbnails");
const bigPicture = document.querySelector(".main_imagebox-big");
const closeCross = document.querySelector(".closeCross");
const closeDiv = document.querySelector(".lightbox_close-icon");
const next = document.querySelector(".lightbox_next");
const previous = document.querySelector(".lightbox_previous");

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

function updateSelectedClass(index) {
  const thumbnailsElements = lightboxThumbnails.querySelectorAll("img");
  thumbnailsElements.forEach((thumbnail, i) => {
    if (i === index) {
      thumbnail.classList.add("selected");
    } else {
      thumbnail.classList.remove("selected");
    }
  });
}

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
    updateSelectedClass(currentIndex);
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

let currentIndex = 0;

next.addEventListener("click", (e) => {
  e.preventDefault();
  currentIndex = currentIndex + 1;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  lightboxMainPic.innerHTML = images[currentIndex];
  updateSelectedClass(currentIndex);
});

previous.addEventListener("click", (e) => {
  e.preventDefault();
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  lightboxMainPic.innerHTML = images[currentIndex];
  updateSelectedClass(currentIndex);
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
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
});

// cart

const cartIcon = document.querySelector(".header_right-cart__icon-img");
const cartModal = document.querySelector(".header_right-cart");
const addToCartBtn = document.querySelector(".addToCartBtn");
const emptyCart = document.querySelector(".header_right-cart__bottom-empty");
const filledCart = document.querySelector(".header_right-cart__bottom-filled");
const cartQuantity = document.querySelector(
  ".header_right-cart__icon-quantity"
);
const price = 125;
let title = "Fall Limited Edition Sneakers";

cartIcon.addEventListener("click", () => {
  cartModal.classList.toggle("visible");
});

function deleteCartElements() {
  let deleteBtn = document.querySelector(
    ".header_right-cart__bottom-filled__text-delete"
  );
  if (document.contains(deleteBtn)) {
    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      filledCart.style.display = "none";
      document
        .querySelector(".header_right-cart__bottom-filled__text")
        .remove();
      document.querySelector(".cart_btn").remove();
      emptyCart.style.display = "flex";
      cartQuantity.style.display = "none";
    });
  }
}

function addToCart() {
  const filledCartImg = document.createElement("div");
  const filledCartText = document.createElement("div");
  const filledCartDesc = document.createElement("div");
  const filledCartPrice = document.createElement("div");
  const priceCalculated = document.createElement("p");
  const totalPrice = document.createElement("p");
  const deleteIcon = document.createElement("div");
  const checkoutButton = document.createElement("button");
  let total = price * input.value;

  emptyCart.style.display = "none";
  filledCart.style.display = "flex";
  // Ajout de l'image dans le panier
  filledCartImg.classList.add("header_right-cart__bottom-filled__text-img");
  filledCartImg.innerHTML = images[0];

  // Ajout de la description du produit dans le panier
  filledCartText.classList.add("header_right-cart__bottom-filled__text");
  filledCartDesc.classList.add("header_right-cart__bottom-filled__text-desc");
  filledCartPrice.classList.add(
    "header_right-cart__bottom-filled__text-desc__price"
  );
  priceCalculated.classList.add(
    "header_right-cart__bottom-filled__text-desc__price-calculated"
  );
  totalPrice.classList.add(
    "header_right-cart__bottom-filled__text-desc__price-total"
  );

  checkoutButton.classList.add("cart_btn");
  filledCartDesc.innerHTML = `<p class="header_right-cart__bottom-filled__text-desc__title">${title}</p>`;
  priceCalculated.innerHTML = `<p>$${price} x ${input.value}</p>`;
  totalPrice.innerHTML = `<p>$${total}</p>`;
  deleteIcon.classList.add("header_right-cart__bottom-filled__text-delete");
  deleteIcon.innerHTML = `<img src="./assets/icon-delete.svg" alt="delete icon" />`;
  checkoutButton.innerHTML = "Checkout";
  cartQuantity.innerHTML = input.value;

  // création de tous les éléments
  filledCart.append(filledCartText);
  filledCartText.append(filledCartImg);
  filledCartText.append(filledCartDesc);
  filledCartDesc.append(filledCartPrice);
  filledCartPrice.append(priceCalculated);
  filledCartPrice.append(totalPrice);
  filledCartText.append(deleteIcon);
  filledCart.append(checkoutButton);

  // Affichage du panier au clic sur bouton 'Add to cart' et de la quantité sur l'icône
  cartModal.classList.add("visible");
  cartQuantity.style.display = "flex";

  deleteCartElements();
}

addToCartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const productQuantity = parseInt(input.value);
  if (productQuantity > 0) {
    const existingProduct = [
      ...filledCart.querySelectorAll(
        ".header_right-cart__bottom-filled__text-desc__title"
      ),
    ].find((item) => item.textContent === title);
    if (existingProduct) {
      const existingQuantity = parseInt(
        existingProduct.nextSibling
          .querySelector(
            ".header_right-cart__bottom-filled__text-desc__price-calculated p"
          )
          .textContent.match(/\d+/g)[1]
      );
      existingProduct.nextSibling.querySelector(
        ".header_right-cart__bottom-filled__text-desc__price-calculated p"
      ).textContent = `$${price} x ${existingQuantity + productQuantity}`;
      cartQuantity.textContent = existingQuantity + productQuantity;
      existingProduct.nextSibling.querySelector(
        ".header_right-cart__bottom-filled__text-desc__price-total p"
      ).textContent = `$${(existingQuantity + productQuantity) * price}`;
    } else {
      addToCart();
    }
  }
});
