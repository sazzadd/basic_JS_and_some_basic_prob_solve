// const price = 5000;

// if (price >= 5000) {
//   discount = (price * 10) / 100;

//   payment = price - discount;
//   console.log(payment);
// }

// age jodi 12 year prohonto hoy tobe 20% discount pabe 
// age jodi 12- 25 year prohonto hoy tobe 15% discount pabe
// age jodi 25- 60 year prohonto hoy tobe 10% discount pabe


const age = 25;
const price = 500

if(age <= 12){
  discount = (price * 20)/100 ;
  console.log(discount);
  payment = price - discount ;

}
else if (age =>25){
    discount = (price * 10)/100 ;
  console.log(discount);
  payment = price - discount ;
  console.log("you have got 10% dicount  , now pay "+payment);
}
else if (age =>35 ){
    discount = (price * 5)/100 ;
  console.log(discount);
  payment = price - discount ;
  console.log(payment);
}

else{
  console.log("there have no discount")
}
