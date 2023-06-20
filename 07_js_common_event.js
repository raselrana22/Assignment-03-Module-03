/*
Mastering on React JS, Next JS & Prisma course
Assignment - 03, Module - 03
Submitted by Md. Rasel Rana, email: rasel.learn22@gmail.com
date: 19/06/2023
*/

/*
JS Common Events: Implement a webpage with the following functionality:
a)	When the user clicks anywhere on the page, display an alert with 
    the coordinates (x, y) of the click.
b)	When the user presses any key on the keyboard, display an alert 
    with the key code of the pressed key.
c)	When the user moves the mouse over an image, change the image source 
    to another image of your choice.
*/

"use strict"

// click listener
document.addEventListener("click", handleClick);

function handleClick(event) {
    console.log(event);
    const x = event.clientX;
    const y = event.clientY;

    alert(`The clicked coordinates is ${x}, ${y}`);
}

// keypress listener 
document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
    alert(event.keyCode);
}


// mouseover listener 
const imageElement = document.getElementById("myImage");
imageElement.addEventListener("mouseover", handleOnMouse);

function handleOnMouse(event) {
    const image = document.getElementById("myImage");
    image.src = "./images/image2.webp";
}
