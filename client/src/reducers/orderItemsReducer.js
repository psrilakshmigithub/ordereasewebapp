 const getOrderItemsReducer = (state = {}, action) => {

    switch (action.type) {

        case "GET_ORDERITEMS_REQUEST": return {
            ...state
        }
        case "GET_ORDERITEMS_SUCCESS": return {
            orderItems: action.payload
        }
        case "GET_ORDERITEMS_ERROR": return {
            error: action.payload
        }
        default :return state

    }

}

export default getOrderItemsReducer;