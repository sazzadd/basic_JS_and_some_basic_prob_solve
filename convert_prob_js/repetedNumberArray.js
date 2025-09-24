const array = [5, 6, 11, 12, 98, 5];

function repeatedNumArray(numbers) {
  let find = 5;
  let count = 0;
  for (num of numbers) {
    console.log(num);
    if (num === find) {
      count++;
    }
  }
  return count;
}

let repeated = repeatedNumArray(array);
console.log(repeated);
