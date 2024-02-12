const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({

  name:{
    type:String,
    required:[true,'Please provide a name']
  },

  age:{
    type: Number,
    required: [true, 'Age is required'],
  },

  work:{
    type:String,
    enum: ['Engineer', 'Doctor','Teacher','Artist','Other'],  // Yehi values ko bna skte ho rahega
    required:true   // mandatory
  },

  mobile:{
    type:String,
    maxlength:10,
    required:true
  },

  email:{
    type: String,
    required : true,
    unique : true
  },

  address:{
    type:String
  },

  salary:{
    type:Number,
    required:true
  },
})

// Create person model
const person = mongoose.model('Person' , personSchema);
module.exports=person;