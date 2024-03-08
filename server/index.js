const express = require('express');
const db = require('./db');
const app = express();
const itemRoute=require('./routes/itemRoute')

app.use(express.json());

app.use('/api/orderItems',itemRoute);

app.get("/", (req, res) => {
    res.send("Server running ");
});


const port = process.env.port || 5000;

app.listen(port, () => "Server running");

