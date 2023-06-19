/*
Mastering on React JS, Next JS & Prisma course
Assignment - 03, Module - 03
Submitted by Md. Rasel Rana, email: rasel.learn22@gmail.com
date: 18/06/2023
*/

/*
Navigator Object:
a)	Write a JavaScript function that detects the user's browser name 
    and version using the navigator object.
b)	Implement the function to display the user's browser name and version.
*/

"use strict"

function getBrowserInfo() {
    const browser = {};
    const userAgent = navigator.userAgent;

    // Check for Firefox
    if (userAgent.indexOf("Firefox") !== -1) {
        browser.name = "Mozilla Firefox";
        browser.version = userAgent.split("Firefox/")[1];
    }
    // Check for Chrome
    else if (userAgent.indexOf("Chrome") !== -1) {
        browser.name = "Google Chrome";
        browser.version = userAgent.split("Chrome/")[1].split(" ")[0];
    }
    // Check for Edge
    else if (userAgent.indexOf("Edge") !== -1) {
        browser.name = "Microsoft Edge";
        browser.version = userAgent.split("Edge/")[1].split(" ")[0];
    }
    // Unknown browser
    else {
        browser.name = "Unknown";
        browser.version = "Unknown";
    }

    return browser;
}

const browserInfo = getBrowserInfo();
console.log("Browser Name:", browserInfo.name);
console.log("Browser Version:", browserInfo.version);





function displayBrowserInfo() {
    const browser = {};
    const userAgent = navigator.userAgent;

    // Check for Firefox
    if (userAgent.indexOf("Firefox") !== -1) {
        browser.name = "Mozilla Firefox";
        browser.version = userAgent.split("Firefox/")[1];
    }
    // Check for Chrome
    else if (userAgent.indexOf("Chrome") !== -1) {
        browser.name = "Google Chrome";
        browser.version = userAgent.split("Chrome/")[1].split(" ")[0];
    }
    // Check for Edge
    else if (userAgent.indexOf("Edge") !== -1) {
        browser.name = "Microsoft Edge";
        browser.version = userAgent.split("Edge/")[1].split(" ")[0];
    }
    // Unknown browser
    else {
        browser.name = "Unknown";
        browser.version = "Unknown";
    }

    return browser;


    const browserName = browser.name;
    const browserVersion = browser.version;

    const message = `Browser Name: ${browserName}\nBrowser Version: ${browserVersion}`;
    console.log(message);
}

displayBrowserInfo();
