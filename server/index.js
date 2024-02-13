const express=require('express');
const db=require('./db');
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server running ");

});

const port=process.env.port||5000;

app.listen(port,()=>"Server running");

