const array = [1, 2, 3, 4, 5, 6, 7];
let array_rev = [];
for (num of array) {
  //   console.log(num);
  array_rev.unshift(num);
}
console.log(array_rev);
