// const express = require("express");
// const app = express();

// app.get('/',(req,res) => {
//   res.send("Hello World");
// })

// app.get('/msg',(req,res) => {
//   let customized_msg = {
//     fav_player:'vyrat',
//     is_king:true,
//   }
//   res.send("This will display in the localhost");
//   //res.send(customized_msg);   // returns an JSON
// })

// app.listen(3000,() => {
//   console.log("Server is listening on port 3000")
// });


// Practice Questions
/*Problem 1: Understanding Servers and Express.js
Explain in your own words what a server is in the context of Node.js. Then, write step-by-step instructions on
how to create a basic server using Express.js.*/

// const express = require('express');
// const app = express();

// app.get('/',(req,res) => {
//   res.send("Hello from the express server");
// })

// app.listen(3000, () => {
//   console.log("The Server is running on port 3000");
// })


/*Problem 2: JSON Manipulation
a) Define JSON and explain its importance in web development.
b) Given a JSON data string: {"name": "Alice", "age": 25, "hobbies": ["reading",
"painting"]}, explain how you would extract the value of the "age" key.
c) How would you convert the following object into a JSON data string? {"title": "Book", "pages":
200}*/

// const jsoneg = {
//   "name": "Alice",
//   "age": 25,
//   "hobbies": ["reading","painting"]
// };

// console.log("The age is " + jsoneg.age);

// const stringobj = JSON.stringify({"title": "Book", "pages":200})


/*Problem 3: API and Endpoints
a) Define what an API is and its role in software development.
b) Explain what an endpoint is in the context of web APIs.
c) Provide an example of an endpoint you might find in a social media application*/

/*a) An API (Application Programming Interface) is a set of rules and protocols that allows different software
components to communicate and interact with each other. It defines how requests and responses should be
structured.
b) An endpoint is a specific URL (Uniform Resource Locator) that represents a particular function or service
provided by an API. It's the specific location where clients can make requests to access certain data or perform
actions.
c) Example of an endpoint in a social media app: /users/{username} to retrieve user information based on
their username.*/


/*Problem 4: Creating a Route with Express.js
a) Explain what the HTTP GET method is used for in the context of web development.
b) Write the code to create a simple Express.js route that responds with "Hello, World!" when a user visits the
root URL ("/")*/

// const express = require('express');
// const app = express();

// app.get('/',(req,res) => {
//   res.send("Hello World!");
// })

// app.listen(3000,() =>{
//   console.log("Server started at port 3000");
// })


/*Problem 5: JSON Parsing and Object Conversion
a) Given a JSON data string: {"product": "Laptop", "price": 999.99}, explain how you would
parse it into a JavaScript object.
b) You have an object: { "name": "Bob", "age": 30 }. How would you convert it into a JSON data
string?*/

// const jsonData = '{"product": "Laptop", "price": 999.99}';
// const parsedObject = JSON.parse(jsonData);
// console.log(parsedObject.product); // Output: Laptop

// const objectToConvert = {"name": "Bob", "age": 30};
// const jsonString = JSON.stringify(objectToConvert);
// console.log(jsonString); // Output: {"name":"Bob","age":30}


/*Problem 6: Building a Basic API
Imagine you're building an API for a weather app. Your API needs an endpoint to retrieve the current weather.
Create an Express.js route that responds with a JSON object containing the current temperature, conditions,
and city.*/

const express = require('express');
const app = express();

app.get('/',(req,res) => {
  res.send("Head over to localhost:3000/weather to check the weather of nashik")
})
app.get('/weather',(req,res) => {
  const weatherData = {
    temperature : 25,
    conditions:'Sunny',
    city:'Nashik'
  };
  res.json(weatherData);
});

app.listen(3000,() =>{
  console.log("Weather API server started at port 3000");
})