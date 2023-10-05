//import mongoose to create a new schema
const mongoose = require('mongoose');

//create schmea 
const TodoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})

//export this schema
module.exports = mongoose.model('task', TodoItemSchema)