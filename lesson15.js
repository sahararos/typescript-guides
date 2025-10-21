// Lesson 15 - String Methods
// length method
var course = "JavaScript is cool";
console.log(course.length); // Here we get 18. 
// JS counts the characters including spaces and gives us the total.
/* The .length property can be useful f.ex. when validating the number of
characters entered into a form field. F.ex. if a password needs to be at least
8 characters. We can then use the length property to identify if that is the case. */
// Trim method
var course2 = "       JavaScript is cool      ";
console.log(course2.trim()); // This method trimmed the white spaces before and after our string.
/* The trim method does not affect spaces between strings. So the space in front of and after
"is" is unaffected. */
// toUpperCase method
var course3 = "JavaScript is tricky";
console.log(course3.toUpperCase()); //Our result is everything in caps.
// indexOf methof
var course4 = "This is fun";
console.log(course4.indexOf("h")); // Result is 1
console.log(course4.indexOf("f")); // Result is 8
// lastIndexOf method
var course5 = "Good morning to everyone";
console.log(course5.lastIndexOf("e")); /* The string methods indexOf and
theLastIndexOf are very helpful in finding the index positions of characters or words.*/
// The slice method
//This method extracts the specified index section.
console.log(course5.slice(5, 12)); // This slices out "morning in course5. Index starts with 0, so "m" is number 5 and "g" is number 12.
// The replace method
console.log(course5.replace("Good", "Happy")); // Now the imput is "Happy morning everyone" instead of "Good morning everyone".
// The charAt method
// "char" is short for "character".
// You can think of this method as opposite to indexOf.
console.log(course5.charAt(3)); // The output is "d" as index starts with 0 and "d" is therefore the third character.
// Lesson tasks
/* 1. Create a variable called x and assign the value I am watching Dev Dreamer.
Use the relevant string method to change the entire sentence to upper case and use
console.log() to display this. */
var x = "I am watching Dev Dreamer.";
console.log(x.toUpperCase());
/* 2. Use the right string method to extract the channel name Dev Dreamer" and
log this to the console.  */
console.log(x.slice(14, 25));
