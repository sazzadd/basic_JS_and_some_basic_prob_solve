function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return "yes its leapYear";
  }
  if (year % 100 && year % 400) {
    return "yes  its leap year";
  } else {
    return "No  its Not a leapYear";
  }
}
const result = isLeapYear(2024);
console.log(result);
