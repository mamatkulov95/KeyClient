const imageSources = [
  "./photos/person.svg",
  "./photos/favorite.svg",
  "./photos/basket.svg",
];

const imgElements = imageSources.map(
  (src, index) => `<img src="${src}" alt="icon-${index}" />`
);

const leftNav = document.querySelector(".left-nav");
leftNav.innerHTML = imgElements.join("");

var smallImages = document.getElementsByClassName("small-image");
var mainImage = document.getElementById("main-image");

function changeMainPhoto() {
  var newImageSrc = this.src;
  mainImage.src = newImageSrc;
}

for (var i = 0; i < smallImages.length; i++) {
  smallImages[i].addEventListener("click", changeMainPhoto);
}

const incrementButton = document.querySelector(".product-counter-increment");
const decrementButton = document.querySelector(".product-counter-decrement");
const counterValueElement = document.querySelector(".product-counter-value");

let counterValue = parseInt(counterValueElement.textContent);

incrementButton.addEventListener("click", () => {
  counterValue++;
  counterValueElement.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
  if (counterValue > 1) {
    counterValue--;
    counterValueElement.textContent = counterValue;
  }
});

const buyButton = document.querySelector(".buy-btn");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector(".modal-close");

buyButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});
