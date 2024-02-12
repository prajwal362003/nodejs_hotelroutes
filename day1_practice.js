/*DAY - 01
Problems
Problem 1: Conditional Statements (if-else)
You run a movie theater, and you want to offer discounts based on a person's age. Write a
JavaScript program that asks the user for their age and then displays a message:
- If the age is less than 18, display "You get a 20% discount!"
- If the age is between 18 and 65 (inclusive), display "Normal ticket price applies."
- If the age is 65 or older, display "You get a 30% senior discount!"*/


let prompt = require('prompt-sync')();
let age = prompt("Enter your age");
if (age < 18){
  console.log("You get a 20% discount!");
}

else if (age >= 18 && age <= 65){
  console.log("Normal ticket price applies.");
}

else{
  console.log("You get a 30% senior discount!");
}


/*Problem 2: Variables (var and const)
Create a JavaScript program to calculate the area of a rectangle. Ask the user for the length
and width of the rectangle and store them in variables. Calculate and display the area using
the formula: `area = length * width`. */

let len = prompt("Enter the length of a rectangle");
let wid = prompt("Enter the width of a rectangle");

let area = len * wid;
console.log("The Area of a Rectangle is " + area);


/*Problem 3: Objects and Properties
You're creating an online store. Define a JavaScript object named "product" with the following
properties:
- name (string)
- price (number)
- inStock (boolean)
Create at least three products using your object template and display their details using
console.log. */

const product1 = {
  name : "Nokia",
  price : 99,
  inStock : true,
}

let product2 = {
  name : 'Apple iPhone',
  price : 749,
  inStock : false,
}

let product3 = {
  name : 'Samsung Galaxy S21',
  price : 1599,
  inStock : true,
}

console.log(product1);
console.log(product2);
console.log(product3);


/*Problem 4: Arrays
You're organizing a party and want to keep track of the guest list. Create an array called
"guestList" and add the names of at least five guests. Then, write a program that checks if a
given name is on the guest list. If the name is found, display "Welcome to the party, [name]!";
otherwise, display "Sorry, you're not on the guest list."*/

const guestList = ["Virat", "Rohit", "Dhoni", "Bumrah", "Rahul"];
const nameToCheck = prompt("Enter your name:");
if (guestList.includes(nameToCheck)) {
console.log(`Welcome to the party, ${nameToCheck}!`);
} else {
console.log("Sorry, you're not on the guest list.");
}

/*Problem 5: JSON (JavaScript Object Notation)
You're working on a weather app. Create a JSON object representing the weather forecast for
a specific day. Include properties like "date," "temperature," "conditions," and "humidity."
Display the information using console.log.
Remember to encourage your students to experiment and think creatively while solving these
problems. They can use the concepts you've taught them to come up with their own solutions.
This will not only help solidify their understanding but also foster their problem-solving skills in
JavaScript.*/

const weather = {
  date:"15/01/2024",
  temperature:20,
  conditions:"Cold",
  humidity:60
}

console.log("Weather Forecast on " + weather.date)
console.log("Temperature is " + weather.temperature)
console.log("Conditions " + weather.conditions)
console.log("Humidity " + weather.humidity)

