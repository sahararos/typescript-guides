// Lesson 10 - Numbers (datatype)
var num = 3;
var newNum = 3.16;
console.log(typeof num); // The result is "number".
console.log(typeof newNum); // The result is "number".
var mill = 1e6; // We can say this instead of let mill = 1000000
// 1 * (10**6) = 1000000
console.log(mill);
var smallNum = 1e-2;
console.log(smallNum); //Here we get 0.01
/* Objects have:
    - Methods
    Methods DO something, f.ex:
    greeting() {
        alert('Meow!')
    }

    - Properties
    Properties ARE something, f.ex.
    color: yellow


Javascript has built in (or 'global') objects such as Date and Math.

Primitives              Built in objects
number ---------------> Number
string ---------------> String
boolean --------------> Boolean
*/
var score = new Number(100);
console.log(typeof score); //Here we get "object".
/* Any number that we create automatically has access to number methods.
Any string we create has access to string methods. */
// Lesson tasks
// 1. Declare and initialise a variable with the value of 100,000. Log this to the console. 
var total = 1e5;
console.log(total);
// 2. In the console, identify the datatype of the variable.
console.log(typeof total); // Here I get "number".
