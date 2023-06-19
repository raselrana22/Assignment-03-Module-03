/*
Mastering on React JS, Next JS & Prisma course
Assignment - 03, Module - 03
Submitted by Md. Rasel Rana, email: rasel.learn22@gmail.com
date: 18/06/2023
*/

/*
Window Object:
a)	Create a function that opens a new window with a specified URL 
    and dimensions (width and height).
b)	Implement the function to open a new window with the 
    URL "https://www.example.com" and dimensions 800x600.
*/

"use strict"

function openNewWindow(url, width, height) {
    const windowFeature = `width=${width}, height=${height}`;
    const newWindow = window.open(url, "_blank", windowFeature);
    if (newWindow) {
        document.write("Hello from new window");
    }
}

function openWindowByUrl(url, dimensions) {
    const newWindow = window.open(url, dimensions);
    if (newWindow) {
        document.write("Hello Ostad Team");
    }
}

const url = "https://www.ostad.com";  // put your url here
const width = 600;
const height = 400;
openNewWindow(url, width, height);


const urlGiven = "https://www.example.com";  // put your url here
const widthGiven = 800;
const heightGiven = 600;
const dimensions = `"width=${widthGiven}, "height=${heightGiven}"`
openWindowByUrl(urlGiven, dimensions);

