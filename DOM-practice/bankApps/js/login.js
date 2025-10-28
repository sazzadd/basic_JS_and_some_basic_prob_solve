console.log("hello");
const loginBtn = document.getElementById("login-btn");
console.log(loginBtn);
loginBtn.addEventListener("click", function (event) {
  // prevent reloading
  event.preventDefault();
  console.log("login btn click");

  //get phone number
  const phoneNumber = document.getElementById("Phone  number");
  
});
