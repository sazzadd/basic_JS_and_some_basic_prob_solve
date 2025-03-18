const arr = [23, 1, 20, 4];
const result = arr.reduce((acc, current)=>{
    let even =[]
   if(current%2==2){
    acc.push(current)
   }
},0)
console.log(result)