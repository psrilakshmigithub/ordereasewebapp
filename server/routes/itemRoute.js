const express =require('express');
const router=express.Router();
const orderItem= require('../models/orderitems')

router.get('/getOrderItems',async (req, res) => {
try{
    const items=await orderItem.find({}); 
    console.log(items);
   return res.send(items);
 
}catch(err){
return res.status(400).json({message:error});
    console.log(err);    
}           
 
});

module.exports=router;
