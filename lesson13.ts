// Lesson 13 - String Concatenation

// "Concatenation" is a fancy word for "join together".

let day = "Good morning, ";
let night = "Good evening, ";
let question = "how are you?";

let greetingDay = day + question;
let greetingNight = night + question;

console.log(greetingDay);
console.log(greetingNight);
console.log(day + "have you had breakfast?");

//let firstName = prompt("What is your name?");
//console.log("Hello " + firstName + ", " + question);

let string = "10";
let num = 5;
let result = string + num;
console.log(result); // The result is 105. 
/* The reason we get 105 is because if either operator is a string
then Javascript assume string concatenation. We can see this by checking 
the typeof result: */

console.log(typeof result); // This returns "string".
// Whenever we add a string and number together, Javascript assumes string concatenation.

// Using .concat

let greetingDay = day.concat(question); // The result is: "Good morning, have you had breakfast?"



