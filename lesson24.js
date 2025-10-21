// Lesson 24 - The Ternary (Conditional) Operator 
/* The Ternary Operator provides us with an easier way to write an if else statement.
The word "ternary" means "composed of three parts".

The Ternary Operator is a great way to simplify your code and make it more readable.
However, it is important to use it judiciously, as overuse can lead to code that is
difficult to read and maintain.

The Ternary Operatir is equivalent to an if else statement. Let's write one of those
first and then let's see how we can rewrite it as a ternary operator. */
var age = 18;
if (age >= 18) {
    console.log("You can vote.");
}
else {
    console.log("You cannot vote.");
}
/* Let's see how we can rewrite this by using a ternary operator.
First we say what the condition is followed by a question mark. Next the code we
want to run if the condition is truthy, followed by a colon (:), and then finally
the expression to execute if the condition is falsy. */
age >= 18 ? [true] : [false];
/* Here I'm going to assign the ternary operator to a variable called message: */
var message = age >= 18 ? "You can vote" : "Sorry, you cannot vote.";
console.log(message);
/* The condition is age >= 18, the expression to execute if the condition is truthy
is "You can vote.", and the expression to execute if the condition is falsy is
"Sorry, you cannot vote.".

/* Another example: */
var password = "redruby123";
var info = (password === "redruby123") ? "Success" : "Fail"; // You can use parentheses to make the code easier to read. 
console.log(info);
/* So, using a ternary operator is a lot quicker and a lot cleaner in comparison to
using an if else statement. */
/* We're going to look at one more example. Now I'll introduce you to something new
here, which we will be going to looking at in more detail later in the lessons:
how to use the document object model (DOM). The DOM allows us to interact with our html
so that we can actually start outputting stuff onto the screen.
Now we will be creating a dark mode version of this page: */
var body = document.querySelector("body");
/* The querySelector method allows us to select an element from the html,
// that is, one of our tags in our html. */
var choice = "dark";
choice === "dark" ? body.classList.add("darkMode") : null;
/* If it's true that choice equals to dark, then take our body tag and add the
class name darkMode. We'll create this class in our css.
In other words the code is saying:
If it's true that choice is equal to dark, then add the class "darkMode" to body.
If it's not true, then don't do anything (null).
I created a css file called "lesson24.css and connected it to my index.html file.
Check the index.html file live and see what happens! It goes dark. */
/*
Lesson tasks

1. Rewrite the following if else statement as a ternary operator:

let newMessage = "";

if (1 > 10) {
    newMessage = "Condition is TRUE";
} else {
    newMessage = "Condition is FALSE";
}
*/
var newMessage = (1 > 10) ? "Condition is TRUE" : "Condition is FALSE";
console.log(newMessage);
/*
2. Assign the value "12:00" to a variable called time, and create a ternary operator
to console log "Good morning" or "Good evening" depending on the time.
*/
var time = "12:00";
var greeting = (time < "12:00") ? "Good morning" : "Good evening";
console.log(greeting);
