// Lesson 22 - If else statements
// The if statement has the following structure:
/*
if(condition) {
    // code to be run if condition is true.
}
*/
if (true) {
    console.log("The condition is true.");
} // The console logs "The condition is true" since the condition is true.
if (false) {
    console.log("The condition is true.");
} // The console does not log anything since the condition is false.
if (1 < 10) {
    console.log("The condition is true.");
} // The code runs since 1 is smaller than 10.
if (1 > 10) {
    console.log("The condition is true.");
} // The console logs nothing as 1 is not larger than 10.
var game = "Mario";
if (game === "Mario") { // If game equals to Mario, then log: "The condition is true."
    console.log("The condition is true."); // The code runs "The condition is true."
}
/* Sometimes we may want to additionally execute some code when the condition is false.
We can do exactly that with an if else statement. What we did above was an if statement,
but now we are going to do an if else statement. */
// Syntax of if else statement:
/*

if (condition) {
    // code to be run if condition is true.
} else {
    // code to run if the condition is false.
}

*/
var instrument = "violin";
if (instrument === "guitar") {
    console.log("The condition is true");
}
else {
    console.log("The condition is false");
}
/* There may be times we want to test several variants of a condition and we can do this with
an else if statement. */
var roll = 2;
if (roll === 4) { // If roll equals to 4, do the following in the console.
    console.log("You rolled a four");
}
else if (roll === 5) {
    console.log("You rolled a five");
}
else if (roll === 6) {
    console.log("You rolled a six");
}
else { // If all the above conditions are false, then run this:
    console.log("You rolled less than 4");
}
// Lesson tasks
/* 1. What will the following code display in the console? */
var num = 10 + 2;
if (num > 2 && num < 20) {
    console.log("TRUE");
}
else {
    console.log("FALSE");
}
// Before running this I am going to guess: TRUE
/* 2. Create a variable called user and set its value to "employee". Create an else if statement
to first check if user is equal to guest, if this is true console log "Login denied", then check
if user is equal to employee and console log "Successfully logged in". */
var user = "employee";
if (user === "guest") {
    console.log("Login denied");
}
else if (user === "employee") {
    console.log("Successfully logged in");
}
/* 3. Assign your first name to a variable called myName and create an if statement to
see if the number of letters in your name is more than 5. If it is, alert "More than 5",
next check to see if it is exactly 5 letters. If it is, alert "Exactly 5 letters". If
neither of these is true, then alert "Less than 5 letters". */
var firstName = "Sahara";
if (firstName.length > 5) {
    alert("More than 5 letters");
}
else if (firstName.length === 5) {
    alert("Exactly 5 letters");
}
else {
    alert("Less than 5 letters");
}
// Another way to write this:
var myName = "Sahara";
var nameLength = myName.length;
if (nameLength > 5) {
    alert("More than 5 letters");
}
else if (nameLength === 5) {
    alert("Exactly 5 letters");
}
else {
    alert("Less than 5 letters");
}
console.log(nameLength); // Output: 6 since Sahara has 6 letters.
