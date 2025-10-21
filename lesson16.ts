// Lesson 16 - How to use the JS Date object

/* Let's say you wanted to build a website with a calendar or perhaps a site with a train 
schedule with the latest date and times. In order for those to work you would need some
way to identify the current date and time of the user that is on the site. 
The date object is a built-in JavaScript object that provides several methods for managing,
manipulating and formatting dates and times. To work with the date object, we need to
first create an instance of the date object by using the new operator. Now, don't be 
confused by the term "instance", and what it means exactly. We'll be dealing with that when
we look at objects. For now, just understand that in order to start using the date object,
and access different parts of dates, we need to create or instantiate a new date object. 
There are 4 different ways we can do this. 
There's a single method for putting out the current date and time, and then the other
three methods are ways that we can work with specific dates and times. Let's see now how it
all works. */

// How to pull out the current date and time:

let currentDate = new Date();
console.log(currentDate); // The output is: "Wed Sep 24 2025 11:02:06 GMT+0000 (Greenwich Mean Time)"
console.log(currentDate.getFullYear()); // We get the output "2025", as that is the current year.
// So, in order to start working with the current date and time, we simply say "new Date" with nothing
// in the parentheses.

//Other ways in which we can use the date object:

// The second way we can create a date is by using milliseconds:

//let milliseconds = new Date();

// The 3rd way we can create a new date is by using a date string:

let dateString = new Date("August 29 2019 08:34:00");
    console.log(dateString); // Put a date in the parentheses.

/* The 4th way to create a date is to use date and time components so our date is split
up into different components: */

let componentDate = new Date(1999, 11, 25, 14, 00, 0, 0);
    console.log(componentDate);

    /* When it comes to the methods of the date object, there are two main types of
    methods that we can use:
        - Get methods: enable us to retrieve or get date and time information, such as the
        month, the hour or the year.
        - Set methods: use to set the date and time information? */

    // Get methods

    // getFullYear

    console.log(
        currentDate.getFullYear(),
        //milliseconds.getFullYear(),
        dateString.getFullYear(),
        componentDate.getFullYear()
    ); // The output is: 2025 2025 2019 1999

    // getMonth

    console.log(currentDate.getMonth()); // The output is "8" as it is September now (Remember: index starts at 0).

    // getDate

    console.log(currentDate.getDate()); // The output is "24" as it is September 24th today.

    // getDay

    console.log(currentDate.getDay()); /* The output is "3" as it is Wednesday today. 
    Days, just like months, are zero indexed, meaning Sunday = 0, Monday = 1, Tuesday = 2, etc. */

    // getHours
     console.log(currentDate.getHours()); // The output is "13" as the time is 13:15 right now.

     // getMinutes

      console.log(currentDate.getMinutes()); // The output is "15" as it is 15 minutes past 13 now.

    // getSeconds

     console.log(currentDate.getSeconds());


    // getMilliseconds

     console.log(currentDate.getMilliseconds());

     // getTime

      console.log(currentDate.getTime()); // Output: 1758720204918
    
    let milliseconds = new Date(1758720204918); // Put the output in the line above here.
    console.log(milliseconds); //Output is: Wed Sep 24 2025 13:23:24 GMT+0000 (Greenwich Mean Time)

    // Set methods

    /* Each get method has a set method. So instead of "getFullYear" we can "setFullyear". 
    For example: */

    currentDate.setFullYear(1999);
    console.log(currentDate.getFullYear()); // Output: 1999.

    /* How can we retrieve the days of the week or the months of the year as text 
    as opposed to numbers? */

    console.log(
        currentDate.toLocaleString('default', {
            month: 'short'
            weekday: 'long'
        }) // default = to English
    ); // after default, we need to provide an object with the month set to either long or short.

    // The output is September. If I do month: 'short', I get 'Sept'. I can also provide weekday: 'long/short'.


    // Lesson tasks

    /* 1. Instantiate or create a new Date object assigning it to the variable date, 
    the type of data we are looking for is the current date. */

    let todaysDate = new Date();

    
    /* 2. Use the console to log out today's date. */

    console.log(todaysDate.getDate()); // Output: 24 (It is Sept. 24th today).

    
    /* 3. Create two new variables called hour and min, and assign the relevant values
    to these. So get the hour and and assign it to hour etc. Console log the time, including
    colons in the console, e.g. 10:24. */

    let hour = todaysDate.getHours();
    let min = todaysDate.getMinutes();
    console.log(`${hour}:${min}`); //Output: 13:47 (current time).


    /* 4. Console log the name of the current day, you can use the long or shorthand. */

    let day = todaysDate.toLocaleString('default', {weekday: 'long'});
        console.log(day); // Output: Wedsnday (current day of the week).

