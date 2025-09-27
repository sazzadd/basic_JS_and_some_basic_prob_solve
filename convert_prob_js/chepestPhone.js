const mobiles = [
  { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "xoami", price: 1800, camera: "12mp", color: "black" },
  { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
  { name: "Walton", price: 31000, camera: "12mp", color: "black" },
  { name: "HTC", price: 27000, camera: "12mp", color: "black" },
];
// function cheapestPhone(phones) {
//    let lowest = phones[0];
//   for (let phone in phones) {
//     console.log(phone);
//     if (phone.price < lowest.price) {
//       lowest = phone;
//     }
//   }
//   return lowest;
// }
// console.log(cheapestPhone(mobiles));
function cheapestPhone(phones) {
  let lowest = phones[0];
  for (let phone of phones) {
    if (lowest.price > phone.price) {
      lowest = phone;
    }
  }

  return lowest;
}
console.log(cheapestPhone(mobiles));

// to total price


