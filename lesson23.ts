// Lesson 23 - How to use the Switch Statement

/* The switch statement takes a single value and then looks through a list of choices, called
cases, until a case that matches the value is found. And then each case has its own corresponding
code that will be executed if there is a match. 
An important thing to note here is that by default the comparison that we're looking at is
equality, but we can also check for different comparisons which we'll be learning about
later on. 


Syntax of switch statement

switch (first value or key) {
        // Here we put cases
} 

*/

let roll = 4;

switch(roll) {
    case 1:
        console.log("You rolled a 1");
        break;
    case 2: 
        console.log("You rolled a 2");
        break;
    case 3: 
        console.log("You rolled a 3");
        break;
    case 4: 
        console.log("You rolled a 4");
        break;
    case 5: 
        console.log("You rolled a 5");
        break;
    case 6: 
        console.log("You rolled a 6 ");
        break;
}

/* If we don't add the "break" after the cases, JS continues to run the rest of the code
(try taking out the breaks and see what happens). By adding break we are saying that when
we do find a match, once the code is executed, we break out of the switch statement and
don't execute any more code inside. 

We can also add a default case if none of the other cases match, and this should always go
at the end.*/

let roll = 10;

switch(roll) {
    case 1:
        console.log("You rolled a 1");
        break;
    case 2: 
        console.log("You rolled a 2");
        break;
    case 3: 
        console.log("You rolled a 3");
        break;
    case 4: 
        console.log("You rolled a 4");
        break;
    case 5: 
        console.log("You rolled a 5");
        break;
    case 6: 
        console.log("You rolled a 6 ");
        break;
    default: // If none of the other cases match, execute the following code:
        console.log(`The number ${roll} is not possible.`);
}

 /* Note, the switch statement looks for strict equality. This means that if f.ex.
 case 4 is changed to the string "4", the default will be logged since roll is the number
 4. */

 let today = new Date().toLocaleString('default', {weekday: 'short'});

 switch(true) {
    case today === "Mon":
        console.log(`Today is ${today}`);
        break;
    case today === "Tue": 
        console.log(`Today is ${today}`);
        break;
    case today === "Wed": 
        console.log(`Today is ${today}`);
        break;
    case today === "Thu": 
        console.log(`Today is ${today}`);
        break;
    case today === "Fri": 
        console.log(`Today is ${today}`);
        break;
    case today === "Sat": 
        console.log(`Today is ${today}`);
        break;
    case today === "Sun":
    default: // If none of the other cases match, execute the following code:
        console.log(`No idea!`);
 }
    
// Lesson task

/* 1. Create a variable called favFood and set this equal to your favorite food. 
Create a switch statement with four foods as cases, and another one that matches favFood,
so we're looking for 5 cases in total. For each case, log "That's right! [favFood] is my
favorite!" Think about how to pull the favFood variable in. Finally, add a default case that
says: "Fave food not found ... I'm hungry!". */

let favFood = "spaghetti";

switch (true) {
    case favFood === "chicken":
        console.log(`That's right! ${favFood} is my favorite!`);
        break;
    case favFood === "fish":
        console.log(`That's right! ${favFood} is my favorite!`);
        break;
    case favFood === "lasagne":
        console.log(`That's right! ${favFood} is my favorite!`);
        break;
    case favFood === "fajita":
        console.log(`That's right! ${favFood} is my favorite!`);
        break;
    case favFood === "meatballs":
        console.log(`That's right! ${favFood} is my favorite!`);
        break;
    default: 
        console.log("Fave food not found ... I'm hungry!");
}