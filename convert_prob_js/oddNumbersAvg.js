function oddNumber(number) {
  let odd = [];
  for (num of number) {
    // console.log(num);

    if (num % 2 === 1) {
      //   console.log(num);
      odd.push(num);
    }
  }
  //   console.log(odd);
  let sum = 0;
  for (oddNum of odd) {
    // console.log(sumNum);
    sum = sum + oddNum;
  }
  //   return sum;
  let avgOfOdd = sum / odd.length;
  return parseInt(avgOfOdd);
}
const array = [20, 30, 21, 23, 11, 19, 70];
const avg = oddNumber(array);
console.log(avg);
