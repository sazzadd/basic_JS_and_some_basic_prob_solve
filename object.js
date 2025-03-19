const person = {
  name: "sazzad",
  address: "patuakhali , bangladesh",
  "fvrt color": ["blue", "red," ,"green"]
};
person["email"] = "sazzad@example.com";
// console.log(person["fvrt color"])


const keys = Object.keys(person);
// console.log(keys)
for(let item of keys){
    
    console.log(person[item])
}