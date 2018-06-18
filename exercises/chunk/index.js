// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Solution 1
// function chunk(array, size) {
//   let inputArr = array;
//   let returnArr = [];
//   for (let i = 0; i <= (inputArr.length / size) + 1; i++) {
//     returnArr.push(inputArr.splice(0, size));
//   }
//   if (inputArr.length > 0) {
//     returnArr.push(inputArr);
//   }
//   return returnArr;
// }


// Solution 2
function chunk(array, size) {
  let returnArr = [];
  let index = 0;

  while (index < array.length) {
    returnArr.push(array.slice(index, index + size));
    index += size;
  }
  return returnArr;
}

module.exports = chunk;