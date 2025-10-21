// Lesson 13 - String Concatenation
// "Concatenation" is a fancy word for "join together".
var day = "Good morning, ";
var night = "Good evening, ";
var question = "how are you?";
var greetingDay = day + question;
var greetingNight = night + question;
console.log(greetingDay);
console.log(greetingNight);
console.log(day + "have you had breakfast?");
//let firstName = prompt("What is your name?");
//console.log("Hello " + firstName + ", " + question);
var string = "10";
var num = 5;
var result = string + num;
console.log(result); // The result is 105. 
/* The reason we get 105 is because if either operator is a string
then Javascript assume string concatenation. We can see this by checking
the typeof result: */
console.log(typeof result); // This returns "string".
// Whenever we add a string and number together, Javascript assumes string concatenation.
// Using .concat
var greetingDay = day.concat(question); // The result is: "Good morning, have you had breakfast?"
