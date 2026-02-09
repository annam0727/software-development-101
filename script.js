const form = document.getElementById("contactForm");

function setError(id, message) {
  const el = document.getElementById(id);
  el.textContent = message;
}

function clearErrors() {
  setError("nameError", "");
  setError("emailError", "");
  setError("messageError", "");
  document.getElementById("successMessage").textContent = "";
}

function isValidEmail(email) {
  // Simple email check (good enough for this class assignment)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let hasErrors = false;

    if (name.length < 2) {
      setError("nameError", "Please enter your name.");
      hasErrors = true;
    }

    if (!isValidEmail(email)) {
      setError("emailError", "Please enter a valid email address.");
      hasErrors = true;
    }

    if (message.length < 10) {
      setError("messageError", "Please enter a message (at least 10 characters).");
      hasErrors = true;
    }

    if (!hasErrors) {
      document.getElementById("successMessage").textContent =
        "Success! Your message was submitted for practice purposes.";
      form.reset();
    }
  });
}