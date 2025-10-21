// Function Parameters & Arguments 

// Parameters

// First I'm going to create a function declaration:

/*function favGame(game) { // We place our function parameters inside the parenthesis. 
    
}*/

/* The parameter for our fave game is called "game". What we can do inside the code block
is use the game parameter very much like we would use a variable. Inside the code block above
I'm going to say that when the favGame function is invoked, let's console log the following: */

function favGame(game) {
    console.log(`My favorite game is ${game}`);
}

/* We can the parameter ("game" in this case) in just like we would do a variable. 
We do that by using ${} and putting the paremeter inside. Now let's invoke this function.
When we do that, we need to provide some sort of data that will be substituted for "game".
We're looking for a string, because we have a string in the code block inside the
function above. */

favGame("Sonic 2"); // The output is "My favorite game is Sonic 2"

/* What's happening is that we're using the Sonic 2 value or string, and we're using it
as a substitute for our game parameter. Let's invoke the function a couple of more times. */

favGame("Mario Bros");
favGame("Pacman");

/* As we can see when we run the code is that each time we've passed a different value
inside of function invocation, that value has been substituted for our game parameter. 
This shows how powerful parameters are and how they really make our functions dynamic. 
So, that's what parameters are. */


// Arguments

/* When we invoke a function, like we did a few times with favGame above, and we
pass values to it, these values are known as arguments. So the arguments above, 
for example, would be "Sonic 2", "Mario Bros" and "Pacman". So, parameters are the
values inside the actual function definition and when we call that function, the 
vallues passed in are called arguments. 

To clarify, although you may hear arguments and parameters used interchangeably, 
there is actually a subtle difference:
Parameters are set when the function is defined, and when a function is invoked it's
provided with arguments. 

We're not just limited to a single parameter. We can specify multiple parameters
separating them with commas. Let's take a look at a new example. */

function ninjaTurtles(name, weapon) { // See, the parameters are comma separated.
    console.log(`${name} uses the ${weapon}`);
}

// Let's invoke the function now and provide arguments:

ninjaTurtles("Donatello", "Bo Staff");

/* The way that we provide arguments for muæltiple parameters, is in the same way,
that is, comma separated. 

The output is "Donatello uses the Bo Staff". So, when we supply a list of arguments, 
 like we did here above, the arguments are assigned to the parameters in the order
 specified. So the first argument (Donatello) gets assigned to the first parameter (name)
 and the second argument (Bo Staff) to the second parameter (weapon).

 Another key thing to note is that Javascript functions do not check the number of 
 arguments received. So, if we didn't provide any arguments, we get in the output
 "undefined" uses the "undefined". So, if a function is invoked with missing arguments, 
 then they are set to "undefined".
 Let's look at more examples.
*/

function add(num1, num2) {
    console.log(num1 + num2);
}

add(5, 2); // In the console we get 7. 

/* If we only provide a single argument for num1 the console returns "NaN" (Not a number).
That's because num1 has the value of 5 and num2 gets the value of undefined, we haven't
passed an argument for num2, that is. Therefore, the console gives us "NaN".  */

add(5);

/* So, if you don't have enough arguments when you invoke the function to account for
the right number of parameters, any missing arguments are simply assigned a value of 
"undefined". But, what happens if too many arguments are provided during the function
invocation?  
*/

add(5, 5, 5, 1, 2, 4, 5, 6); // Here we have more arguments than we have parameters.

/* The console returns 10! So, when you provide more arguments than you have parameters,
what happens is that the function continues to work as normal and the extra arguments
are simply ignored. For that reason we have 5 + 5 and get 10 in the console. 
Now, we can still access these additional arguments if need be using something called
"the arguments object". Arguments is an array-like object, and remember that very carefully:
"array-like object", that contains every argument that is passed to the function during
invocation. We can see this by simply using the arguments keyword inside of our function. 
*/

function leggjaSaman(tala1, tala2) {
    console.log(arguments); // Vscode changes the color of arguments to indicate that this is a special keyword.
}

leggjaSaman(5, 5, 5, 1, 2, 4, 5, 6);

/* The output is: Arguments(8) [5, 5, 5, 1, 2, 4, 5, 6, callee: ƒ, Symbol(Symbol.iterator): ƒ]
We get "Arguments(8) cause there are 8 arguments inside the parenthesis for leggjaSaman and 
we've passed through them. If we open the output furter up we see all the arguments listed:

0: 5
1: 5
2: 5
3: 1
4: 2
5: 4
6: 5
7: 6

Notice there is a 0 index. Just like an array we could add ".length" to arguments and 
the console will give us 8 (8 arguments). 

function leggjaSaman(tala1, tala2) {
    console.log(arguments.length); 
}

We can also access individual arguments by using an index position:

function leggjaSaman(tala1, tala2) {
    console.log(arguments[5]);
}

We get 4 because that's the fifth indexed argument.

However, the problem that we have with the arguments object is that whilst is
has a few of the same features as an array, it's not an array. For example,
we don't have access to any array methods, so we can't say something like "add.map", 
".join", ".slice", etc. 

// Rest parameter

The reason we would use the rest parameter over the arguments object is because the 
rest parameter actually does return an array. So, using a rest parameter we have access 
to all of our usual array methods. More on this in another lesson.

The final thing we're going to look at now is that we can also supply our functions with
default parameters. So, if an argument is missed out or not received during the function call
it will receive the default parameter value instead. Let's take a look at an example.
*/

function favMovie(movie = "No movie provided") {
    console.log(`My favorite movie is ${movie}`);
}

/* The way that we create a default parameter is we use the "parameter name" = "default parameter value".
So, what's going to happen? 
*/

favMovie(); // We get the output "My favorite movie is No movie provided".

/* Since we haven't provided an argument, the default value of "No movie provided"
is actually assigned to "movie".
It's very important to note that we always add our default parameters to the end of our
parameter list, otherwise the function call won't work properly.  

Wouldn't it be cool if we could pass some sort of default error message if no argument
is provided? 
*/

/*function favBook(book) {
    if (book === undefined) {
        console.log("Please provide your favorite book!");
    }
}*/

/* So, if nothing is passed through then book gets the value of undefined, and if that's
the case then the condition is true and the console log will log the provided string above. 
*/

favBook(); // The output: "Please provide your favorite book!"

function favBook(book) {
    if (book === undefined) {
        console.log("Please provide your favorite book!");
    } else {
        console.log(`My favorite book is ${book}`);
    }
}

favBook("Little Women"); // Output: "My favorite book is Little Women".

/* Here above, we've using an if-else statement to test whether the argument was defined 
or not.
*/

// Lesson tasks

/*
1. Create a function called favFood() and use "response" as a parameter, console log
for e.g. "Your favorite food is pizza".

2. Invoke the function with your fave food as the argument.

3. Update the function to add a default value of "empty, please add your fave food".
Test out the default value.

4. Finally, update the function once more to display the message "Please enter your
favorite food" if there is not response added. 
*/

/*
1. 

function favFood(response) {
    console.log(`Your favorite food is ${response}`);
}

*/

/*
2. 

function favFood(response) {
    console.log(`Your favorite food is ${response}`);
}

favFood("Pizza");

*/

/*
3. 

function favFood(response = "Empty, please add your favorite food") {
    console.log(`Your favorite food is ${response}`);
}

favFood();

*/

function favFood(response) {
    if (response === undefined) {
        console.log("Please enter your favorite food");
    } else {
        console.log(`Your favorite food is ${response}`);
    }
}

favFood("pasta");


