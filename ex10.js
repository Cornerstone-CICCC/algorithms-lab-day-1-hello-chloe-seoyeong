// Exercise 10: Write a function named 'formatDate' that takes a date string (in the format 'YYYY-MM-DD') and returns a formatted date string (e.g., 'January 1, 2022').

function formatDate(dateStr) {
  // your code here
  let month;
  let dateArray = dateStr.split('-');

  switch(dateArray[2]) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "Februrary";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
  }
  newDateFormat = `${month} ${parseInt(dateArray[2])}, ${dateArray[0]}`;

  return newDateFormat;
}

console.log(formatDate('2022-01-01')) // 'January 1, 2022'