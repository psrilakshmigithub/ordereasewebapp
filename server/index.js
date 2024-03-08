const express = require('express');
const db = require('./db');
const app = express();
const itemRoute=require('./routes/itemRoute')
const userRoute=require('./routes/userRoute')
app.use(express.json());

app.use('/api/orderItems',itemRoute);

app.use('/api/user',userRoute);

app.get("/", (req, res) => {
    res.send("Server running ");
});


const port = process.env.port || 5000;

app.listen(port, () => "Server running");

