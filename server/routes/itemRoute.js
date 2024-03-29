const express = require('express');
const router = express.Router();
const orderItem = require('../models/orderitems')

router.get('/getOrderItems', async (req, res) => {
    try {
        const items = await orderItem.find({});
        console.log("items :" + items);
        return res.send(items);

    } catch (err) {
        return res.status(400).json({ message: err });
        console.log(err);
    }

});

router.post('/getOrderItemsById', async (req, res) => {
    try {
        console.log("req.body:" + JSON.stringify(req.body));

        const itemId = req.body.itemId
        const item = await orderItem.findOne({ _id: itemId });
        console.log("items :" + item);
        return res.send(item);

    } catch (err) {
        return res.status(400).json({ message: err });
        console.log(err);
    }

});

router.post('/postNewOrderItems', async (req, res) => {
    try {
        const { name,
            prices,
            category,
            description,
            image } = req.body;

        const newItem = new orderItem({

            name,
            varients: ['small', 'medium', 'large'],
            prices,
            category,
            description,
            image
        })
        const items = await newItem.save();
        console.log("items :" + items);
        return res.send(items);

    } catch (err) {
        return res.status(400).json({ message: err });
        console.log(err);
    }

});

router.post('/editOrderItem', async (req, res) => {
    try {
        const updateItem = req.body;       
        const oldItem = await orderItem.findOne({ _id: updateItem._id });
        console.log("item requested from db  :" +JSON.stringify(oldItem));
        oldItem.name = updateItem.name
        oldItem.category = updateItem.category
        oldItem.description = updateItem.description
        oldItem.image = updateItem.image
        oldItem.prices = [updateItem.prices]
        const item = await oldItem.save();
        console.log("item updated successfully wit new :" + item);
        return res.send(item);

    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err });
       
    }

});

router.post('/deleteOrderItem', async (req, res) => {
    try {
            
        await orderItem.findOneAndDelete ({ _id: req.body.itemId });
       
        return res.send("Deleted successfully");

    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err });
       
    }

});
module.exports = router;
