const arr = ["ador", "sazzad", "ab"];

function smallestString(strings) {
  let smallest = strings[0];
  for (let str of strings) {
    // console.log(str);
    if (strings.length < smallest.length) {
      smallest = str;
    }
  }
  return smallest;
}

console.log(smallestString(arr));
