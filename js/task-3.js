const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const finalName = event.currentTarget.value.trim();
  if (finalName === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = finalName;
  }
});
