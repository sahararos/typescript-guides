// The For ... In Loop
// Used to iterate over innumerable object properties / properties of an object.
var character = {
    name: "Sonic", // Name is the key and Sonic is the value.
    color: "Blue",
    speed: 1000
};
console.log(character);
/* We can use a for ... in loop to loop over the property names:
name, color, speed.
Here below is the structure for the for ... in loop. */
for (var x in character) { // The variable will hold the property names.
    console.log(x); // We log the variable to see the property names.
}
/* Inside the parentheses we put the variable name (we declared "let x")
then we put "in" and then the object name, which in our case is
"character". Inside the curly braces we put the code we want to execute.

The for loop above is using our variable, in this case the variable "x"
to iterate over our object property names.
We can also use the for ... in loop to access the property values. This
is how we would do it: */
for (var x in character) {
    console.log("".concat(x, " : ").concat(character[x])); // We use bracket notation to access the property values.`);
}
// Let's look at another example:
var salaries = {
    Peter: 24000,
    James: 34000,
    John: 55000
};
for (var i in salaries) {
    var salary = "$".concat(salaries[i]); // In template literals we're going to say $ and then pull in our property values by saying {salaries[i]}'. In other words, we're adding a dollar sign in front of the salaries and storing that inside the variable "salaries".
    console.log("".concat(i, " earns ").concat(salary, " per year"));
}
/* In the console we want to say ""name" earns "salary" per year" or
"Peter earns $24000 per year". Before we do that, we want to add a
currency symbol in front of the numbers. See explanation in code above.  */
// Let's look at something else here. 
var barbie = {
    name: "Barbie",
    age: 21,
    profession: "Model"
};
/* It is possible to change the property values inside the for ... in loop.
When we create an object, we are free to modify, add and delete its properties.
This is how we would do it: */
barbie.name = "Super Barbie"; // Here we reassigned the value of the name property.
console.log(barbie); // We log the object to see the change.
// We can also completely remove one of the properties:
delete barbie.age; // We use the delete keyword followed by the object name, dot notation and the property we want to delete.
console.log(barbie); // We log the object to see the change.
// We can also add a new property:
barbie.hobby = "Singing"; // We use dot notation to add a new property and assign it a value.
console.log(barbie); // We log the object to see the change.
// Lesson tasks
/* Create an object called house with the following properties:
type: "Detatched",
build: "brick",
year: 2019,
price: 250000,
driveway: true

Use the for ... in loop to iterate over the properties and console log
the property names along with their values. */
var house = {
    type: "Detatched",
    build: "brick",
    year: 2019,
    price: 250000,
    driveway: true
};
for (var property in house) {
    console.log("".concat(property, " : ").concat(house[property]));
}
