var Express=require("express");
var Mongoclient=require("mongodb").Mongoclient;
var cors=require("cors");
const multer=require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://admin:admin@1@cluster0.2cqw11e.mongodb.net/?retryWrites=true&w=majority";



var DATABASENAME="todoappdb";
var database;


app.listen(5038,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,clint)=>{
        database=clint.db(DATABASENAME);
        console.log("hello backend");
    })
})