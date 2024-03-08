import axios from 'axios'


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