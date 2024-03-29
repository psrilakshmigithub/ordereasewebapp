import axios from 'axios'
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';


export const getOrderItems = () =>async dispatch => {

  dispatch({ type: "GET_ORDERITEMS_REQUEST" })
  try {
    const response =await axios.get('/api/orderItems/getOrderItems');
    console.log("action response:"+response);
    dispatch({ type: "GET_ORDERITEMS_SUCCESS", payload: response.data });

  }catch(error) {
    dispatch({ type: "GET_ORDERITEMS_ERROR", payload: error });
  }

}


export const getOrderItemsById = (itemId) =>async dispatch => {

  dispatch({ type: "GET_ORDERITEMSBYID_REQUEST" })
  try {
    console.log("itemId in action:"+itemId);
    const response =await axios.post('/api/orderItems/getOrderItemsById',{itemId:itemId});
    console.log("action response:"+response);
    dispatch({ type: "GET_ORDERITEMSBYID_SUCCESS", payload: response.data });

  }catch(error) {
    dispatch({ type: "GET_ORDERITEMSBYID_ERROR", payload: error });
  }

}


export const postNewOrderItem = (item) =>async dispatch => {

  dispatch({ type: "POST_NEWORDERITEM_REQUEST" })
  try {
    const response =await axios.post('/api/orderItems/postNewOrderItems',item);
    console.log("action response:"+response);
    dispatch({ type: "POST_NEWORDERITEM_SUCCESS", payload: response.data });

  }catch(error) {
    dispatch({ type: "POST_NEWORDERITEM_ERROR", payload: error });
  }

}

export const editOrderItem = (item) =>async dispatch => {

  dispatch({ type: "UPDATE_ORDERITEM_REQUEST" })
  try {
    console.log("UPDATE_ORDERITEM_REQUEST:"+ JSON.stringify(item));
    const response =await axios.post('/api/orderItems/editOrderItem',item);
    console.log("action response:"+ JSON.stringify(response));
    dispatch({ type: "UPDATE_ORDERITEM_SUCCESS", payload: response.data });

  }catch(error) {
    dispatch({ type: "UPDATE_ORDERITEM_ERROR", payload: error });
  }

}
export const deleteOrderItem = (itemId) =>async dispatch => {


  try {
    console.log("DELETE_ORDERITEM_REQUEST:"+ JSON.stringify(itemId));
    const response =await axios.post('/api/orderItems/deleteOrderItem',{itemId:itemId});
    console.log("action response:"+ JSON.stringify(response));
    dispatch({type:"DELETE_ITEM", payload:itemId});
    toast.success("Menu Item deleted Successfully !");
   

  }catch(error) {
    console.log("Error"+error)
  }

}

