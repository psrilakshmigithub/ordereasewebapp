const express = require('express');
const router = express.Router();
const db = require("../db.js");
const User = require("../models/usermodel.js");

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password })

    try {
        const user=await User.findOne({email:newUser.email});
        if(!user){
            await newUser.save();
            res.send("user registered successfully");
        }
        else{
           
            res.status(402).json({ message: "User already exists" });
        }
       
    }
    catch (error) {        
        res.status(400).json({ message: "Server error" });
    }
})



router.post('/deleteUser', async (req, res) => {
    try {
            
        await User.findOneAndDelete({ _id: req.body.userId });
       
        return res.send("Deleted successfully");

    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err });
       
    }

});

router.get("/allusers", async (req, res) => {

    const response = await User.find();
    try {
        res.send(response);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

})


router.post("/login", async (req, res) => {

    const { email, password } = req.body;
    try {

        const user = await User.find({ email, password })

        if (user.length > 0) {
            const currentUser = {
                name: user[0].name,
                email: user[0].email,
                password: user[0].password,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id
            }

            res.send(currentUser)
        } else {
            res.status(404).json({ message: "User not found" })
        }



    } catch (err) {
        res.status(404).json({ message: "User not found" })
    }

})
module.exports = router;

