// Lesson 14 - Template Literals
var title = "Sonic the Hedgehog";
var platform = "SEGA";
var year = 1991;
var info = title + " was released by " + platform + " in the year " + year + ".";
console.log(info); // Instead of this long formula you can do this:
var title = "Sonic the Hedgehog";
var platform = "SEGA";
var year = 1991;
var info = title + " was released by " + platform + " in the year " + year + ".";
console.log(info); // Instead of this long formula you can do this:
var title = "Sonic the Hedgehog";
var platform = "SEGA";
var year = 1991;
var info = title + " was released by " + platform + " in the year " + year + ".";
console.log(info); // Instead of this long formula you can do this:
var title = "Sonic the Hedgehog";
var platform = "SEGA";
var year = 1991;
var info = title + " was released by " + platform + " in the year " + year + ".";
console.log(info); // Instead of this long formula you can do this:
var title = "Sonic the Hedgehog";
var platform = "SEGA";
var year = 1991;
var info = title + " was released by " + platform + " in the year " + year + ".";
console.log(info); // Instead of this long formula you can do this:
var title = "Sonic the Hedgehog";
var platform = "SEGA";
var year = 1991;
var info = title + " was released by " + platform + " in the year " + year + ".";
// Instead of this long formula we can do the same thing using template literals:
var info2 = "".concat(title, " was released by ").concat(platform, " in the year ").concat(year, ".");
//Inside the curly brackets we put the name of a variable.
console.log(info2);
// How to put our sentence in a new line, is simply put our sentence in a new line like this:
var info2 = "".concat(title, " \nwas released by ").concat(platform, " \nin the year ").concat(year, ".");
console.log(info2);
// Template literals make embedding expressions much easier:
var num1 = 10;
var num2 = 5;
var sum = "The total is ".concat(num1 + num2);
console.log(sum);
// Lesson task
/* 1. Create three. variable, called firstName, course and channel, and
assign the value your name to name, Javascript to course and Dev Dreamer to channel. */
var firstName = "Sahara";
var course = "Javascript";
var channel = "Dev Dreamer";
/* 2. Create another variable called information, and use template literals to
construct the sentence, e.g. "John is learning Javascript with Dev Dreamer." */
var information = "".concat(firstName, " is learning ").concat(course, " with ").concat(channel, ".");
console.log(information);
