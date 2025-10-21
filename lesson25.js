// Lesson 25 - How to use the For Loop
/* Loops allow us to perform repetitive tasks with less code and this is done by
repeating a piece of code over and over again according to certain conditions.

The for loop is best suited for those scenarios where we want to do things a fixed
number of times, for example, rolling a dice a specific number of times.

The for loop is used to loop over a piece of code a set number of times. It is
made up of three parts:

    1. The Initialiser
    2. The Condition
    3. The Final Expression
    
Here I'm going to write out a simple for loop that loops through line of code
multiple times to print out the numbers 1-10 in the console.

for ([initialiser]; [condition]; [final expression]) { // The Initialiser, Condition and Final Expression go inside the parentheses
    // The code that we want to repeat goes inside these curly brackets
    console.log();
}

Now let's fill in the parts of the for loop.
- The initialiser is basically a variable set to a value.
- The condition which is a statement that must be true for the loop to continue running.
In other words, if the condition is false, the loop will stop running. The loop will
keep running as long as the condition is true.
- The final expression is what happens at the end of each loop iteration. This is usually
where we increment or decrement our variable.

So, to print out the numbers 1-10 in the console, we can write the for loop like this:
*/
for (var i = 0; i <= 10; i++) { // Remember, the expression i++ is a shorthand way of writing i = i + 1.
    console.log(i); // The code that we want to repeat goes inside these curly brackets
}
/* What we are saying here is:

1. Start with a variable i set to 0.
2. As long as i is less than or equal to anything between 0 and 10, keep running the loop.
if it is greater than 10, stop running the loop/code block within the curly brackets.
3. At the end of each loop iteration, increase the value of i by 1.
Remember, the expression i++ is a shorthand way of writing i = i + 1.
The expression is executed every time after the code block is run. */
// So, the output in the console will be the numbers 0-10 printed out one by one.
/* Let's create another example.
This time we'll be creating an array. */
var characters = ['Mario', 'Luigi', 'Peach', 'Bowser', 'Yoshi'];
// I just created lesson25.html and created a <p> element.
var paragraph = document.querySelector('p');
var info = "The characters are: ";
for (var i = 0; i < characters.length; i++) { // The condition: i less than the number of values in the array (I have 5 values/characters).
    if (i === characters.length - 1) {
        info += "and ".concat(characters[i], "."); // The "characters[i]" part is how we select a value inside an array.
    }
    else { // The ${} part is called a template literal and it allows us to embed expressions inside string literals.
        info += "".concat(characters[i], ", ");
    }
}
paragraph.innerText = info;
/* We got 5 characters/values inside our array, but rather than writing five in the
condition we want to make sure that this is dynamic so that if in the future we add any more characters
to this, we won't need to keep coming back and updating this condition.
Therefore we will say i < characters.length. What this will do is give us the length
of our characters' array, which in this scenario is five.

What we're looking to do here is print out these values (characters) as a comma-separated
list instead of bullet points. To do that, we need to use a conditional statement, more specifically
an if else statement.
*/
/* Lesson tasks

1. Create an array of five colors. Use a for loop to iterate over each color with
the statement: "[color] is my favorite color!" Console log the results.
*/
var colors = ['red', 'blue', 'green', 'yellow', 'purple'];
for (var color = 0; color < colors.length; color++) {
    console.log("".concat(colors[color], " is my favorite color!"));
}
