// Exercise 8: Write a function named 'longestWord' that takes a string of text and returns the longest word in the string.

function longestWord(text) {
  // your code here
  const textArray = text.split(' '); // ['The', 'monkey', 'loves', 'bananas']
  let longest = ''; // current longest word

  for(let i = 0; i < textArray.length; i++) {
    // if(textArray[i].length >= longest.length) {
    //   longest = textArray[i];
    // }
    const currentWord = textArray[i]; // current word in loop
    if(currentWord.length >= longest.length) { // check if currentWord is longer than longest
      longest = currentWord; // store current word as the longest word if its longer
    }
  }

  return longest;
}

console.log(longestWord('The monkey loves bananas')); // 'bananas'