function reversed(word) {
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord
}


function isPalindrome(word) {
  const reversedWord = reversed(word)

  if (word === reversedWord) {
    return true
  } else {
      return false
  }
}

/* 
  reverse the input string
  check if the input is the same as the reverse 
    return true
  else 
    return false
*/

/*
    make a function that returns true if the word is a palindrome and false if not.
  that means if the word is the same as the word in reverse, I should return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
