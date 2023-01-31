var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
  var email = document.getElementById("email").value;
  if (email === "") {
    var respons = document.createElement("p");
    respons.innerText = "please enter a valid email address";
    document.body.appendChild(respons).classList.toggle("validate");
  }
});
