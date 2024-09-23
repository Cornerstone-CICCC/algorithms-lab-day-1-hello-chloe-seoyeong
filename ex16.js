// Exercise 16: Write a function named 'sumNestedArray' that takes an array of arrays of numbers and returns the sum of all numbers.

function sumNestedArray(arr) {
  // your code here
  let flatArray = arr.flat(2);
  let sum = 0; 
  for(let i = 0; i < flatArray.length; i++) {
    sum += flatArray[i];
  }

  return sum;
}

console.log(sumNestedArray([[1, 2, 3], [4, 5], [6, 7, 8]])) // 36