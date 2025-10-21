// Lesson 18 - JS Comparison Operators

/* Used to compare different values. All comparison operators return boolean values. 
Remember, a boolean can either be true or false. 
There are three main types of comparison operators: 

    1. Relational -------------> Compare values in relation to one another.
    2. Abstract (or loose) ----> Check to see if the values are the same. 
    3. Strict -----------------> Check to see if the values are the same AND same data type.
    
In this lesson we're going to be focusing on comparing numbers, because that's what you'll
be doing for the vast majority of time when you're programming. But we will take a brief look
at comparing strings later on as well.

Let's look at the comparison operators.*/

// 1. The more than operator
// Used to check whether a value is more than another value.

let x = 7;
// We'll be using this x variable here to compare against other values. 

// > more than
console.log(
    x > 10 //What this is saying is, is 7 more than the number 10?
    x > 6
); // Output: false (because 7 is not more than 10), true (because 7 is more than 6).

// >= more than or equal to symbol.
console.log(x >= 10); // Output: false (because 7 is not more than or equal to 10).
console.log(x >= 7); // Output: true (whilst x is not more than 7, it is equal to 7).


// < less than
console.log(
    x < 10 //What this is saying is, is 7 less than the number 10?
    x < 6
); // Output: true (because 7 is less than 10), false (because 7 not less than 6).

// <= less than or equal to symbol.
console.log(x <= 10); 
console.log(x <= 7); 

// Abstract or loose equality operators

// == equal to
// We can check to see if two values are equal by using the double equal symbol.

console.log(x == 7); // Output: true

/* We can also check to see if a value is NOT equal to another value. The way we do that is:

!= (Not equal to)
*/
console.log(x != 7); // We get "false" because x IS equal to 7.

// Equal to (==) and not equal to (!=) are known as abstract or loose equality operators.


// Strict equality operator 
/* Differs from the normal equality operator in that the strict equality operator will check
for not only the same value, but also the same data type. 
We use === to do that*/

// === strict equality
let y = "7";
console.log(
    x === 7 // Output: true because x is equal to number 7 in terms of its value and data type.
    x === y // Output: false (because although equal value, it is not the same data type (x is a number and y is a string)).
); 

// Strict not equal to operator

// !== Strict not equal to operator

console.log(x !== y); // Console returns: true (x and y have the same value but not the same data type).


// I skipped over string comparison. But will revisit video if needed. 
