import axios from "axios"
import { json } from "react-router-dom"
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


export const getMyOrders=()=>async (dispatch,getstate)=>{
const currentUser=getstate().loginUserReducer.currentUser
try{
    console.log("get myorder action: "+ json.toString(currentUser));
    dispatch({type:"MYORDERS_REQUEST_PLACED"})
   const response= await axios.post('/api/userOrders/getMyOrders',{userId:currentUser._id})
   console.log("get myorder action response : "+ json.toString(response));
   dispatch({type:"MYORDERS_REQUEST_SUCCESS",payload:response.data})

}
catch(error){
    console.log("get MYORDERS_REQUEST_FAILED : "+ json.toString(error));
    dispatch({type:"MYORDERS_REQUEST_FAILED",payload:error})
}

}