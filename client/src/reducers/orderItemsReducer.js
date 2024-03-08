 const getOrderItemsReducer = (state = {orderItems:[]}, action) => {

    switch (action.type) {

        case "GET_ORDERITEMS_REQUEST": return {
            loading:true,
            ...state
        }
        case "GET_ORDERITEMS_SUCCESS": return {
            loading:false,
            orderItems: action.payload,            
        }
        case "GET_ORDERITEMS_ERROR": return {
            error: action.payload,
            loading:false
        }
        default :return state

    }

}

export default getOrderItemsReducer;