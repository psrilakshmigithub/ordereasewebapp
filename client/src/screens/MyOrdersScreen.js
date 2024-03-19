import react from 'react'
import { useEffect } from 'react'
import {  useDispatch ,useSelector} from 'react-redux'
import { useState } from 'react';
import {getMyOrders} from '../actions/orderAction';

export default function MyOrdersScreen() {
    const dispatch = useDispatch();
    const myOrdersState= useSelector(state=>state.myOrdersReducer)

    const {myOrders,loading,success,error}=myOrdersState

    useEffect(() => {
      dispatch(getMyOrders());

    }, [])

    return (
        <>

            <div className='container'>
            <div className='row justify-content-center'>
                <h1>My Orders</h1>
             {myOrders &&
            myOrders.map(order=>{
                return (
                    <div className='col-md-8'>
                    <div className='flex-container cart-items'>
                        {order.orderItems.map(item=>{
                            return (
                            <div>  
                                
                                <h2>{item.name}</h2><b></b>
                            <h4>
                                Price : {item.price}
                            </h4><b></b>
                            <h4>Quantity:
                                {item.quantity}
                                 </h4>
                                 <div className='m-1 w-100'>
                                    <img className='m-2' src={item.image} style={{ height: "80px", width: "80px" }} />
                                         </div>   
                            </div>
                            )
                            
                        })}
                       
                      
                    </div>
                </div>
                )
                    
                })
            }
                
            </div>
            </div>

        </>

    )
}