const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51Os77uJB9nASa6ORGQF84RGujTC6nVUBcaN2fyM7KR0VweZQj9FR7GsX9RXDEFXe0S9mpNIf06LUYpR4HWrqcmtv00QdiXFZQp")


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
                })
                .catch(error => {
                    console.error('Error creating payment:', error);
                });
            if (payment) {
                return res.send("payment success")
            }
            else {
                return res.send("payment failed")
            }
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
