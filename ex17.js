// Exercise 17: Write a function named 'mostFrequent' that takes an array of strings and returns the string that appears the most frequently.

function mostFrequent(arr) {
  // your code here
  let countGlobal = 0;
  let fruit = null;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      let countLocal = 0;
      if(i !== j && arr[i] === arr[j]) {
        countLocal++;
      }
      if (countLocal > countGlobal) {
        fruit = arr[i];
      }
    }
  }
  return fruit;
}

console.log(mostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'])) // 'apple'