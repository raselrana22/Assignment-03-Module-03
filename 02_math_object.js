/*
Mastering on React JS, Next JS & Prisma course
Assignment - 03, Module - 03
Submitted by Md. Rasel Rana, email: rasel.learn22@gmail.com
date: 18/06/2023
*/

/* 
Math Object:
a.	Write a JavaScript function that takes an array of numbers as input and returns 
    the square root of the sum of squares of all the numbers. Use the Math object to perform 
    the necessary calculations.
b.	Implement the function to display the square root of the sum of squares for an 
    array of numbers.
*/

"use strict"

// the square root of the sum of squares of all the numbers function
function calculateSquareRootOfSumOfSquares(arr) {
    const squaredArray = arr.map(element => {
        return Math.pow(element, 2);  // make square of a given number
    });

    let sumOfSquaredArray = 0;
    for (let i = 0; i < squaredArray.length; i++) {
        sumOfSquaredArray += squaredArray[i];
    }
    const squareRoot = Math.sqrt(sumOfSquaredArray);
    return squareRoot;
}


// display the square root of the sum of squares for an array of numbers.
const numbersArray = [1, 2, 3, 4]; // the number array 
let result = calculateSquareRootOfSumOfSquares(numbersArray);;
if (result !== null) {
    document.getElementById("myDiv").innerHTML = result;
}
