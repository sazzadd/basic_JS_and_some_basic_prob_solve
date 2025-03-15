function secondLargest(arr) {
  const specialArr = Array.from(new Set(arr));
  specialArr.sort((a, b) => {
    return a - b;
  });
  if (specialArr.length) {
    return specialArr[1];
  } else {
    return -1;
  }
  console.log(specialArr);
}
console.log(secondLargest([16, 12, 10, 15, 20, 20]));
