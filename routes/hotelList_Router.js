const express = require('express');
const router = express.Router();
const hotels = require('./../schema/hotels');

// POST: Create a new hotel
router.post('/', async (req,res) =>{
  try{
    const data = req.body;

    const newHotel = new hotels(data);

    const response = await newHotel.save();
    console.log("Data Saved");
    res.status(200).json(response);
  }

  catch(err){
    console.log("An unexpected error occured",err);
    res.status(500).send("Internal Server Error",err);
  }
})

// GET: Retrieve all hotels

// Gives the info of all the hotels 
// Use http://localhost:3000/hotels/ in the Postman
router.get('/', async (req, res) => {
  try {
      const allHotels = await hotels.find();
      console.log("All hotels fetched");
      res.status(200).json(allHotels);
  } catch (err) {
      console.log("Error in fetching all hotels", err);
      res.status(500).send({ error: 'Internal Server Error' });
  }
});

// GET: Retrieve hotels by cuisines

// Gives the info of cuisine specified hotels
// Use eg. http://localhost:3000/hotels/Maharashtrian in the Postman to view the maharashtrian restaurants
router.get('/:cuisines', async (req,res) =>{
  try{
    const cuisines = req.params.cuisines;
   
    if (cuisines == 'NorthIndian' || cuisines == 'SouthIndian' || cuisines == 'Maharashtrian' || cuisines == 'Chinese'){
      const response = await hotels.find({cuisines:cuisines})
      console.log("Response Fetched");
      res.status(200).json(response);
    } 
  }

  catch(err){
    console.log("Error in fetching Data", err);
    res.status(500).send({err:'Internal Server Error'});
  }
})

// PUT: Update a hotel by ID

router.put('/:id', async (req,res) => {
  try{
  const hotelId = req.params.id;        // Extracts the id from the URL parameter
  const updatedHotelData = req.body;    // Updated data for the hotel

  const response = await hotels.findByIdAndUpdate(hotelId,updatedHotelData,{
    new:true,                           // Returns the updated document rather than the original one
    runValidators:true,                 // Run Mongoose Validation
  })

  if (!response){
    return res.status(404).send('The Hotel with given ID was not found.');
  }

  console.log("Data Updated");
  res.status(200).json(response);
  }

  catch(err){
    console.error('Error Updating Hotel : ', err);
    res.status(200).send("Internal Server Error",err);
  }

  })

  router.delete('/:id', async (req,res) =>{
    
    try{
      const hotelId = req.params.id;    // Extract the hotels id from the URL Parameter
      const response = await hotels.findByIdAndDelete(hotelId);

      if (!response){
        return  res.status(404).send('No Hotel with the provided ID was found.')
      }

      console.log("Data Deleted");
      res.status(200).json({message:'Deletion Successful'});
    }

    catch(err){
      console.log('Error in Delete Operation : ', err);
      res.status(500).send("Internal Server Error",err);
    }
})


module.exports = router;