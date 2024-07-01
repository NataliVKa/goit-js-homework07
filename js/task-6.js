function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const divBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", (event) => {
  const amount = input.value;

  if (input.value > 0 && input.value <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

function createBoxes(amount) {
  let htmlBoxes = "";
  let size = 30;

  for (let index = 0; index < amount; index++) {
    htmlBoxes += `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;

    size += 10;
  }
  divBoxes.innerHTML = htmlBoxes;
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
