// Lesson 14 - Template Literals

let title = `Sonic the Hedgehog`;
let platform = `SEGA`;
let year = 1991;

let info = title + " was released by " + platform + " in the year " + year + ".";
console.log(info); // Instead of this long formula you can do this:





let title = `Sonic the Hedgehog`;
let platform = `SEGA`;
let year = 1991;

let info = title + " was released by " + platform + " in the year " + year + ".";
console.log(info); // Instead of this long formula you can do this:


let title = `Sonic the Hedgehog`;
let platform = `SEGA`;
let year = 1991;

let info = title + " was released by " + platform + " in the year " + year + ".";
console.log(info); // Instead of this long formula you can do this:


let title = `Sonic the Hedgehog`;
let platform = `SEGA`;
let year = 1991;

let info = title + " was released by " + platform + " in the year " + year + ".";
console.log(info); // Instead of this long formula you can do this:


let title = `Sonic the Hedgehog`;
let platform = `SEGA`;
let year = 1991;

let info = title + " was released by " + platform + " in the year " + year + ".";
console.log(info); // Instead of this long formula you can do this:


let title = `Sonic the Hedgehog`;
let platform = `SEGA`;
let year = 1991;

let info = title + " was released by " + platform + " in the year " + year + ".";
// Instead of this long formula we can do the same thing using template literals:

let info2 = `${title} was released by ${platform} in the year ${year}.`; 
//Inside the curly brackets we put the name of a variable.
    console.log(info2);

// How to put our sentence in a new line, is simply put our sentence in a new line like this:
let info2 = `${title} 
was released by ${platform} 
in the year ${year}.`; 

    console.log(info2);

// Template literals make embedding expressions much easier:

let num1 = 10;
let num2 = 5;

let sum = `The total is ${num1+num2}`;
    console.log(sum);

// Lesson task

/* 1. Create three. variable, called firstName, course and channel, and
assign the value your name to name, Javascript to course and Dev Dreamer to channel. */

let firstName = "Sahara";
let course = "Javascript";
let channel = "Dev Dreamer";


/* 2. Create another variable called information, and use template literals to
construct the sentence, e.g. "John is learning Javascript with Dev Dreamer." */

let information = `${firstName} is learning ${course} with ${channel}.`;
    console.log(information);



