const mongoose= require('mongoose');



const connectURL="mongodb+srv://srilakshmipasupuleti:sri123@cluster0.qilmkdx.mongodb.net/ordereaseapp";

mongoose.connect(connectURL,{useUnifiedTopology:true,useNewUrlParser:true});

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("connected to mongoose");
})


db.on('error',()=>{
    console.log("failed to connect to mongoose");
})



