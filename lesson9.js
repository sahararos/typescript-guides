// Lesson 9 - Assignment Operators
// += operator
var score = 100;
//Instead of saying: score = score + 100; //we can simply say:
score += 100;
console.log(score); // In both cases we get 200.
// -= operator
var balance = 5000;
// Instead of saying balance = balance - 400, we can say:
balance -= 400;
console.log(balance); // Here we get 4600.
// *= operator
var donation = 100;
//Instead of saying donation = donation * 2, we can say:
donation *= 2;
console.log(donation); // Here we get 200
// /= operator
var sweets = 10;
// Instead of saying sweets = sweets / 10, we can say:
sweets /= 10;
console.log(sweets); // Here we get 1.
// %= operator
var pizzaSlices = 10; // Let's say we want to share these slices with 3 people:
pizzaSlices %= 3;
console.log(pizzaSlices); // Here we get 1. 
// Lesson tasks
// 1. What will the value of x be in the following:
var x = 30; // x = 30
x += 10; // x = 40
x /= 2; // x = 20
console.log(x);
/* 2. Create a variable called xp and initialise it to have a value of 250. Multiply the
value by 2 and console log it. */
var xp = 250;
xp *= 2;
console.log(xp); // Here we get 500.
