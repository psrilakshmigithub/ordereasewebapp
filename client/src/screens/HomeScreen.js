import react from 'react';
import { useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Item from '../components/Item';
import {getOrderItems} from '../actions/orderItemsAction';

export default function HomeScreen(){
  const dispatch=useDispatch();
  const itemsState=useSelector(state=>state.getOrderItemsReducer);
  const {orderItems,loading,error}=itemsState;
  useEffect(()=>{
    dispatch(getOrderItems());
  },[])

    return (
        <>
        <h1> Order Ease </h1>
        <div className='row justify-content-center'>
{loading? (<h1>Loading...</h1>): error ? (<h1>Something went error...</h1>) :

         ( orderItems.map((item)=>{
           return(
            <div className='col-md-3 p-3' key={item._id}>
              <div>
              <Item  ItemInfo={item}/>
              </div>
             
              </div>
           ) 
          })
        )}
        </div>
        </>

    )
}