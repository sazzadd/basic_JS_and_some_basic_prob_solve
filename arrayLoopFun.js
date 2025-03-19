const sum = (a,b)=> a+b;
const sub = (a,b)=> a-b;
const mul = (a,b)=> a+b;
const div = (a,b)=> a+b;
const modulus = (a,b)=> a%b;
const funcs = [sum,sub, mul,div,modulus]
const a= 5 ;
const b = 10;
// for (let i= 0; i< funcs.length;i++){
// console.log(funcs[i](a,b))
// }
for (let i= 0; i< funcs.length;i++){
    result = funcs[i](a,b)
    console.log(funcs[i].name)
    console.log(`{${funcs[i].name} : ${result}}`)
    }
    