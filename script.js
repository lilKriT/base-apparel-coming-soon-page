const form = document.querySelector("#subscribe-now");
const emailField = document.querySelector("#email");

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
  alert("Sending");
})

function isValid(field, regex) {
  return String(field).toLowerCase().match(regex);
}
