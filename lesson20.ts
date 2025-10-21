// Lesson 20 - What is the Nullish Coalescing Operator?

let game; //undefined
let game2 = null; // null
let game3 = "Sonic"; // String

console.log(
    game ?? game3
);

/* The nullish operator will return the first argument if it is not either null or undefined, 
otherwise it will return the second argument. Since "game" is undefined, the console here above will return 
"game3". The same would happen if we exchanged "game" for "game2" since "game2" is null.

One of the most common ways that this operator is used is to provide a default value for
undefined variables.

For example:*/

let user;
console.log(user ?? "Guest");
/* Here we're saying: if "user" is defined, then console log user. If it's undefined, 
console log "guest". 

Why was the nullish coalescing operator created and how does it differ from some of the other
logical operators? To understand that, let's first know that we could use the or operator in
this example to get the exact same thing. Let's check it out:
*/

console.log(user || "Guest"); // We get guest again!
/* Remember: "or" (using the symbol: ||) will return the first truthy value. Since "user" is undefined, which is
falsie, it returns the truthy value of "guest". As we see then, the or operator works here the same.

Now, the reason for the knowledge operator is that the or operator does not distinguish between falsie values
(falsie values = false, 0, empty strings, undefined and null). SO when we use the or operator  it will return 
the first truthy value whereas the nullish operator will return the first defined value and that's the major
difference between the two.  

There might be situayions where we don't want to use a defined value that is also a faulty value, 
for example:
*/

let score = 0; // This is a falsy value. 

console.log(score || "no score registered");

/* What we get in the console here above is "no score registered". There is a potential problem here 
with the or operator. Remember, the or operator returns the first truthy value, so "score" is a false
value, and since this is false the console returns the string "no score registered". However, this wouldn't
technically be correct, because while score = 0, the score is still defined. So, actually, what we want to see
in the console is the score of 0. But because 0 is a falsy value the or operator ignores it and logs the true
value. So, this is where the nullish operator comes to the rescue. We have a situation here where we do want to 
return a defined value (score has already been defined even though it is a faulty value). So, again, the or
operator does not distinguish between those false values whereas the nullish operator does. 
So, now we can change this and use the nullish operator: */

console.log(score ?? "no score registered"); // Now we get the score "0" logged to the console.

/* Again, even though 0 is technically a falsy value, our score is indeed defined beside the value of 0. 
Remember, the nullish operator will return the first defined value. 

Some common use cases for the nullish operator are when we want to provide a default value for a variabl
and we want to use a defined value that is also a falsy value (just like we did here above). */
 

// Lesson tasks 

/* 1. Create an undefined variable called course. Use the console to display the course or otherwise
the default text "Please select a course". */

let course;

console.log(
    course ?? "Please select a course"
);


/* 2. What will the following return? */

let courseProgress = 0;

console.log(
    courseProgress ?? "Start the course"
);
// This will return "0".


