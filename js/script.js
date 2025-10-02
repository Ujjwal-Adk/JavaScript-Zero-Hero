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

// Working with the copyright year 

let upadateDate = new Date().getFullYear();

let copyRightText = document.querySelector("#copyright")
copyRightText.textContent = "© " + upadateDate + " Ujjwal. All rights reserved."

// new Date().getFullYear
// new Date(year , month , day)

//  DAY 2 

// In this chapter we will learn about the functions 

// Making the function first using the const term so that it remains constant and the name of variables where the whole function is stored and the directly using the keyword i.e functions, There are another ways to make the function too we will learn about that later like arrow function 
const greetUser = function() {
    console.log("Hey everyone, Welcome to my Portfolio ! ")
    console.log("Thanks for visiting")
}
// Calling the Function / making the function is not enough we need to call them too 
greetUser();

// We can now call the function that print this message as much time we like just using one sentence 

greetUser();
greetUser();

// Now we will learn to use the parameters with the functions 
// With one parameter 

const greetByName = function(name) {
    console.log("This user name is " +name);
}
let $userName = prompt("Enter your name to continue please : ") // Taking inputs through the user for the parameter 
greetByName($userName);

// Now lets try using the diferent parameters 
const introduction = function(fullName , age , hobby){
    console.log("Hi , This is "+fullName);
    console.log("I am "+age+" years old. My hobby is "+hobby);
}

introduction("Tejveer" , 19 , "reading books" )

// Functions that returns values 

const sum = function(number_1 , number_2){
    result = number_1+ number_2;
    return result // This function will return result which is the sum of number 1 and number 2 
}

// EVENTS 
const contactLink = document.querySelector(".navbar ul li:nth-child(4) a");

const contactSection = document.querySelector("#contact");

// Now creating function where event is assigned 

const scrollBehave = function(event) {
    event.preventDefault()
    //This below line is to execute the designated page 
    contactSection.scrollIntoView({behavior : 'smooth'});
}

// Calling the function with event listener 
// Whenevr any kind of activity happens(event) function is activated 
contactLink.addEventListener("click" , scrollBehave)


