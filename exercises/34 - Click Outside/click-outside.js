const cardBtns = document.querySelectorAll(".card button");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");

const handleClickBtn = (event) => {
  const button = event.currentTarget;
  const card = button.closest(".card");
  //grab img src
  const imgSrc = card.querySelector("img").src;
  const desc = card.dataset.description;
  const name = card.querySelector("h2").textContent;
  //populate modal with info
  modalInner.innerHTML = `
    <img src="${imgSrc.replace("200", "600")}" alt="${name}" />
    <p>${desc}<p>
    `;
  //show modal
  modalOuter.classList.add("open");
};

cardBtns.forEach((button) => {
  button.addEventListener("click", handleClickBtn);
});

//close modal
const closeModal = () => {
  modalOuter.classList.remove("open");
};

modalOuter.addEventListener("click", function(ev) {
  //by adding ! at beginning it turns it into a boolean
  const isOutside = !ev.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape") {
    closeModal();
  }
});
