// Lesson 19 - Logical operators
/*
JavaScript "falsy" values:

    - false
    - undefined
    - null
    - "" (empty string)
    - NaN (not a number)
    - 0

JavaScript logical operators:

    ! ---> NOT (or negation)
    && --> AND
    || --> OR
    ?? --> Nullish Coalescing
*/
var a = 1; // boolean value of "true"
a = !a;
console.log(typeof a, a); // Output: boolean, false
var b = 0; // This has a boolean value of false as "0" is on the falsy value list.
b = !b; // b is not not false = true
console.log(typeof b, b); // Output: boolean, true
var x = 1; // a true value
var y = 0; // a false value
/* Here below, all this does is say: "if the condition evaluates to true then execute the
code in between the curly braces". */
if (x && !y) { // both must be true to get "hello"
    console.log("hello");
}
if (x || !y) { // only one of them must be true to get "hello"
    console.log("hello");
}
