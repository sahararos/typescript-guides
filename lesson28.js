// How to use the For ... of Loop
/* We use the for ... of loop to loop over iterable data structures.
By "iterable" we mean data that can be looped over. We can use it to
loop over things such as arrays, strings, maps, and much more.
We'll first create an array and then use the for ... of loop to
loop through its values. */
var characters = ["Sonic", "Tails", "Mario", "Luigi", "Link"]; // We have an array of characters.
/* The for ... of loop works similar to the for ... in loop, but instead
of the keyword "in" we use the keyword "of". Here's the syntax:

for (variable of iterable) {

}
*/
for (var _i = 0, characters_1 = characters; _i < characters_1.length; _i++) { // We declare a variable "x" that will hold the values of the array "characters".
    var x = characters_1[_i];
    console.log(x); // We log the variable to see the values of the array.
}
/* The for ... of loop can also be used to loop over strings, more specifically
the characters inside a string. */
var course = "JavaScript"; // We have a string called course.
/* We are now going to use the for ... of loop to loop through
these characters in the word "JavaScript". */
for (var _a = 0, course_1 = course; _a < course_1.length; _a++) { // We declare a variable "letter" that will hold the characters of the string "course".
    var letter = course_1[_a];
    console.log(letter); // We log the variable to see the characters of the string.
}
/* We can also use the break keyword to break out of the loop once we reach
a certain value. So, let's break out of the loop here below once we reach
the color yellow.*/
var colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
for (var _b = 0, colors_1 = colors; _b < colors_1.length; _b++) {
    var x = colors_1[_b];
    console.log(x);
    if (x === "Yellow") {
        break; // We use the break keyword to break out of the loop once we reach yellow.
    }
}
