document.addEventListener("DOMContentLoaded", () => {
  // Header to display border on scroll
  const header = document.querySelector("header");
  // Button to display the form when click on button login
  const boutonLogin = document.getElementById("buttonLogin");
  // Button to close the form when click on button cross
  const closeForm = document.querySelector(".icon-times");
  // Modal
  const modal = document.querySelector(".modal");
  // Form to reset
  const form = document.querySelector("form");
  // Submit button
  const submitButton = document.getElementById("submit-btn");

  // Display border header on scroll
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll !== 0) {
      header.classList.add("border");
    } else {
      header.classList.remove("border");
    }
  });

  // Display the contact form / disable scroll.
  boutonLogin.addEventListener("click", () => {
    modal.classList.remove("hidden");
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  });

  // Close the contact form / enable scroll
  closeForm.addEventListener("click", () => {
    modal.classList.add("hidden");
    window.onscroll = function () {};
  });

  // Function to empty the form
  const cleanForm = () => {
    form.reset();
  };

  // Function to desactivate the submit button
  const isDisabled = () => {
    submitButton.setAttribute("disabled", "disabled");
    submitButton.classList.add("disabled-btn");
  };

  // Function to reactivate the submit button
  const isEnabled = () => {
    submitButton.removeAttribute("disabled");
    submitButton.classList.remove("disabled-btn");
  };

  // Send the form when submit
  const formulaire = document.querySelector("form");

  formulaire.addEventListener("submit", async (event) => {
    event.preventDefault();
    isDisabled();
    const datas = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    //console.log(datas);

    try {
      const response = await axios.post("http://localhost:3000/form", datas);

      if (response.status === 200) {
        alert("Votre formulaire a bien été envoyé");
        cleanForm();
        isEnabled();
      }
    } catch (error) {
      if (error.response?.data.message === "Missing parameters") {
        alert("Veuillez remplir tous les champs du formulaire");
      } else {
        alert("Une erreur est survenue");
        console.log(error.response);
        //cleanForm();
      }

      isEnabled();
    }
  });
});
