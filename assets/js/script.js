document.addEventListener("DOMContentLoaded", () => {
  // Event to display the form when click on button login
  const boutonLogin = document.getElementById("buttonLogin");

  boutonLogin.addEventListener("click", () => {});

  // Send the form when submit
  const formulaire = document.querySelector("form");

  formulaire.addEventListener("submit", async (event) => {
    // pour ne pas rafraichire la page après le submit.
    event.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = await axios.post("", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      message: message,
    });

    console.log(response.data);
  });
});
