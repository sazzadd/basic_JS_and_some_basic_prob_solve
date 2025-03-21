const square = (num) => {
  return num * num;
};
function cube(num) {
 return num * square(num);
}
console.log(cube(5));
