// var fs = require('fs');
// var os = require('os');

// var notes = require("./notes.js");
// const content = notes.transfer_this_data_to_any_file;
// console.log(content);

// let user = os.userInfo();
// console.log(user);

// fs.appendFile('vyrat.txt','Hey GOAT..!\n',() => {
//   console.log("Appending to the file");
// })

/*Problem 1: NPM and Package.json
You're starting a new project and want to manage your project's dependencies using NPM.
Explain the purpose of NPM and how it helps in managing packages. Create a simple
package.json file for your project, specifying the name, version, and a few dependencies of
your choice.*/



/*Problem 2: Writing Functions
Write a JavaScript function named calculateCircleArea that takes the radius of a circle
as a parameter and returns the area of the circle. You can use the formula area = π *
radius^2. Test the function with a few different radii.*/

let calculateCircleArea = ((radius) => {
  return Math.PI*radius*radius;
})
let area1 = calculateCircleArea(1);
let area2 = calculateCircleArea(10);
console.log(`The area of the circle is ${area1}`);
console.log(`The area of the circle is ${area2}`);


/*Problem 3: Callback Functions
Create a function named performOperation that takes two numbers and a callback
function as parameters. The callback function should determine the operation to be performed
(addition, subtraction, multiplication, or division) on the two numbers. Call the
performOperation function with different numbers and callback functions for each
mathematical operation.*/

function performOperation(a,b,operationCallback){
  return operationCallback(a,b);
}

add = (num1,num2) =>{
  return num1+num2;
}

subtract = (num1,num2) =>{
  return num1-num2;
}

multiply = (num1,num2) =>{
  return num1*num2;
}

divide = (num1,num2) =>{
  return num1/num2;
}

console.log(performOperation(10,5,add));
console.log(performOperation(10,5,subtract));
console.log(performOperation(10,5,multiply));
console.log(performOperation(10,5,divide));



/*Problem 4: Using the 'fs' Module
Write a Node.js program that uses the fs module to read the contents of a text file named
"notes.txt" and display them in the console.*/

var fs = require('fs');
fs.appendFile("notes.txt","This is the task 3 of day 2 in Nodejs bootcamp",()=>{
  console.log("Done");
})



/*Problem 5: Using 'os' Module
Create a Node.js program that uses the os module to display the following system
information:
● Total memory available (in bytes)
● Free memory available (in bytes)
● Operating system platform
● Number of CPU cores*/

let os = require('os');
console.log("The Total memory available is " + os.totalmem());
console.log("The Free memory available is " + os.freemem());
console.log("The Operating System Platform is " + os.platform());
console.log("No of CPU Cores is " + os.cpus());



/*Problem 6: 'lodash' Usage
Use the lodash library to solve the following problem: Given an array of numbers, write a
function that returns the sum of all even numbers in the array. Use the _.sumBy function from
lodash to achieve this.*/

const _ = require('lodash');
const sumOfEvenNumbers = (numbers) => {
  const evenNumbers = _.filter(numbers, num => num % 2 === 0);
  return _.sumBy(evenNumbers);
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(sumOfEvenNumbers(numbers)); // Output: 30 (2 + 4 + 6 + 8 + 10)
