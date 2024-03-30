import react from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { getMyOrders } from '../actions/orderAction';

export default function MyOrdersScreen() {
    const dispatch = useDispatch();
    const myOrdersState = useSelector(state => state.myOrdersReducer)

    const { myOrders, loading, success, error } = myOrdersState

    useEffect(() => {
        dispatch(getMyOrders());

    }, [])

    return (
        <>

            <div className='container'>
                <div className='row justify-content-center'>
                    <h1>My Orders</h1>
                    <div className='row col-md-12 justify-content-center'>
                            <div className='m-5 col-md-8  p-1 mb-5 bg-white rounded'>

                            {myOrders &&
                                        myOrders.map(order => {
                                            return (
                                                <div className='shadow-lg p-3 mb-3 bg-white rounded flex-container justify-content-center cart-items'>
                                                           <div className='m-1 w-50 text-center flex-container'>
                                                            {order.orderItems.map(item => {
                                                                return (
                                                                    
                                                                      <>
                                                                      {item.name} -${item.price}
                                                                      <br></br>
                                                                      </>  
                                                                   
                                                                    

                                                                )

                                                            })}
                                                                
                                                                </div>
                                                            <div className='m-1 w-50 text-center'>
                                                            {order.shippingAddress.street}   <br>
                                                        </br>
                                                        {order.shippingAddress.city} <br>
                                                        </br>
                                                        {order.shippingAddress.country}
                                                            </div>
                                                            <div className='m-1 w-50 text-center'>
                                                            Total Price : {order.orderAmount} <br>
                                                        </br>
                                                        Status : {(order.isDelivered ? (<>Delivered</>) : (<>Ordered</>))}

                                                            </div>
 
                                                        </div> 
                                            )})}
                           
                                </div>
                                </div>

                    


                </div>
            </div>

        </>

    )
}