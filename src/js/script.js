const carouselButtons = document.querySelectorAll(".btn");
const images = document.querySelectorAll(".img");
const trailerButton = document.querySelector(".trailer-btn");
const trailerModal = document.querySelector(".modal")
const closeModalButton = document.querySelector(".close-modal");
const trailer = document.getElementById("video");
const trailerLink = trailer.src;

carouselButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    deactivateCarouselButton();

    selectCarouselButton(button);

    removeActiveBackgroundImage();

    addBackgroundImage(index);
  });
});

trailerButton.addEventListener("click", () => {
  toggleTrailerModal();

  addTrailerLink();
});

closeModalButton.addEventListener("click", () => {
  toggleTrailerModal();

  removeTrailerLink();
});

function removeTrailerLink() {
  trailer.setAttribute("src", "");
}

function addTrailerLink() {
  trailer.setAttribute("src", trailerLink);
}

function toggleTrailerModal() {
  trailerModal.classList.toggle("open");
}

function addBackgroundImage(index) {
  images[index].classList.add("active");
};

function removeActiveBackgroundImage() {
  const activeBackgroundImage = document.querySelector(".active");
  activeBackgroundImage.classList.remove("active");
};

function selectCarouselButton(button) {
  button.classList.add("selected");
};

function deactivateCarouselButton() {
  const selectedButton = document.querySelector(".selected");
  selectedButton.classList.remove("selected");
};
