console.log("home added");
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyInput = document.getElementById("add-money-input").value;
    const addMoneyPin = document.getElementById("add-money-pin-number").value;
    console.log(addMoneyInput);

    // pin number verify
    if (addMoneyPin === "1234") {
      console.log("you can add money");
      const ballance = document.getElementById("account-ballance").innerText;
      // console.log(ballance);
      const ballanceNumber = parseFloat(ballance);
      const addMoneyInputNumber = parseFloat(addMoneyInput);
      const newBalance = ballanceNumber + addMoneyInputNumber;
      console.log(newBalance);
      document.getElementById("account-ballance").innerText = newBalance;
    } else {
      console.log("pin number is not match");
    }
  });
