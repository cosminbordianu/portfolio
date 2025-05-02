export default class formLogic {
  constructor() {
    const form = document.getElementById("form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      checkInputs();
    });

    const checkInputs = () => {
      const inputs = document.querySelectorAll("#form input, #form textarea");
      const email = document.querySelector("#form input#email");
      let formValid = true; // track if the form is valid

      inputs.forEach((input) => {
        if (input.value === "") {
          const inputParent = input.parentElement;
          form.classList.add("error-form");
          inputParent.classList.add("error-div");
          formValid = false;
        } else {
          const inputParent = input.parentElement;
          inputParent.classList.remove("error-div");
        }
      });

      if (!validateEmail(email.value)) {
        const inputParent = email.parentElement;
        form.classList.add("error-form");
        inputParent.classList.add("error-div");
        inputParent.querySelector(".error").textContent =
          "Looks like this is not an email";
        formValid = false;
      } else {
        const inputParent = email.parentElement;
        inputParent.classList.remove("error-div");
      }

      if (formValid) {
        // Add Netlify logic
        const formData = new FormData(form);

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => {
            alert("Message sent!");
            form.reset();
          })
          .catch((error) => alert("Error sending message: " + error));
      }
    };

    const validateEmail = (email) => {
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return regex.test(email);
    };
  }
}
