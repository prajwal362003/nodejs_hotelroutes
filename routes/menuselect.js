const express = require('express');
const router = express.Router();
const menutaste = require('./../schema/menu2');

/* Question 1: Create a parameterized GET Method API for the Menu Item on the Basis of
taste Type via using Express Router */

router.get('/:select_taste', async (req,res) =>{
  try{
    const taste_type = req.params.select_taste;

    if (taste_type == 'salty' || taste_type == 'sweet' || taste_type == 'bitter' || taste_type == 'spicy'){
      const response = await menutaste.find({taste : taste_type });

      console.log("Request fetched");
      res.status(200).json(response);
    }
  }

  catch(err){
    console.log("Cant handle your request",err);
    res.status(500).send("Internal Server Error");
  }
})

module.exports = router;
// Completed Successfully
