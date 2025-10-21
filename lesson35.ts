// Function Expressions

/* Function Expressions are functions which are created inside an expression or inside
another syntax construct. They are syntactically similar to function declarations, except
that we can omit the function name. 
Function expressions take an anonymous function and assign this anonymous function to a 
variable - and it's through use of this variable that we're able to invoke our function. 
Let's take a look at an example. 

let games = function() { // This is an anonymous function because it doesn't have a name.
     
}

Here above is an example of a function expression. We're taking a variable called
"games" and then we're assigning that to a function. A function declaration would be
like this: 

function games() {

}  

With a function expression, we're removing the function name and we're assigning the 
anonymous function to a variable. */

let games = function() {
    console.log("Sonic");
    console.log("Mario");
    console.log("Zelda");
}

games(); // This invokes the function. 
// Here we have used the variable name to invoke the anonymous functions.  

/* Another difference between a function expression and a function declaration is that the
function name is optional in an expression, but mandatory in a declaration. 

let games = function funcName() { // Giving the function a name.
    console.log("Sonic");
    console.log("Mario");
    console.log("Zelda");
}

funcName(); // We get an error in the output.

*/

/* Another important point about function expressions. Our function expression just that, 
an expression. We're able to assign the value to another variable and then use that new
 variable to call the function. Let's take another example. */

 let anotherWayToCall = games; // Creating a variable and assigning it the value of our original variable "games".
 // What we can do is use the new variable "anotherWayToCall" to invoke our function:

 anotherWayToCall(); // We get Sonic, Mario and Zelda in the console.

 /* Finally, let's understand the key differences between function declarations and
 function expressions. 
 Function declarations cane be invoked earlier than they are created. 
 Function expressions, however, cannot.
 So, for example, let's create a function declaration:  */

myFunc();

 function myFunc() {
    console.log("My Function Declaration");
 }

 /* Let's go ahead and invoke this function by using the function name, but instead of
 invoking this after our function, I'm going to invoke this before our function (see line 62).
 It works. When Javascript prepares to run the script, it scans our file, so it scans our JS file, 
 and looks for any global function declarations and if it finds any, it goes ahead and stores
 them in memory so that it has access to these functions from anywhere in the script. Which
 is why we can call the function from abov, before the function is created. 



 Let's try this now with a function expression: 
 

 let myFunc = function () {
    console.log("My Function Declaration");
 };

 We get an error because the function expression is created once we get to the line that 
 it's on.
 */

 // Lesson tasks

 /* 1. Create a function expression called colours that console logs the colours:
 red, green and blue.
 
 2. Reassign colours to myColours, and use the new variable to invoke the function. */

 let colours = function() {
    console.log("red, green, blue");
 };

 colours();

 let myColours = colours;
 myColours();