// const square = (parameter) => {
//   return parameter * parameter;
// };

// function cube(num, callback) {
//   return num * callback(num);
// }
// console.log(cube(10, square));
// =================
// function calculate(a, b, callback) {
//     return callback(a, b);
// }

// function add(x, y) {
//     return x + y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// // এখানে add ও multiply ফাংশনকে callback হিসেবে পাঠানো হয়েছে
// console.log(calculate(5, 3, add));
// console.log(calculate(5, 3, multiply));
// =========async===============
// const getVar = () => {
//   return setTimeout(() => {
//     console.log("timeOut");
//   }, 300);
// };
// const withOutTimeOut = () => {
//   console.log("hallow world");
// };

// getVar()
// withOutTimeOut()
// ===================

const getVar=(callback)=> {
 setTimeout(()=> {
    console.log("timeOut")
    callback()
 },3000)
 
}
const withOutTimeOut = () => {
  console.log("hallow world");
};

getVar(withOutTimeOut)