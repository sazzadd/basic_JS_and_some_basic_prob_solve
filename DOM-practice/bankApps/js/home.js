console.log("home added");
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    console.log("add money btn click");
    event.preventDefault();

    const addMoneyInput = document.getElementById("add-money-input").value;
    const addMoneyPin = document.getElementById("add-money-pin-number").value;
    console.log(addMoneyInput);
  });
