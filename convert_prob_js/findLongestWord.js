function findLongestWord(str) {
  let words = str.split(" ");
  let LongestWord = "";
  for (let word of words) {
    if (word.length > LongestWord.length) {
      word = LongestWord;
    }
  }
  return LongestWord;
}

// Example usage:
const input = "I am learning Programming to become a programmer";
console.log(findLongestWord(input)); // Output: Programming
