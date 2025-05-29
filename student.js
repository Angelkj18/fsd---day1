var mongoose = require('mongoose')
//creating schema
var studentSchema = mongoose.Schema({
    Name:String,
    Place:String,
    Age:Number,
    Department:String
});
//mode creation
var studentModel = mongoose.model("student", studentSchema);       //mpngoose.model("collectionName", studentSchema); 
//exporting model
module.exports = studentModel;