const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  cuisines: {
    type: String,
    enum: ['NorthIndian', 'SouthIndian', 'Maharashtrian', 'Chinese'],
    required: true 
  },
  rating: {
    type: Number
  },
  is_affordable: {
    type: Boolean,
    required: true
  }
});

const hotelModel = mongoose.model('hotels', hotelSchema); 
module.exports = hotelModel;
