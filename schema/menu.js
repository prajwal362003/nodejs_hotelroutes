const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },

  price:{
    type:Number,
    required:true
  },

  taste:{
    type:String,
    enum:[ 'Sweet', 'Salty','Spicy' ]
  },

  isDrink:{
    type:Boolean,
  },

  ratings:{
    type:Number
  }
})

const menu = mongoose.model('menuItems',menuSchema);
module.exports=menu;

