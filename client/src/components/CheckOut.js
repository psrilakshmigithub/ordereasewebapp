import react from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch } from 'react-redux'
import { orderAction } from '../actions/orderAction';

export default function CheckOut(props){
    const dispatch=useDispatch();
    function tokenHandler(token){       
        dispatch(orderAction(token,props.subtotal*100))
        console.log(token)
    }
    return(
      
        <StripeCheckout
           amount={props.subtotal*100}
           shippingAddress
           token={tokenHandler}
           currency='CAD'
           stripeKey='pk_test_51Os77uJB9nASa6ORXfwveBhbvm9cmHwZMD62RLVDcwtlXlbLYxtJw5xI82ZUUdWOBZ6u6fZRJnPJfbe5faqXGBiO00XjkK186o'
           >
            <button style={{"backgroundColor":"red", "color":"white","fontSize":"20px"}} className='btn'>Pay Now</button>
        </StripeCheckout>
       
    )
}