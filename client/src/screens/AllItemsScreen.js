import react from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderItems, deleteOrderItem } from '../actions/orderItemsAction';

export default function AllItemsScreen() {
  const dispatch = useDispatch();
  const itemsState = useSelector(state => state.getOrderItemsReducer);
  const { orderItems, loading, error } = itemsState;

  useEffect(() => {
    dispatch(getOrderItems());
  }, [])

  const handleDelete = (itemId) => {
    console.log("Delete " + itemId);
    dispatch(deleteOrderItem(itemId));
  };
  return (
    <>
      <div className='row justify-content-center col-md-12'>
        <h2>Menu Items</h2>

        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Something went wrong...</h1>
        ) : (
          <table className='table menu-items'>
            <thead className='thead-dark'>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Image</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orderItems && orderItems.map((item) => (
                <tr >
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <img className='m-2' src={item.image} style={{ height: "120px", width: "120px" }} />
                  </td>
                  <td> Small:{item.prices[0]['small']}<br />
                    Medium:{item.prices[0]['medium']}<br />
                    Large:{item.prices[0]['large']}
                  </td>
                  <td>{item.category}</td>
                  <td> <i className='fa fa-trash mt-1' onClick={() => handleDelete(item._id)}></i>
                    <a href={`/admin/edititems/${item._id}`}><i className='fa fa-edit'> </i></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </>


  )
} 