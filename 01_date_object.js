/*
Mastering on React JS, Next JS & Prisma course
Assignment - 03, Module - 03
Submitted by Md. Rasel Rana, email: rasel.learn22@gmail.com
date: 18/06/2023
*/

/*
Date Object: 
a)	Create a function that takes a date in the format "YYYY-MM-DD" as a parameter 
    and returns the day of the week for that date. The function should use the Date object.
b)	Implement the function to display the day of the week for the current date.
*/

"use strict"

// the day of the week for the specific date function
function dayOfTheWeek(dateString) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];

    const date = new Date(dateString);
    if (isNaN(date)) {
        alert("Invalid date format");
        return null;
    }

    const weekDay = days[date.getDay()];
    return weekDay;
}

// the day of the week for the current date function
function dayOfWeekCurrent() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    const date = new Date(); // the date is set to the current date
    const weekDay = days[date.getDay()];
    document.getElementById("myDiv").textContent = weekDay;
}


let dateString = "2023-06-18"  // put your date here 
let day = dayOfTheWeek(dateString);
if (day !== null) {
    document.getElementById("myDiv").textContent = day;
}

dayOfWeekCurrent(); // If we call the function display the day of the week for the current date





