/*
Mastering on React JS, Next JS & Prisma course
Assignment - 03, Module - 03
Submitted by Md. Rasel Rana, email: rasel.learn22@gmail.com
date: 19/06/2023
*/


/*
AJAX Get Request:
a)	Implement a JavaScript function that sends an AJAX GET request 
    to the following URL: "https://api.example.com/data".
*/

async function ajaxGetRequest() {
    const url = "https://api.example.com/data";
    let response = await axios.get(url);
    if (response.status == 200) {
        console.log("get data successful");
    } else {
        console.log("error");
    }
}

ajaxGetRequest();