function deleteInvalids(array) {
    if(Array.isArray(array)== false){
        return "array na hoyar karone code agate parcena "
    }
  let uniqArray = [];
  for (num of array) {
    if (typeof num === "number" &&  isNaN(num) === false) {
      uniqArray.push(num);
      
    }
  }
  return uniqArray;
}
console.log(deleteInvalids([120, 30, 80, NaN, false], 1, "2"));
