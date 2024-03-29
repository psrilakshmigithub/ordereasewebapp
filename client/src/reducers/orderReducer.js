export const orderReducer=(state={},action)=>{

    switch(action.type){
        case "PLACE_ORDER_REQUEST":return{
            loading:true
            
        }
        case "PLACE_ORDER_SUCCESS":return{
            loading:false,
            success:true,
            //userOrders:action.payload

        }
        case "PLACE_ORDER_FAILED":return{
            loading:true,
            error:action.payload,
            success:false,
        }
        default: return state

    }

}

export const clearCartReducer = () => (dispatch) => {
    dispatch({ type: CART_CLEAR_ITEMS });
  };

export const myOrdersReducer=(state={myOrders:[]},action)=>{

    switch(action.type){
        case "MYORDERS_REQUEST_PLACED":return{
            loading:true
            
        }
        case "MYORDERS_REQUEST_SUCCESS":return{
            loading:false,
            success:true,
            myOrders:action.payload

        }
        case "MYORDERS_REQUEST_FAILED":return{
            loading:true,
            error:action.payload,
            success:false,
        }
        default: return state

    }

}

export const allOrdersReducer=(state={allOrders:[]},action)=>{

    switch(action.type){
        case "ALLUSER_ORDERS_REQUEST":return{
            loading:true
            
        }
        case "ALLUSER_ORDERS_SUCCESS":return{
            loading:false,
            success:true,
            allOrders:action.payload

        }
        case "ALLUSER_ORDERS_FAILED":return{
            loading:true,
            error:action.payload,
            success:false,
        }
        default: return state

    }

}