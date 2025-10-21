// Lesson 29 - How to use Arrays

/* Non primitives in Javascript are objects and in Javascript the following data structures
are objects, arrays, functions and objects themselves. 

An array is an ordered list of values. These values can be of any data type, so our array
can be made up of numbers, strings, booleans, and even other arrays.

There are a few ways to create arrays, but the one we'll be using most of the time is
called an array literal. Let's create one.*/

let supers = ['Superman', 'Batman', 'Flash', 'Aquaman']; //We create an empty array using square brackets. The brackets will hold all of our array values. 
//Our array here, consists of four values and each of these values is a string.

/* Remember we said that an array is an ordered list of values. The reason why it is an
ordered list is because each of these values is represented by an index, or a number.
Let's say we want to access one of these values above. The way that we access our array is first we write the array name (supers), then we do
square brackets [] and inside them we need to provide an index. Arrays are zero indexed, 
meaning the first value, which is "superman" in this case, will have an index value of 0.
Batman will then have the index of 1, Flash 2 and Aquaman 3. */

console.log(supers[2]); //This will print Flash to the console.

/* We can add more values to an array like so:

We write the name of our array, which is "supers", then we add square brackets [] and then
we provide an index. */

supers[4] = 'Wonder Woman'; // I will put 4 here because the last index we have is 3, so the next one will be 4.

console.log(supers); //This will print the whole array to the console, including Wonder Woman.

/* We can also delete values. Let's say we want to f.ex. delete Flash. First we put in the
keyword delete, space and then the name of our array, then square brackets [] and in them
we provide the index of the value we want to delete. Flash has the index 2.*/

delete supers[2];

/* Now Flash has been deleted. But you might notice something strange. In the console, 
the length is still 5. */

console.log(supers[2]); // If we try to access the index 2 (which was Flash), it will print undefined.

/* You would have thought that if we deleted Flash from our array, our supers 2 would 
refer to Aquaman. But instead the console returns "undefined". The reason why it doesn't
return Aquaman in Flash's place, is because Aquaman isn't simply moved up in the index. 
It's still in index number 3. When we delete a value, the value is deleted but the index
position still remains - only now it returns "undefined". In the next lesson we'll look
at array methods, and one of those methods enables us to delete and completely remove value
from an array.

One thing to bear in mind, if we try to add another value and use an index that already 
exists, then this will be replaced by the new value. */

supers[3] = 'Cyborg'; // This will replace Aquaman with Cyborg

console.log(supers); // This will print the whole array to the console, including Cyborg instead of Aquaman.

/* We can also create an empty array and then add values to it later. */

let heroes: string[] = []; // This creates an empty array called heroes. The : string[] part is a type annotation that specifies that this array will only hold string values.

/* As mentioned before, arrays can also include other data types.  */

let randomStuff: any[] = [42, 'apple', true, { name: 'John' }, [1, 2, 3]]; // This array contains a number, a string, a boolean, an object, and another array. To create an array we simply use square brackets [] and separate each value with a comma. 
console.log(randomStuff); // This will print the whole randomStuff array to the console.

/* When we add an array into another array it becomes a multi-dimensional array.
But how do we access values in a multi-dimensional array?  */

console.log(randomStuff[4]); // This will print the inner array [1, 2, 3] to the console. We access it by using its index in the outer array, which is 4.
console.log(randomStuff[4][1]); // This will print the number 2 to the console. We access it by first using the index of the inner array (4) and then the index of the value we want within that inner array (1).


// Lesson tasks

/* 1. Create an array of any three countries. Add an extra country in index number 3, 
console log the list. */

let countries = ['Iceland', 'Spain', 'Sweden'];

countries[3] = 'Ukraine';

console.log(countries);

/* 2. Create a multi-dimensional array of colors, three colors in the top level of the array, 
and three levels in the second level. Access the last color in the second level and console
log the result. */

let colors =['Red', 'Yellow', 'Green', ['Blue', 'Purple','Orange'];

console.log(colors[3][2]);