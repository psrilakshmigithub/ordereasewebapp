const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const userOrder=require('../models/userOrder');
const stripe = require("stripe")("sk_test_51Os77uJB9nASa6ORGQF84RGujTC6nVUBcaN2fyM7KR0VweZQj9FR7GsX9RXDEFXe0S9mpNIf06LUYpR4HWrqcmtv00QdiXFZQp")

router.post('/getMyOrders',async(req,res)=>{
    const userId=req.body.userId
    console.log("myorders userId:"+ JSON.stringify(userId));
    try{
        const response=await userOrder.find({userId:userId}).sort({_id:-1})
        console.log("myorders based on userid:"+JSON.stringify(response))
        res.send(response);
    }
    catch(error){
        console.error('Error while retrieving user orders:', error);
        res.status(400).json({ message: "Something went wrong" + error })
    }

})


router.get('/allOrders',async(req,res)=>{
   
    console.log("all orders");
    try{
        const response=await userOrder.find({}).sort({_id:-1})
        console.log("all orders: "+JSON.stringify(response))
        res.send(response);
    }
    catch(error){
        console.error('Error while retrieving all orders:', error);
        res.status(400).json({ message: "Something went wrong" + error })
    }

})

router.post('/updateOrderStatus',async(req,res)=>{
   
    console.log("update  order status");
    try{
        const updateOrder=await userOrder.findOne({_id:req.body.orderId})
        console.log("updateOrder : "+JSON.stringify(updateOrder))
        updateOrder.isDelivered=true
        await updateOrder.save();
        res.send("Order status updated");
    }
    catch(error){
        console.error('Error while retrieving all orders:', error);
        res.status(400).json({ message: "Something went wrong" + error })
    }

})

router.post("/placeorder", async (req, res) => {
    console.log("entered post " + req.body);
    const { token, subtotal, currentUser, cartItems } = req.body;

    try {
        console.log("entered post stripe call");
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        }).then(customer => {
            console.log('Customer created:', customer);
            const payment = stripe.charges.create({
                amount: subtotal,
                currency: 'CAD',
                customer: customer.id,
                receipt_email: token.email,

            }, { idempotencyKey: uuidv4() })
                .then(payment => {
                    console.log('payment created:', payment);
                    console.log("current user after payment"+currentUser);
                    const newOrder=new userOrder({
                        name:currentUser.name,
                        userId:currentUser._id,
                        email:currentUser.email,
                        orderItems:cartItems,
                        shippingAddress:{
                            street:token.card.address_line1,
                            city:token.card.address_city,
                            country:token.card.address_country,
                            pincode:token.card.address_zip
                        },
                        orderAmount:subtotal,
                        isDelivered:false,
                        transactionId:payment.source.id
                    })
                    newOrder.save();
                    return res.send("payment success")
                })
                .catch(error => {
                    console.error('Error creating payment:', error);
                    return res.send("payment failed")
                });
           
        })
            .catch(error => {
                console.error('Error creating customer:', error);
            });


    }
    catch (error) {
        console.log("error in post" + error)
        return res.status(400).json({ message: "Something went wrong" + error })
    }
})

module.exports = router;
