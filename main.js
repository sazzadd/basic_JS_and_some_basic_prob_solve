/*

//object example in js
const car={
    name:"fiat",
    model:500,
    weight:"850kg",
    color:"white",
    start:function(){
        console.log("car has started");
    },
    drive:function () {
        console.log("car is driving");
    },
};
console.log(car.weight);
console.log(car['color']);
car.start();
**/
/*
const car= ["volbo","toyta","tesla","odi"];
let CarL = car.length;
text = "<ul>";
for(i=0;i<car.length;i++){
    console.log(car[i]);
}
text+="</ul>";
*/
/*

//simple calculator
var num1= prompt("enter fist number : ");
var num2= prompt("enter second number :" );
num1 = parseInt(num1 ,10);
num2 = parseInt(num2 ,10);
var result;
result = num1 + num2;
document.write(num1 +"+"+ num2 +"="+result+ "</br>" ); 
result = num1 - num2;
document.write(num1 +"-"+ num2 +"="+result + "</br>" );
result = num1 * num2;
document.write(num1 +"*"+ num2 +"="+result + "</br>" );
result = num1 / num2;
document.write(num1 +"/"+ num2 +"="+result + "</br>" );
result = num1 % num2;
document.write(num1 +"%"+ num2 +"="+result + "</br>" );

*/
/*fat

//farenheit to celcius


var fahrenheit= parseFloat (prompt("enter fahrenheit  : "));

var calcius= (fahrenheit -32) * 5/9;
document.write("calcius is "+ calcius)

*/
/* //check result grade if else
var digit= prompt("enter a digit:");
if (digit==0)
    console.log("Zero");
else if (digit==1)
    console.log("One");
else if (digit==1)
    console.log("Two");
else if (digit==1)
    console.log("Three");
else if (digit==1)
    console.log("Four");
else if (digit==1)
    console.log("Five");
else if (digit==1)
    console.log("Six");
else if (digit==1)
    console.log("Seven");
else if (digit==1)
    console.log("Eight");
else if (digit==1)
    console.log("nine");
else
    console.log("not a digit")

*/
  /*  //check result grade if else
var digit = prompt("enter a digit:");
switch (digit) {
  case "1":
    console.log("Zero");
    break
  case "2":
    console.log("Two");
    break
  case "3":
    console.log("Three");
    break
  case "4":
    console.log("Four");
  case "5":
    console.log("Five");
  case "6":
    console.log("Six");
  case "7":
    console.log("Seven");
  case "8":
    console.log("Eight");
  case "9":
    console.log("nine");

  default:
    console.log("not a digit");
    break;

}
*/

/**/
/* 


for(var i=0;i <= 100; i++)
{
  document.write(""+ i +"</br>");
  if (i==10) {
    break
  }
}
  */

/* //even number by continue keyword
for(var i=0;i <= 100; i++)
  {
    
    if (i%2==0) {
      continue;
    }
    document.write(""+ i +"</br>");
  }
    */
/*  //check number positive or negitive  by if else 
  var num =prompt();
  if(num>0){
    document.write('positive');
  }
  else{
    document.write('negetive');
  }


  */
/* 
////check number positive or negitive  by turnary oparetor???

var num= Number(prompt("Enter a number:"))
var result = num > 100 ? "positive": "negitive"
document.write(result);
*/
/*
//even or od number by function


function checkOddOrEven(number) {
    return (number | 1) === number ? 'Odd' : 'Even';
}

console.log(checkOddOrEven(14));
console.log(checkOddOrEven(17));

*/
/*
//immediately invocable function
(function display(massage){
  console.log(massage)
})("you can pass parameter");
*/


//function expression

var display2=function display(){
  console.log("hellow");
}
display2();