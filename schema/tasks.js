const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title:{
    type: String,
    required:true
  },

  description:{
    type:String,
    default:"No Description Provided"
  },

  priority:{
    type:Number,
    required:true
  },

  dueDate:{
    type: Date,
    required:true
  }
})

const Tasks = mongoose.model('tasks',taskSchema);
module.exports = Tasks;