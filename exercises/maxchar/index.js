// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution 1
function maxChar(str) {
  const obj = {};
  let maxVal = 0;
  let maxChar = '';

  // load up object with characters from string.  Increment them by 1
  // or if they don't exist yet, set them equal to 1.
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }

  // loop through properties in object to find which character in string
  // had the highest count.  
  for (let prop in obj) {
    if (obj[prop] > maxVal) {
      maxVal = obj[prop];
      maxChar = prop;
    }
  }
  return maxChar;
}

module.exports = maxChar;
