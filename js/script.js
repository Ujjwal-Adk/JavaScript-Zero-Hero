console.log(" Hello World !");
console.log("My portfolio is now powered by JavaScript.")

// So now This is Day 2 and lets learn about the variables today 
// there are three ways to declare the variables i.e let , var , const 
// best practice to declare any variables is using let alwasys 

// Storing values 
const myName  = "Ujjwal Adhikari"; // String 
const myAge = 20; // int 

let currentYear = 2025; //int
let isLearning = true; //Boolean

// Now as we learned declaring variables we will print that in console 

console.log(myName)
console.log("I am" + myAge + "years old");
console.log("current Year :" + currentYear)

// // Selecting elemets from your HTML 

// // Through ID 
// const contactSection = document.getElementById("contact")
// console.log(contactSection)

// // By Tag name 
// const mainHeading = document.querySelector("h1") // Or else we could use getElementByTagName too
// console.log(mainHeading)

// // Selecting multiple Elements 
// const allHeadings = document.querySelectorAll("h2")
// console.log(allHeadings)

// Changing the inner content using DOM 

// Changing the h1
let mainHeading = document.querySelector("h1")
mainHeading.textContent = "Welcome to my Interactive Portfolio"

// Selcting the h2 of hero section 
let heroHeading = document.querySelector(".hero h2")
heroHeading.textContent = "This Website is powered by JavaScript"



