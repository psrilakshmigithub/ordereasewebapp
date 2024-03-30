const mongoose=require('mongoose');

const orderItemSchema=mongoose.Schema({
    name: {type:String,require},
    varients:[],
    prices:[],
    category:{type:String,require},
    image:{type:String,require},
    description:{type:String,require},
    isSpecial:{type:Boolean}
    


},{
    timestamps:true,
})

const orderItemModel=mongoose.model('orderItem',orderItemSchema);

module.exports=orderItemModel;