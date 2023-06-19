/*
Mastering on React JS, Next JS & Prisma course
Assignment - 03, Module - 03
Submitted by Md. Rasel Rana, email: rasel.learn22@gmail.com
date: 19/06/2023
*/

/*
Create Element & Append Element:
a)	Create a webpage with an empty unordered list (<ul>).
b)	Implement a JavaScript function that dynamically creates 
    five list items (<li>) with sequential numbers (1 to 5) and 
    appends them to the unordered list.
*/

"use strict"

function createListItems() {
    const myList = document.getElementById("myList");

    for (let i = 1; i <= 5; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `${i}: List Item-${i}`;
        myList.appendChild(listItem);
    }
}

createListItems();
