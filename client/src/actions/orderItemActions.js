import axios from 'axios'

export const getOrderItems = () => dispacth => {
  dispacth({ type: "GET_ORDERITEMS_REQUEST" })
  try {
    const response = axios.get('/api/orderItems/getOrderItems');
    console.log(response);
    dispacth({ type: "GET_ORDERITEMS_SUCCESS", payload: response.data });

  } catch {
    dispacth({ type: "GET_ORDERITEMS_ERROR", payload: error });
  }

}