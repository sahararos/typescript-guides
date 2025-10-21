// How to use the JS return

function test() {
    return "hello";
}

console.log(test());

/* Whenever we use the return keyword the function execution stops and we exit the function
code block. So, whenever we use the return keyword, we must understand that it needs to come 
last before all our other code inside of our function, because once we hit that line, with 
the return keyword on there, our function will stop executing. 

We can use the return keyword multiple times when the return keywords are places inside their
own blocks. By blocks, or code blocks, we mean something like in the code below).

Let's use the function expression.
*/

let login = function(password) {
    if(password === "test123") {
        return "Successfully logged in"
    } else {
        return "Password incorrect, please try again";
    }
}

console.log(login("jdfhjkdhfjdk")); // We get "Password incorrect, please try again" as the condition was not true.
console.log(login("test123")); // We get "Successfully logged in" as the condition was true.

/* The return keywords are places inside their own blocks here above and therefore they work. 

It may seem strange to console log the result. But what you'd usually do is assign the function
call to another variable.
*/

let result = login("test123");

console.log(result);


// Lesson tasks

/*
1. Create a function called favNum and set it up with a parameter called num, use return
to return whatever number is given as the argument, log this to the console with the 
message "My fave number is (num)" using template literals.

*/

function favNum(num) {
    return num;

}

let myFavNum = favNum(7);

console.log(`My fave number is ${myFavNum}`);

/*
2. What will the following code return?
*/

function password(a) {
    if (a.length > 8) {
        console.log(`You chose ${a}`);
    } else {
        return console.log("Not enough letters");
    }
}

password("PurpleRhino123");
password("Circle77");

/* If the letters in the passwor brackets are more than 8 the output will be
"You chose PurpleRhino123". If not, that is, if the statement is not true, 
the output will be "Not enough letters". */



