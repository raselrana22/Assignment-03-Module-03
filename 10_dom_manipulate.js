/*
Mastering on React JS, Next JS & Prisma course
Assignment - 03, Module - 03
Submitted by Md. Rasel Rana, email: rasel.learn22@gmail.com
date: 19/06/2023
*/

/*
DOM Manipulate CSS Class:
a)	Create a webpage with a button and a paragraph element.
b)	Implement a JavaScript function that adds a CSS class 
named "highlight" to the paragraph element when the button is clicked. 
The "highlight" class should change the background color of the paragraph 
to yellow.
*/

const textElement = document.getElementById("myText");
const btn = document.getElementById("myButton");

btn.addEventListener("click", handleBtnCLick)

function handleBtnCLick() {
    textElement.classList.add("highlight");
}
