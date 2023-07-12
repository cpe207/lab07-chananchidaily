//simple email validation
isFirstNameOk = false;
isLastNameOk = false;
isEmailOk = false;

if (firstNameInput.value === "") {
  firstNameInput.classList.add("is-valid");
} else {
  firstNameInput.classList.add("is-valid");
  isFirstNameOk = true;
}
if (lastNameinput.value === "") {
  lastNameinput.classList.add("is-invalid");
} else {
  lastNameinput.classList.add("is-valid");
  isLastNameOk = true;
}

if (validateEmail(emailInput.value) === true) {
  emailInput.classList.add("is-valid");
  isEmailOk = true;
} else {
  emailInput.classList.add("is-invalid");
}

if (passwordinput.value.length >= 6) {
  passwordinput.classList.add("is-valid");
  isPasswordOk = true;
} else {
  passwordinput.classList.add("is-invalid");
}
if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk === true) {
  alert("Registered successfully");
}
