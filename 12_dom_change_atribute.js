/*
Mastering on React JS, Next JS & Prisma course
Assignment - 03, Module - 03
Submitted by Md. Rasel Rana, email: rasel.learn22@gmail.com
date: 19/06/2023
*/

/*
DOM Change Attribute Value:
a)	Create a webpage with an image element (<img>) that has an initial 
    source URL.
b)	Implement a JavaScript function that changes the source URL of the 
    image element when a button is clicked. Use a different image URL 
    of your choice.
*/

function handleClick() {
    const imageElement = document.getElementById("myImage");
    imageElement.src = "./images/image2.webp";
}