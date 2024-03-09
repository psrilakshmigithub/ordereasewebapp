import axios from "axios"
export const orderAction=(token, subtotal)=>async(dispatch,getstate)=>{

    try{
        const currentUser=getstate().loginUserReducer.currentUser
        const cartItems=getstate().addToCartReducer.cartItems
        dispatch({type:"PLACE_ORDER_REQUEST"})
        const response=await axios.post('/api/userOrders/placeorder',{token, subtotal,currentUser,cartItems})
        console.log(response)   
        dispatch({type:"PLACE_ORDER_SUCCESS",payload:response.data})
        
    }
    catch(error){
        console.log(error)   
        dispatch({type:"PLACE_ORDER_FAILED",payload:error})
    }
}