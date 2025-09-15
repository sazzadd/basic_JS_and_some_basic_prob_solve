// const person = {
//     firstName:"Sazzad",
//     lastName:"Ador",
//     age:32,
//     fullName: function(){
//         return this.firstName + ""+ this.lastName
//     }

// }
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
const sazzad = new Person("sazzad", "ador", 29);
console.log(sazzad.fullName());
