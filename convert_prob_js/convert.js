function inchToFeet(inch) {
  const feet = inch / 12;
  const feetInt = parseInt(feet);
  const feetFraction = inch % 12;

  return feetInt + " " + "feet " + feetFraction + " " + "inch";
}
const height = inchToFeet(45);
console.log(height);
