/*
Mastering on React JS, Next JS & Prisma course
Assignment - 03, Module - 03
Submitted by Md. Rasel Rana, email: rasel.learn22@gmail.com
date: 19/06/2023
*/

/*
AJAX Post Request:
a)	Implement a JavaScript function that sends an AJAX POST request 
    to the following URL: "https://api.example.com/submit".
b)	Send a JSON payload with the following data: 
    {"name": "John Doe", "email": "johndoe@example.com"}.
*/


async function ajaxPostRequest() {
    const url = "https://api.example.com/submit";
    const payload = {
        "name": "John Doe",
        "email": "johndoe@example.com"
    }

    let response = await axios.post(url, payload);

    if (response.status == 200) {
        console.log("Request sent successfully");
    } else {
        console.log("error");
    }

}

ajaxPostRequest();