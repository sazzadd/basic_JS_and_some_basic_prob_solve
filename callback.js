const square = (parameter) => {
  return parameter * parameter;
};

function cube(num) {
 return num * square(num);
}
console.log(cube(5));
