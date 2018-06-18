// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
// function anagrams(stringA, stringB) {
//   const strA = stringA.match(/[a-zA-Z]+/g).join('').split('').sort().join('');
//   const strB = stringB.match(/[a-zA-Z]+/g).join('').split('').sort().join('');

//   return strA === strB;
// }

// Solution 2
function anagrams(stringA, stringB) {
  const objA = {};
  const objB = {};

  for (let char of stringA) {
    objA[char] = objA[char] + 1 || 1;
  }
  for (let char of stringB) {
    objB[char] = objB[char] + 1 || 1;
  }

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  for (let char in objA) {
    if (objA[char] !== objB[char]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
