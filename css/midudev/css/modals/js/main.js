import { pages } from "./data.js";
import { showModal, closeModal } from "./utils.js";

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");

//initials
p1.innerHTML = pages[0];
p2.innerHTML = pages[1];

let currentLastPage = 2;
const limit = pages.length;

const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", () => {
  if (currentLastPage == 2) {
    p1.innerHTML = pages[2];
    p2.innerHTML = pages[3];
    currentLastPage = 4;
  } else if (currentLastPage == 4) {
    p1.innerHTML = pages[4];
    p2.innerHTML = pages[5];
    currentLastPage = 6;
  } else if (currentLastPage == 6) {
    p1.innerHTML = pages[6];
    p2.innerHTML = pages[7];
    currentLastPage = 8;
  } else if (currentLastPage == limit) {
    p1.innerHTML = pages[0];
    p2.innerHTML = pages[1];

    currentLastPage = 2;
  }
});

const starButton = document.querySelector("#starButton");
const starsView = document.querySelector("#starsView");
let pressed = false;

starButton.addEventListener("click", () => {
  if (pressed == false) {
    const currentValue = 0;
    starsView.innerHTML = currentValue + 1;
    pressed = true;
    starsView.className = "visibleStarsView";
  } else {
    starButton.removeAttribute("id");
  }
});

//Modal
const readMoreButton = document.querySelector("#readMoreButton");
readMoreButton.addEventListener("click", () => {
  showModal();
});

const closeModalButton = document.querySelector("#closeModalButton");
closeModalButton.addEventListener("click", () => {
  closeModal();
});
