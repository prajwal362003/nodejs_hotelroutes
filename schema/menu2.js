const mongoose = require('mongoose');

const menu_details = new mongoose.Schema({
    name:{
      type: String,
      required : true
    },

    taste:{
      type:String,
      enum:['Salty','Sweet','Bitter','Spicy']
    },

    is_drink:{
      type : Boolean,
      required:true
    },

    ratings:{
      type:Number,
      require:true
    }
})
const menu2 = mongoose.model('menuItem',menu_details);
module.exports = menu2;