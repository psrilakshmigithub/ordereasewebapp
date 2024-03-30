import axios from "axios"
import { json } from "react-router-dom"
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';

export const orderAction=(token, subtotal)=>async(dispatch,getstate)=>{

    try{
        const currentUser=getstate().loginUserReducer.currentUser
        const cartItems=getstate().addToCartReducer.cartItems
        dispatch({type:"PLACE_ORDER_REQUEST"})
        const response=await axios.post('/api/userOrders/placeorder',{token, subtotal,currentUser,cartItems})
        console.log(response)   
        dispatch({type:"PLACE_ORDER_SUCCESS",payload:response.data})
        dispatch({ type: "CART_CLEAR_ITEMS" });
        localStorage.removeItem("cartItems");
        
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


export const allUserOrders=()=>async (dispatch,getstate)=>{
   try{
        dispatch({type:"ALLUSER_ORDERS_REQUEST"})
       const response= await axios.get('/api/userOrders/allOrders')
       console.log("all user orders action response : "+ json.toString(response));
       dispatch({type:"ALLUSER_ORDERS_SUCCESS",payload:response.data})
    
    }
    catch(error){
         dispatch({type:"ALLUSER_ORDERS_FAILED",payload:error})
    }
    
    }

    export const updateOrderStatus = (orderId) =>async dispatch => {
        try {         
          const response =await axios.post('/api/userOrders/updateOrderStatus',{orderId:orderId});
          console.log("action response:"+ JSON.stringify(response));
          dispatch({type:"UPDATE_ORDERS_STATUS",payload:orderId}) 
          toast.success("Order Status Updated !");
          
      
        }catch(error) {
          console.log("Error"+error)
        }
      
      }


