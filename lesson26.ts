// Lesson 26 - While/do loop

/* The while loop will repeat a block of code whilst the given condition remains 
true.
How to create a while loop: 
*/

let i = 0; // This is our initialiser.

while (i <= 10) { // The condition goes inside the parentheses. 
    console.log(i); // The code block that will be run.
    i++; // The final expression. We're going to increment the value of i. 
}

/* The while loop works in a similar way to the for loop in that it loops over
a block of code. There difference here though is the initialiser variable is
written before and outside of the while loop syntax amd the final expression
is actually included inside the curly braces. So, only the condition is places
inside the parenthesis. */

const arrayOfColors = ['red', 'blue', 'green', 'yellow', 'purple'];

let color = 0;

while (color < arrayOfColors.length) {
    console.log(`${arrayOfColors[color]}`);
    color++;
}

/* Now we're going to look at the do while loop. 
It works pretty much the same as the while loop, but the only difference is we
use a do while loop when we want to ensure that the code is executed at least once
beofre the condition is tested. So, even if the condition is false, by default with
a do while loop our code block will run at least once. */

let i = 0; // This is our initialiser.

do { // This code means "do this" (see code in curly braces) while the condition is true.
    console.log(`The number is ${i}`); // The code to be run first.
    i++;
} while (i <= 10) // Here comes our condition.

/* So, in this example, the code block will run once and then the condition will
be tested. If the condition is true, the code block will run again and again until
the condition is false. */

/* The big question is, when should we choose to use a for loop as opposed
to a while loop or do while loop? Remember, there are two more loops we haven't
covered yet, but when it comes to these we have already looked at (for, while, do while)
there is a general rule of thumb that we should follow as to which loop we should
be using and when:
    
    For loop: When we know ahead of time the number of loops or iterations that we require.
    
    While loop: When we do not know ahead of time the number of loops or iterations that we require.
    
    Do while loop: When we want to ensure that the code block is run at least once regardless of the condition.
.*/

// Lesson tasks

/*
1. Use a while loop to write out the following sentence in the console:
"The speed of the car is xMPH" (where x is the number of miles per hour). 
Start at 0 and go all the way up to 100, in increments of 10.
*/



/*
2. Create two variables a = 1, b = 10. Use the right loop to print out
numbers 1-10, making sure to execute the code at least once before testing
the condition. */