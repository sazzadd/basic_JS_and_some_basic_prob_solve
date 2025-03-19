const arr = [45,12,24,36,48,60,60,60]
console.log(...arr)
console.log(new Array(5).fill("hellow"))
let largestValue =[]
for(let i =0 ; i <arr.length;i++ ){
    console.log(arr[i])
    if(arr[i] > largestValue){
       lagestValue =  arr[i]
    }
    
}
console.log(lagestValue)


const largestNumber = new Set(arr)

console.log(Math.max(...Array.from(largestNumber)))