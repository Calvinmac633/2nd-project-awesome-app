const { DateTime } = require("luxon");
const currHTML = document.querySelectorAll(".view-notes");

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
  const currDay = DateTime.local().day;
  console.log("document: " + currHTML + " current day:" + currDay);
};

// console.log(get1stOfMonth());

console.log(getCurrentDay());
