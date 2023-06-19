/*
Mastering on React JS, Next JS & Prisma course
Assignment - 03, Module - 03
Submitted by Md. Rasel Rana, email: rasel.learn22@gmail.com
date: 19/06/2023
*/

/*
JS DOM Working with Form Input: Implement a webpage with a form that has the following fields:
a)	Name (text input)
b)	Email (email input)
c)	Password (password input)
d)	Confirm Password (password input)
e)	Submit (button)

Implement JavaScript validation for the form fields:
f)	Name should not be empty and should contain only letters.
g)	Email should be a valid email address.
h)	Password should have a minimum length of 8 characters and contain at 
    least one uppercase letter, one lowercase letter, and one digit.
i)	Confirm Password should match the Password field.
j)	Display appropriate error messages for invalid fields.
*/

function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Reset error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    // Retrieve form field values
    const form = document.getElementById("myForm");
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Name validation
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
    } else if (!/^[a-zA-Z]+$/.test(name)) {
        document.getElementById("nameError").textContent = "Name should contain only letters.";
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Email is invalid.";
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
    } else if (password.length < 8 || !/\d/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        document.getElementById("passwordError").textContent = "Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.";
    }

    // Confirm Password validation
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent = "Confirm Password is required.";
    } else if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
    }

    // If there are no error messages, form is valid
    if (!document.querySelectorAll(".error").length) {
        alert("Form submitted successfully!");

    }
}
