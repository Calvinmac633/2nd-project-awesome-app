const { DateTime } = require("luxon");
const currDay = DateTime.local().day;
//variable for day
// const days = document.getElementsByClassName("view-notes");
//month, day, and year for each day in the calendar

// const getCurrentTime = (sqlTime) => {
//     sqlTime = sqlTime.toISO();
// }

//first day of the month
const get1stOfMonth = () => {
  const firstDayOfThisMonth = DateTime.local().startOf("month");
  return firstDayOfThisMonth.weekday;
};

const getCurrentDay = () => {
  if (currDay === /* id of the html element */ 11) {
    //do some css to highlight the current day
  }
};

//grey out past days
// const pastDays = () => {
//     if (/*if a day is less than the currDay  */) {
//         // add a class to grey out the 
//     } 
// }

const appendDates = () => {
  const monthLength = DateTime.local().daysInMonth;
  console.log(monthLength);
  for (var i = 0; i < monthLength; i++) {
    $(".view-notes").add(`<button id = "${i}">${i}</button>`);
  }
};
// console.log(get1stOfMonth());

console.log(appendDates());
