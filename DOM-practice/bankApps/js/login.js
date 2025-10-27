console.log("hello");
const loginBtn = document.getElementById("login-btn");
console.log(loginBtn);
loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("login btn click");
});
