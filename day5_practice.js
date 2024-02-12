const express = require('express');
const bodyParser = require("body-parser");
const db = require('./db');

// Importing schemas
const Person = require('./schema/person');
const personRoutes = require('./routes/personRoutes');
// const menu_task = require('./routes/menuselect');
const hotelList_Router = require('./routes/hotelList_Router');
const app = express();
app.use(bodyParser.json());


// No need of this because app.use already defined for these three below
// app.use('/', personRoutes);
// app.use('/',menu_task);
// app.use('/',hotelList_Router);

// app.get('/person/:worktype',async (req,res) =>{

//   try{
//   const worktype = req.params.worktype;   // Extract the work type from the URL parameter

//   if (worktype == 'Engineer' || worktype == 'manager' || worktype == 'waiter'){
//     const response = await Person.find({work:worktype}); 
//     console.log("Response Fetched");
//     res.status(200).json(response);
//   }
//   else{
//     res.status(404).json({error:'Invalid Work Type'});
//   }
//   }

//   catch(err){
//     console.log("Error Encountered",err);
//     res.status(500).json({error:'Internal Server Error'});
//   }
// })

app.use('/persons',personRoutes);
// app.use('/menu',menu_task);
app.use('/hotels',hotelList_Router);

app.listen(3000,()=>{
  console.log("App is listening on Port 3000");
})