const fruits = [
  "Mango",
  "Apple",
  "Banana",
  "Orange",
  "Mango", // duplicate
  "Banana", // duplicate
  "Grapes",
  "Orange", // duplicate
  "Apple", // duplicate
];

// console.log(fruits);

function removeDuplicate(array) {
  let uniqueArray = [];
  for (const num of array) {
    // console.log(num);
    if (uniqueArray.includes(num) === false) {
      uniqueArray.push(num);
    }
  }
  return uniqueArray;
}
const result = removeDuplicate(fruits);
console.log(result);

// console.log(fruits);
