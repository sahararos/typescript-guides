// Lesson 11 - Number Methods

let PI = 3.141596254;
// By using the .toFixed method we specified how many numbers we want to show after the decimal point.
num = PI.toFixed(3); //Use () when using a method.
console.log(num); // Here we get 3.142 (We do not get a 1 in the end because of the 5). 


// .toPrecision returns the precise number of digits regardless of where the decimal point is.
num = PI.toPrecision(5); // Here we get 3.1416 as this displays the number of PI with the total of 5 numbers. 
console.log(num);

// .toExponential is used to convert a number into its exponential notation, represented as a string.
let mill = 1000000;
num = mill.toExponential();
console.log(num); // Here we get 1e+6.


// Lesson tasks

/* 1. Create a variable called PI and set its value to 3.14159. Use the correct Number 
method to display only three digits after the decimal point. Log this to the console. */

const PI = 3.14159;
num = PI.toFixed(3);
console.log(num);

/* 2. Using the previous PI variable, create a new variable called num2 and use the
correct Number method to display a total of three digits only. */

num2 = PI.toPrecision(3);
console.log(num2);

/* Create a variable called lightSpeed and set its value to 186000. Use the 
.toExponential() method to log this new display in the console. */

let lightSpeed = 186000;
console.log(lightSpeed.toExponential());


