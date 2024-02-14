const express = require('express');
const router = express.Router();
const Person = require('./../schema/person');

router.post('/',async (req,res)=>{
  try{
    const data = req.body;

    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("Data Saved");
    res.status(200).json(response);
  } 
  // catch
  catch(err){
    console.error("An Error Occured" , err);
    res.status(500).send(err);
  }
})

router.get('/:worktype',async (req,res) =>{

  try{
  const worktype = req.params.worktype;   // Extract the work type from the URL parameter

  if (worktype == 'Engineer' || worktype == 'manager' || worktype == 'waiter'){
    const response = await Person.find({work:worktype}); 
    console.log("Response Fetched");
    res.status(200).json(response);
  }

  else{
    console.log("Please resolve the code and come back")
    res.status(404).json({error:'Invalid Work Type'});
  }
  }

  catch(err){
    console.log("Error Encountered",err);
    res.status(500).json({error:'Internal Server Error'});
  }
})



router.put('/:id', async (req,res) => {
  try{
  const personId = req.params.id;        // Extracts the id from the URL parameter
  const updatedPersonId = req.body;    // Updated data for the hotel

  const response = await Person.findByIdAndUpdate(personId,updatedPersonId,{
    new:true,                           // Returns the updated document rather than the original one
    runValidators:true,                 // Run Mongoose Validation
  })

  if (!response){
    return res.status(404).send('The Person with the given Id is not found');
  }

  console.log("Data Updated");
  res.status(200).json(response);
  }

  catch(err){
    console.error('Error Updating Person, resolve it : ', err);
    res.status(200).send("Internal Server Error",err);
  }

  })

// Just for testing
module.exports = router;