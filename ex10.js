// Exercise 10: Write a function named 'formatDate' that takes a date string (in the format 'YYYY-MM-DD') and returns a formatted date string (e.g., 'January 1, 2022').

function formatDate(dateStr) {
  // your code here
  let dateArray = dateStr.split('-');
  const MONTH = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let dateMonth = "";

  for(let i = 0; i < MONTH.length; i++) {
    if(i === parseInt(dateArray[1]) - 1) {
      dateMonth = MONTH[i];
    }  
  }
  newDateFormat = `${dateMonth} ${parseInt(dateArray[2])}, ${dateArray[0]}`;

  return newDateFormat;
}

console.log(formatDate('2022-01-01')) // 'January 1, 2022'