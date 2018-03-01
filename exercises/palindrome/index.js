// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// Solution 1 uses .reverse array method
// function palindrome(str) {
//   return str.split('').reverse().join('') === str;
// }

// Solution 2 uses .every array method
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

// Solution 3 loops through array and compares reversed to original
function palindrome(str) {
  let arr1 = str.split('');
  let arr2 = [];
  for (let i = arr1.length - 1; i >= 0; i--) {
    arr2.push(arr1[i]);
  }
  return arr1.join() === arr2.join();
}

module.exports = palindrome;
