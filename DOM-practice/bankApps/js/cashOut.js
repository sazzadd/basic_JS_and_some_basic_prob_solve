document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    // console.log("cash btn click");
    event.preventDefault();
    const cashOutInput = parseFloat(
      document.getElementById("cash-out-input").value
    );
    console.log(cashOutInput);
    const cashOutPin = parseInt(
      document.getElementById("cash-out-pin-number").value
    );
    const balance = parseFloat(
      document.getElementById("account-ballance").innerText
    );
    const alertBox = document.getElementById("ErrorMsgBox");
    const msg = document.createElement("p");
    console.log(balance);

    // console.log("1234");
    if (cashOutPin === 1234) {
      if (balance < cashOutInput) {
        alert("!");
        msg.innerText = "Your balance is now empty!";
       
        alertBox.appendChild(msg);
        return;
      }
      console.log("can cash out");
      const newBalance = balance - cashOutInput;
      console.log(newBalance);
      document.getElementById("account-ballance").innerText = newBalance;
    } else {
      console.log("pin id not match");
    }
  });
