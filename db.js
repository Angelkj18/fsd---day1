//install mongoose => npm i mongoose
var mongoose = require('mongoose');
// mongoose.connect("url").then(()=>{}).catch(()=>{})
mongoose.connect("mongodb+srv://Angelin:angelinkj@cluster0.xkndept.mongodb.net/backend?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Db connected")    //for understanding
})
.catch(()=>{
    console.log(err)
});