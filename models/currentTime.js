const { DateTime } = require("luxon");

//month, day, and year for each day in the calendar

const getCurrentTime = (sqlTime) => {
    sqlTime = sqlTime.toISO();
    
}

//first day of the month
const get1stOfMonth = () => {
    const firstDayOfThisMonth = DateTime.local().startOf('month');
    return firstDayOfThisMonth.weekday;
}   
// console.log(get1stOfMonth());





