function checkLastLetterName(name) {
  let lastLetter = name.slice(-1);
  let checkLtr = false;
  let lettrsArray = ["a", "e", "i,", "u"];
  for (let ltr of lettrsArray) {
    console.log(ltr);
    if (ltr === lastLetter) {
      return true;
    }
  }
  if (checkLtr) {
    return "good name";
  } else {
    return "bad name";
  }
  //   return checkLtr ? "good name" : "bad name";
}

// console.log(checkLastLetterName("sazzad"));

function lastLtrCheck(string) {
  let letters = ["a", "e", "i", "u",];

  let result = false;
  let lastLetter = string[string.length-1].toLowerCase();
  // console.log(lastLetter)

  for (let ltr of letters) {
    // console.log(ltr)
    if (ltr === lastLetter) {
      result = true;
      break;
    }
  }



  return result? "good name":"bad name";
}
console.log(lastLtrCheck("hello"));
