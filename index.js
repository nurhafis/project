let email = document.querySelector("#email")
let send = document.querySelector(".image-btn")

send.onclick = sendEmail

function sendEmail() {
  console.log(email.value)

  alert("thank you for sending your email" + email.value)
  email.value = ""

  return false
}
