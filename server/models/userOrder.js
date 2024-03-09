const mongoose=require("mongoose")

const userOrderSchema=mongoose.Schema({


})

const userOrder=mongoose.model("userOrder",userOrderSchema);

module.exports=userOrder;