console.log("hello");
const loginBtn = document.getElementById("login-btn");
console.log(loginBtn);
loginBtn.addEventListener("click", function (event) {
  // prevent reloading
  event.preventDefault();
  console.log("login btn click");

  //get phone number
  const phoneNumber = document.getElementById("phone-number").value;
  console.log(phoneNumber);
  const pinNum = document.getElementById("pin-number").value;
  const errorContainer = document.getElementById("error-conainer");
  const errorMsg = document.createElement("p");
  errorMsg.innerText = "phon or pin is not match";
  errorContainer.appendChild(errorMsg);

  console.log(phoneNumber);
  console.log(pinNum);
  if (phoneNumber === "01705" && pinNum === "1234") {
    console.log("u are login ");
    window.location.href = "home.html";
  } else {
    console.log("phon or pin is not match");
  }
});
