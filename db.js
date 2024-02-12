const mongoose = require('mongoose');
require('dotenv').config();

// define the mongoadb connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

// Set up MongoDB Connection
mongoose.connect(mongoURL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});


const db = mongoose.connection;

// Define the event listeners for database connection
db.on('connected',()=>{
  console.log("Connected to Mongo DB");
})

db.on('error', (error) => {
  console.error("Error connecting to Mongo DB:", error);
});

db.on('disconnected',()=>{
  console.log("Disconnected from Mongo DB");
})

// Export the database connection
module.exports=db;


// // Import necessary modules
// const express = require('express');
// const mongoose = require('mongoose');

// // Load environment variables from .env file
// require('dotenv').config();

// // Create an Express application
// const app = express();

// // Set up middleware, routes, etc.

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//   // Use the new URL parser
//   useNewUrlParser: true,
//   // Use the new server discovery and monitoring engine
//   useUnifiedTopology: true
// })
// .then(() => {
//   // Once connected, start the server
//   app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//   });
// })
// .catch(error => {
//   // Handle connection errors
//   console.error('Error connecting to MongoDB:', error);
// });
