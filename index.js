//import express
var express = require("express");
//initialization
var app = express();
//Db connection
require("./db");
//get the model file
var students = require("./model/student");
//middle ware
app.use(express.json());     //enabling permission
//install cors
var cors = require("cors")
app.use(cors());

//assign port
var port = 3000;

//api to add data to db
app.post('/',async(req,res)=>{
    try {
        await students(req.body).save();      //if i get req from frontend it will save
        res.send("Data added")   
    } catch (error) {
        
    }
})

// api to get data
app.get('/view',async(req,res)=>{
    try {
        var data = await students.find();
        res.send(data);
    } catch (error) {
        res.send(error)
    }
})
//to find one and delete
app.delete('/:id',async(req,res)=>{          //to rep it's an dynamic id
    console.log(req.params.id);
    try {
        await students.findByIdAndDelete(req.params.id);
        res.send("Student deleted");
    } catch (error) {
        res.send(error)
    }
})    

//api to update 
app.put('/:id',async(req,res)=>{
    try {
        await students.findByIdAndUpdate(req.params.id,req.body);
        res.send("student updated")
    } catch (error) {
        res.send(error);
    }
})

// app.get('/',(req,res)=>{})
app.get('/',(req,res)=>{
    res.send("hello");
});


//server in listening state
app.listen(port, ()=>{
    console.log(`Server is up and runing in ${port}`);
});