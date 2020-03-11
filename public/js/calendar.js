const { DateTime } = require("luxon");
// const dateFormat = "YYYY-MM-dd";
const now = DateTime.local();
//1)what's day of week of 1st of month?
const firstOfMonthDayOfWeek = now.startOf("month").weekday;
console.log("Frist of Month Day of Week", firstOfMonthDayOfWeek);
//how many days in this month?
const numberOfDaysInMonth = now.endOf("month").day;
console.log("Number of Days in the month", numberOfDaysInMonth);
//container 
//target it by id 1
//build first 