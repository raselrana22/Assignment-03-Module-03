/*
Mastering on React JS, Next JS & Prisma course
Assignment - 03, Module - 03
Submitted by Md. Rasel Rana, email: rasel.learn22@gmail.com
date: 18/06/2023
*/

/*
Numbers:
a)	Write a JavaScript function that takes a positive integer as 
    input and returns true if it is a prime number, otherwise returns false.
b)	Implement the function to check if a given positive integer, 
    is a prime number.
*/

"use strict"

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    let sqrtN = Math.sqrt(n);
    for (let i = 2; i <= sqrtN; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}



function primeNumberCheck(n) {
    if (n < 2) {
        return false;
    }
    let sqrtN = Math.sqrt(n);
    for (let i = 2; i <= sqrtN; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


const inputNumber = prompt();  // user input receive 
if (inputNumber <= 0) {
    console.error("Invalid number");
} else {
    let result = isPrime(inputNumber);
    document.getElementById("myDiv").textContent =
        `Is ${inputNumber} prime? ${result}`;
}


const number = 7; // The given positive integer number
const result = primeNumberCheck(number);
if (result == true) {
    document.getElementById("myDiv").innerHTML =
        `${number} is a prime number !`
} else {
    document.getElementById("myDiv").innerHTML =
        `${number} is not a prime number !`
}
