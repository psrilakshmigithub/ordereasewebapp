import react from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import {addToCartAction} from '../actions/addToCartAction';
import {deleteFromCartAction} from '../actions/addToCartAction';




export default function CartScreen() {
    const cartState = useSelector(state => state.addToCartReducer);
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();
   const subTotal=cartItems.reduce((x,item)=>x+item.price,0);
    return (
        <>
            <div className='row justify-content-center'>
                <h1>Cart</h1>
                <div className='col-md-6'>

                    {cartItems.map(item => {
                        return (
                            <div className='flex-container '>
                                <div className='text-left m-1 w-100'>
                                    <h3>{item.name}</h3><b></b>
                                    <h3>
                                        Price : {item.quantity}*{item.varient}={item.price}
                                    </h3><b></b>
                                    <h3>Quantity:
                                        <i className='fa fa-plus' aria-hidden="true" onClick={()=>dispatch(addToCartAction(item,item.quantity+1,item.varient))}></i>
                                        {item.quantity}
                                        <i className='fa fa-minus' aria-hidden="true"  onClick={()=>dispatch(addToCartAction(item,item.quantity-1,item.varient))}></i>
                                    </h3>
                                </div>
                                <div className='m-1 w-100'>
                                    <img src={item.image} style={{ height: "80px", width: "80px" }} />
                                </div>
                                <div className='m-1 w-100 '>
                                    <i className='fa fa-trash mt-5' aria-hidden="true"  onClick={()=>dispatch(deleteFromCartAction(item))}></i>
                                </div>

                            </div>


                        )
                    })}
                </div>
                <div className='col-md-4'>
                    <h1>Sub Total :{subTotal}</h1>
                </div>




            </div>
        </>

    )
}