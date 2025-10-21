// Lesson 17 - How to use JS Math object

const PI = Math.PI;
console.log(PI); // Output: 3.141592653589793
console.log(PI.toFixed(2)); // Output: 3.14

// Some of the most common used math methods:

let min = Math.min(1, 2, 3, 100, 43, 7, 5000);
console.log(min); // Output: 1 (since it's the lowest number we provided in the list/parentheses).

let min2 = Math.max(1, 2, 3, 100, 43, 7, 5000);
console.log(min2); // Returns the highest number: 5000.

console.log(Math.round(7.4)); // Þetta framkvæmir námundun. Því fáum við 7 hérna.


// Lesson tasks

/* 1. Use the correct math function to generate three random numbers, between 1-10. 
Store each of these in variables named: num1, num2, num3. Console log the variables. */

let num1 = Math.random().toFixed(1)*10;
let num2 = Math.random().toFixed(1)*10;
let num3 = Math.random().toFixed(1)*10;

console.log(num1, num2, num3); // Output: 9, 7, 4


/* 2. Find the largest of the three numbers by using the relevant math method, 
store the value in a variable called max and console log max to show the largest number.  */

let max = Math.max(num1, num2, num3);
console.log(max); // Output: 