/*
Mastering on React JS, Next JS & Prisma course
Assignment - 03, Module - 03
Submitted by Md. Rasel Rana, email: rasel.learn22@gmail.com
date: 19/06/2023
*/

/*
HTML DOM Document:
a)	Create a webpage with a button and a paragraph element.
b)	Implement a JavaScript function that changes the text 
    content of the paragraph element to "Button Clicked!" 
    when the button is clicked.
*/

const textElement = document.getElementById("myText");
const btn = document.getElementById("myButton");

btn.addEventListener("click", handleBtnCLick)

function handleBtnCLick() {
    textElement.innerText = "Button Clicked!";
}



