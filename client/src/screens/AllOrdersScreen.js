import react from 'react'
import { useEffect } from 'react'
import {  useDispatch ,useSelector} from 'react-redux'
import { useState } from 'react';
import {allUserOrders,updateOrderStatus} from '../actions/orderAction';


export default function AllOrderScreen(){
    const dispatch = useDispatch();
    const allOrdersState= useSelector(state=>state.allOrdersReducer)

    const {allOrders,loading,success,error}=allOrdersState

    useEffect(() => {
      dispatch(allUserOrders());

    }, [])

    function handleDeliver(orderId){
      dispatch(updateOrderStatus(orderId));
    }
return(
<>
<div className='row justify-content-center col-md-12'>
            <h1>All Orders</h1>
      
            {loading ? (
              <h1>Loading...</h1>
            ) : error ? (
              <h1>Something went wrong...</h1>
            ) : (
              <table className='table '>
                <thead className='thead-dark'>
                  <tr>
                    <th>Order Id</th>
                    <th>Email</th>
                    {/* <th>User Id</th> */}
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                 {allOrders&& allOrders.map((order) => (
                    <tr >
                      <td>{order._id}</td>
                      <td>{order.email}</td>
                      {/* <td>{order.userId}</td> */}
                      <td>{order.orderAmount}</td>
                      <td>{order.createdAt.substring(0,10)}</td>
                      
                      <td>{order.isDelivered?(<h5>Delivered</h5>):
                      (<button className='form-control' style={{"backgroundColor":"rgb(182, 33, 33)", "color":"white","fontSize":"20px"}}  onClick={() => handleDeliver(order._id)}>Deliver</button>)}</td> 
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

</>


)} 