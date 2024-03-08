export  const addToCartAction=(item,quantity,varient)=>(dispatch,getState)=>{

    let cartItem={
        name:item.name,
        _id:item._id,
        image:item.image,
        quantity:Number(quantity),
        varient:varient,
        prices: item.prices,
        price: item.prices[0][varient]*quantity
    }
    if(cartItem.quantity>10){
alert("Quantity should be less than 10");
    }else if(cartItem.quantity<0){
        dispatch({type:"DELETE_QUANTITY",payload:item});       
    }else{
        dispatch({type:"ADD_TO_CART",payload:cartItem});
    }
   
    const cartItems=getState().addToCartReducer.cartItems;
    localStorage.setItem("cartItems",JSON.stringify(cartItems));

};

export const deleteFromCartAction=(item)=>(dispatch,getState)=>{

    dispatch({type:"DELETE_QUANTITY",payload:item});
    const cartItems=getState().addToCartReducer.cartItems;
    localStorage.setItem("cartItems",JSON.stringify(cartItems));


};