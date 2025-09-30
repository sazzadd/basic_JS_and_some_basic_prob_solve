function deleteInvalids(array) {
  let uniqArray = [];
  for (num of array) {
    if (typeof num === "number" &&  isNaN(num) === false) {
      uniqArray.push(num);
      
    }
  }
  return uniqArray;
}
console.log(deleteInvalids([120, 30, 80, NaN, false], 1, "2"));
