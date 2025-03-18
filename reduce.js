const number = [1, 2, 3, 4, 5, 6];
const result = number.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
});
console.log(result)
// max num
// const result = number.reduce((prevValue, currentValue) => {
//     if(prevValue>currentValue){
//         return prevValue;
//     }
//     else{
//         return currentValue;
//     }
//   },0);

// const result = number.reduce((prevValue, currentValue) => {
//     if(prevValue>currentValue){
//         return prevValue;
//     }
//     else{
//         return currentValue;
//     }
//   },0);

// const result = number.reduce((prevValue, currentValue) => {
//  return Math.max(prevValue, currentValue);
// }, 0);

// console.log(result);
// =======================

// const product = [
//     {
//       "id": 1,
//       "name": "Ultra HD Smart TV",
//       "price": 499.99,
//       "amount": 5
//     },
//     {
//       "id": 2,
//       "name": "Gaming Laptop",
//       "price": 1099.99,
//       "amount": 4
//     },
//     {
//       "id": 3,
//       "name": "4K Action Camera",
//       "price": 199.99,
//       "amount": 3
//     },
//     {
//       "id": 4,
//       "name": "Noise Cancelling Earbuds",
//       "price": 79.99,
//       "amount": 2
//     },
//     {
//       "id": 5,
//       "name": "Smart Home Speaker",
//       "price": 129.99,
//       "amount": 1
//     }
//   ]
  
// const result = product.reduce((prevValue,currentValue)=> {

//     return Math.round(prevValue + (currentValue.price*currentValue.amount)) 
// },0)
// console.log(result)
