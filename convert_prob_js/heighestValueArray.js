let array = [20, 50, 30, 60, 90];
// way 1
function maxValueArrayMathMax(value) {
  let maxValue = Math.max(...array);
  return maxValue;
}
// way 2

function maxValueArrayFilter(value) {
  const highest = Math.max(...value);
  let result = value.filter((num) => num === highest);

  return highest;
}
console.log(maxValueArrayFilter(array));

function maxValueArrayLoop(value) {
  let height = value[0];
  for (num of value) {
    if (num > height) {
      num = height;
    }
  }
  return height;
}
console.log(maxValueArrayLoop(array));
