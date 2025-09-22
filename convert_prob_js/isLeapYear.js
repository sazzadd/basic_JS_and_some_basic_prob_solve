function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return "yes its leapYear";
  } else {
    return "No  its Not a leapYear";
  }
}
const result = isLeapYear(2024);
console.log(result);
