// How to use the For ... of Loop

/* We use the for ... of loop to loop over iterable data structures. 
By "iterable" we mean data that can be looped over. We can use it to
loop over things such as arrays, strings, maps, and much more.
We'll first create an array and then use the for ... of loop to 
loop through its values. */

let characters = ["Sonic", "Tails", "Mario", "Luigi", "Link"]; // We have an array of characters.

/* The for ... of loop works similar to the for ... in loop, but instead
of the keyword "in" we use the keyword "of". Here's the syntax:

for (variable of iterable) {

}
*/

for (let x of characters) { // We declare a variable "x" that will hold the values of the array "characters".
    console.log(x); // We log the variable to see the values of the array.

}

/* The for ... of loop can also be used to loop over strings, more specifically
the characters inside a string. */

let course = "JavaScript"; // We have a string called course.
/* We are now going to use the for ... of loop to loop through
these characters in the word "JavaScript". */

for (let letter of course) { // We declare a variable "letter" that will hold the characters of the string "course".
    console.log(letter); // We log the variable to see the characters of the string.
}

/* We can also use the break keyword to break out of the loop once we reach
a certain value. So, let's break out of the loop here below once we reach 
the color yellow.*/

let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

for (let x of colors) {
    console.log(x);
    if (x === "Yellow") {
        break; // We use the break keyword to break out of the loop once we reach yellow.
    }
}