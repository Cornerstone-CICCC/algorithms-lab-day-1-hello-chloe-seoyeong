// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns an object with the count of each string in the array.

function countOccurrences(arr) {
  // your code here
  let fruit = {};
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] in fruit) {
      let count = fruit[`${arr[i]}`] + 1;
      fruit[`${arr[i]}`] = count;
    } else {
      fruit[`${arr[i]}`] = 1;
    }
  }

  return fruit;
}

console.log(countOccurrences(['apple', 'banana', 'apple'])) // { apple: 2, banana: 1 }