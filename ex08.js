// Exercise 8: Write a function named 'longestWord' that takes a string of text and returns the longest word in the string.

function longestWord(text) {
  // your code here
  const textArray = text.split(' ');
  let longest = '';

  for(let i = 0; i < textArray.length; i++) {
    // if(textArray[i].length >= longest.length) {
    //   longest = textArray[i];
    // }
    const currentWord = textArray[i];
    if(currentWord.length >= longest.length) {
      longest = currentWord;
    }
  }

  return longest;
}

console.log(longestWord('The quick brown fox jumps over the lazy dog')); // 'jumps'