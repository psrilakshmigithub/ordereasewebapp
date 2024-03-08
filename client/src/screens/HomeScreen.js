import react from 'react';
import { useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import pizzadata from '../pizzadata';
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
        <div className='row'>
{loading? (<h1>Loading...</h1>): error ? (<h1>Something went error...</h1>) :
console.log("order items :"+orderItems)
         ( orderItems.map((item)=>{
           return(
            <div className='col-md-4 p-3'>
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