const express = require('express');
const db = require('./db');
const app = express();
const orderItem = require('./models/orderitems');

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server running ");
});

app.get('/getOrderItems', (req, res) => {

    orderItem.findOne({name:"Pepproni Pizza"}).catch(err=> {       
            console.log(err);               
    }).then((items)=>{
        res.send(items);
     } );
     
});

const port = process.env.port || 5000;

app.listen(port, () => "Server running");

