function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "please provide a number";
  }
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divided(num1, num2) {
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 + num2;
}

function calculator(a, b, operation) {
  if (operation == "add") {
    return add(a, b);
  } else if ((operation = "subtract")) {
    return subtract(a, b);
  } else if ((operation = "divided")) {
    return divided(a, b);
  } else if ((operation = "multiply")) {
    return multiply(a, b);
  }
}
console.log(calculator("5", "5", "add"));
