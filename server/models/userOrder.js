const mongoose=require("mongoose")

const userOrderSchema=mongoose.Schema({
name:{type:String,require},
userId:{type:String,require},
email:{type:String,require},
orderItems:[],
shippingAddress:{type:Object},
orderAmount:{type:Number,require},
isDelivered:{type:Boolean,require},
transactionId:{type:String,require}

}
,{
    timestamps:true
})

const userOrder=mongoose.model("userOrder",userOrderSchema);

module.exports=userOrder;