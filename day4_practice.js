const db = require('./db');
const express = require('express');
const bodyparser = require('body-parser');

// Importing schemas
const Person = require('./schema/person');
const menuItems = require('./schema/menu');
const Tasks = require('./schema/tasks');

const app = express();
app.use(bodyparser.json());

app.get('/',(req,res) => {
  res.send("Welcome to the API!");
})

app.get('/server',(req,res) =>{
  res.send("Welcome to the API Server");
})

app.post('/person',async (req,res)=>{
  try{
    const data = req.body;

    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("Data Saved");
    res.status(200).json(response);
  }
  catch(err){
    console.error("An Error Occured" , err);
    res.status(500).send(err);
  }
})


/* Day- 05 
Question 1: Create a POST Method API
Create a POST method API to store data or menu items as per the schema we discussed ( /menu )*/

app.post('/menu', async (req,res) =>{
  try{
    const data = req.body;

    const newMenu = new menuItems(data);

    const response = await newMenu.save();
    console.log("Data Saved");
    res.status(200).json(response);
  }

  catch(err){
    console.log("An error occured",err);
    res.status(500).send(err);
  }
})

/*Question 2: Create a GET Method API
Create a GET method API to List down the All Menu Items as per the schema we discussed ( /menu )*/

app.get('/menu',async (req,res) =>{

  try{
    const menus = await menuItems.find();
    res.json(menuItems);
  }

  catch(err){
    console.log("An Error Occured, try to resolve it and come back again");
    res.status(500).json();
  }
})

app.listen(3000,()=>{
  console.log("Server is running on port 3000")
})


/*Question 3: Creating a POST API with Express and Mongoose
You're building a simple task management application. Your task is to create a POST API endpoint for adding
new tasks to the database. Assume you've already set up an Express application and connected it to your
MongoDB using Mongoose.
a) Design the Mongoose schema for a "Task" with fields for "title," "description," "priority," and "dueDate."
b) Create a POST API endpoint /api/tasks that allow clients to submit new tasks to the database. Ensure it
handles request validation and responds with the newly created task.*/

app.post('/tasks', async (req,res) =>{
  try{
    const data = req.body;

    const newTask = new Tasks(data);

    const response = await newTask.save();
    console.log("Data Saved");
    res.status(200).json(response);
  }

  catch(err){
    console.log("An Error Occured");
    res.status(500).send(err);
  }
})


/* Question 4: Creating a GET API with Express and Mongoose
Continuing with the task management application, you need to create a GET API endpoint for retrieving a list of
tasks from the database.
Create a GET API endpoint /api/tasks that retrieve a list of all tasks from the database. Ensure it handles
errors and responds with the list of tasks in JSON format */

app.get('/tasks', async (req,res) =>{
  try{
    const task = await Tasks.find();
    res.status(200).send(task);
  }

  catch(err){
    console.log("An Error Occured , try to fix it");
    res.status(500).send(err);
  }
})