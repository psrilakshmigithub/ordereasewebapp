import react from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from '../actions/addToCartAction';
import { deleteFromCartAction } from '../actions/addToCartAction';
import CheckOut from '../components/CheckOut'
import { useEffect } from 'react';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';

export default function CartScreen() {
    const cartState = useSelector(state => state.addToCartReducer);
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
    const { loading, success, error } = useSelector(state => state.orderReducer)
    useEffect(() => {
        console.log("success :" + success)
        if (success) {

            toast.success("Order Placed Successfully !");
            localStorage.removeItem("cartItems");

        } else if (error) {
            toast.error("Something went wrong !"); // Use toast.error directly
        }

    }, [success, error])

    return (
        <>
            <div className='row  justify-content-center  '>
                {cartItems.length > 0 ?
                    (<><h1>Cart</h1>
                        <div className='row col-md-12 justify-content-center'>
                            <div className='m-5 col-md-7  p-1 mb-5 bg-white rounded'>
                                {cartItems.map(item => {
                                    return (
                                        <div className='  shadow-lg p-3 mb-3 bg-white rounded flex-container justify-content-center cart-items'>
                                            <div className='m-1 w-50 text-center'>
                                                <img className='m-2' src={item.image} style={{ height: "120px", width: "120px" }} />
                                            </div>
                                            <div className='text-left m-3 w-50'>
                                                <h5>{item.name}</h5>

                                                {item.instructions && (<><h6>Preferences :</h6> {item.instructions}</>)}
                                                <br></br>

                                            </div>
                                            <div className='text-rigth m-1 w-100'>
                                                <>
                                                    <h5>
                                                        Price : {item.quantity}*{item.varient}
                                                    </h5>

                                                </>
                                                <>
                                                <h5>Total :${item.price}</h5>
                                                
                                                </>
                                                <>
                                                    
                                                    <h5>
                                                        Quantity:
                                                        <i className='fa fa-minus' aria-hidden="true" onClick={() => dispatch(addToCartAction(item, item.quantity - 1, item.varient))}></i>

                                                        {item.quantity}
                                                        <i className='fa fa-plus' aria-hidden="true" onClick={() => dispatch(addToCartAction(item, item.quantity + 1, item.varient))}></i>

                                                    </h5>

                                                </>
                                            </div>
                                            <div className='text-rigth m-1 w-100'>
                                                <i className='fa fa-trash mt-5' aria-hidden="true" onClick={() => dispatch(deleteFromCartAction(item))}></i>
                                            </div>



                                        </div>


                                    )
                                })}
                            </div>

                        </div>
                        <div className='  flex-container justify-content-center cart-items'>
                                        
                        <div className=' col-md-7 justify-content-center' >
                            <div className='flex-container col-md-5  shadow-lg p-3 mb-2 bg-white rounded  text-right'>
                                <div className='row col-md-8 m-2'>
                                    <h4>Sub Total : $ {subTotal}</h4>
                                    
                                    <CheckOut subtotal={subTotal} />
                                </div>
                            </div>

                        </div>
                        </div>



                    </>) : (<>
                        <div className='row justify-content-center'>
                            <h1>Cart is empty</h1>
                        </div>
                    </>)}
            </div>

        </>

    )
}