const $modalSection = document.querySelector(".modal");

export function showModal() {
  $modalSection.removeAttribute("hidden");
  $modalSection.classList.add("show-modal");
}

export function closeModal() {
  $modalSection.setAttribute("hidden", true);
}
