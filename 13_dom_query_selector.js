/*
Mastering on React JS, Next JS & Prisma course
Assignment - 03, Module - 03
Submitted by Md. Rasel Rana, email: rasel.learn22@gmail.com
date: 19/06/2023
*/

/*
DOM Query Selector:
a)	Create a webpage with multiple paragraphs containing different 
    classes and IDs.
b)	Implement a JavaScript function that selects all paragraphs with 
    a specific class and changes their text color to red.
*/

function changeTextColor() {
    const paragraphs = document.querySelectorAll(".special-text");

    paragraphs.forEach(element => {
        element.style.color = "red";
    });
}

changeTextColor();