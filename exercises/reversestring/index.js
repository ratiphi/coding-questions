// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// My solution 1
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// My solution 2
function reverse(str) {
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);  
  }
  return arr.join('');
}

// My solution 3
// function reverse(str) {
//     let arr = str.split('');
//     let head = 0;
//     let tail = arr.length - 1;
//     let temp;
//     while (tail > head ){
//         temp = arr[head];
//         arr[head] = arr[tail];
//         arr[tail] = temp;
//         head++;
//         tail--;
//     }
//     return arr.join('');
// }

// His solution 2
// function reverse(str) {
//     let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }

// His solution 3
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
// }

module.exports = reverse;