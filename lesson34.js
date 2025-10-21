// Lesson 34 - What are JS Functions?
/** Functions are objects, in fact, we refer to them as first class objects. That basically means
 that anything we can do with objects, we can do with functions.
 
We can create a literal object, we can create a literal function.
Objects can be stored in variables, functions can be stored in variables.
We can include properties and values inside objects, and we can do the same in functions.
Remember, the data type for a function is am object. We learned that way back in out lesson on
data types in lesson 7.

The key difference between an object and a function is that with a function we can call or invoke
a function. Before going deeper into that, let's firt understand what functions are:

What are functions?

Functions are a block of code that we can call (or the correct term is "invoke") whenever we
want. They are known as "first-class objects", which means thet can be treated like objects.

Now let's look at how functions can be created:

4 WAYS TO CREATE A FUNCTION
1. Function Declarations and Expressions (most used)
2. Arrow Functions
3. Function constructors (very rarely used)
4. Generator functions

Let's create a function declaration:
*/
/* Here is the basic syntax for a function declaration:

function games() {  //Named our function "games"
                    // Here inside is the code we want to call/invoke
}
*/
/*function games() {
    console.log("Sonic the Hedgehog");
    console.log("Super Mario Bros");
    console.log("Donkey Kong ");
}*/
/* If we run this code as it is, nothing happens. So how do we invoke the function? We write
our function and put the parenthesis, which invokes our code, like this: */
//games();  
/* There is a big advantage to using functions; anytime we want to run a piece of code,
we don't have to keep rewriting it over and over again - we can simply invoke the relevant
function, and that code will run.

Another note about invocation, is how functions can be invoked. Here above we've invoked our
function manually. But the real beauty of functions is that they can be called dynamically.
In other words, we can call functions based upon the user's button clickss or when the page
loads, when a user hovers over an element, and much more. These are known as "events".

When it comes to invocation it is important to note that we need the parenthesis () to invoke
the function. Calling just the function name on its own simply refers to the function as a whole
and does not run the function. See what happens when we console "games":
*/
console.log(games);
/* Let's look more into what we can actually include inside of our function.
Remember, a function is simply a block of code that we can call or run.
So, anything we can write outside of a function we can write inside of a function.
We can f.ex. create variables inside functions. Let's go ahead and do that. */
function games() {
    var title = "Zelda"; // This variable here is known as a "local" variable. In other words, it's local to this particular function.
    console.log(title); // Local variable are only visible inside the functions they've been created in. 
}
games(); // Here we get the output "Zelda".
/* Any variable declared outside of a function block, or any other block for that matter,
is known as a global variable. */
var greeting = "Hey there!"; // This is a global variable.
console.log(greeting);
/* Functions can also be anonymous, that is, without a name.  */
var btn = document.querySelector("#btn"); // Here we're working with the document object model (DOM), but we'll look deeper into it in another lesson.
/* Here above, we're trying to select something from our document. Let's go to our html file
(lesson34.html). Take a look there. In the parenthesis beside queryselector, we can reference
an id just like in css.
*/
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    console.log("Sonic");
}); // The function comes after the comma in the parenthesis.
/* Here above is an example of a function that doesn't have a name.
So, we've created a button, a reference to that button and stored it in the
variable btn or button for short. We've then added an event listener to this button
of a click, so when we click the button we're going to do something, and that something
is the anonymous function above (anonymous functions are functions that don't have a name.)
If we click the button we created, we get "Sonic" in the console.*/
// Lesson tasks
/*
1. Create a function using a function declaration called myName. Invoke the function to
log your name to the console.
 
2. Invoke the function multiple times.
*/
function myName() {
    console.log("Sahara");
}
myName();
myName();
myName();
myName();
myName();
