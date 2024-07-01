const form = document.querySelector("form");
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("All form fields must be filled in");
  } else {
    const user = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
    };

    console.log(user);
    form.reset();
  }
});
