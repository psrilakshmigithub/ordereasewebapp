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

                    <div className='col-md-8'>
                        <div className='flex-container cart-items'>
                            <table className='table'>
                                <thead className='thead-dark'>
                                    <tr>
                                    <th>
                                        Ordered Items
                                    </th>
                                    <th>
                                        Address
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    {myOrders &&
                                        myOrders.map(order => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div>
                                                            {order.orderItems.map(item => {
                                                                return (
                                                                    <div>
                                                                        {item.name} - {item.quantity} -{item.price}
                                                                    </div>

                                                                )

                                                            })}

                                                        </div>
                                                    </td>
                                                    <td>
                                                        {order.shippingAddress.street}   <br>
                                                        </br>
                                                        {order.shippingAddress.city} <br>
                                                        </br>
                                                        {order.shippingAddress.country}
                                                    </td>
                                                    <td>
                                                        Total Price : {order.orderAmount} <br>
                                                        </br>
                                                        Status : {(order.isDelivered ? (<>Delivered</>) : (<>Ordered</>))}

                                                    </td>

                                                </tr>
                                            )

                                        })
                                    }


                                </tbody>

                            </table>



                        </div>
                    </div>


                </div>
            </div>

        </>

    )
}