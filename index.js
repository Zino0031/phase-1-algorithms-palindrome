function isPalindrome(word) {

  word = word.toLowerCase();
  let right = word.length -1;
  let wordright = [];
  for (let i = right; i >= 0; i--){

    wordright.push(word[i])
  }

return word === wordright.join('') ? true : false;
}


//my test 
console.log("Expecting: true");
console.log('my test madam =>',isPalindrome('madam'));
console.log("Expecting: false");
console.log('my test robot =>' ,isPalindrome("robot"));


/* 
1. Convert word to lowercase.
2. making right that pointing to the last characters of the word.
3. making a for Loop that reverse and push word in wordright.
4. adding join('') method that remove space and quete from the array and make back all characters in 1 word
5. check if the first input word === the reversed wordright return true else return false
*/

/*
 The isPalindrome function checks if a given word is a palindrome. It first converts the word to lowercase to ensure
 case-insensitive comparison. Then,it making right, that start at end of the word then it making a loop that reverse and push 
 the new reversed word in wordright, after that it comparing the first input word with the reversed wordright . 
 If the check completes without finding any differences, the function returns true, confirming that the word is indeed a palindrome.
 If at any point the characters are different, the function returns false, indicating that the word is not a palindrome. 

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
