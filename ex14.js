// Exercise 14: Write a function named 'mergeArrays' that takes two arrays and returns a new array that combines the elements of both arrays, alternating between them.

function mergeArrays(arr1, arr2) {
  // your code here
  let mergeArr = arr1.concat(arr2);
  let newArray = mergeArr.sort();

  return newArray
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])) // [1, 2, 3, 4, 5, 6]