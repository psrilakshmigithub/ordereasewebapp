 export const getOrderItemsReducer = (state = {orderItems:[]}, action) => {

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
        case "DELETE_ITEM": return {
            ...state,            
            orderItems: state.orderItems.filter(item => item._id !== action.payload)
           
        }
        default :return state

    }

}

export const getOrderItemsByIdReducer = (state = {}, action) => {

    switch (action.type) {

        case "GET_ORDERITEMSBYID_REQUEST": return {
            loading:true,
            ...state
        }
        case "GET_ORDERITEMSBYID_SUCCESS": return {
            loading:false,
            item: action.payload,            
        }
        case "GET_ORDERITEMSBYID_ERROR": return {
            error: action.payload,
            loading:false
        }
        default :return state

    }

}

export const postNewOrderItemsReducer = (state = {}, action) => {

    switch (action.type) {

        case "POST_NEWORDERITEM_REQUEST": return {
            loading:true,
            ...state
        }
        case "POST_NEWORDERITEM_SUCCESS": return {
            loading:false,
            success:true,
            newItem: action.payload,            
        }
        case "POST_NEWORDERITEM_ERROR": return {
            error: action.payload,
            loading:false
        }
        
        default :return state

    }

}

export const deleteOrderItemReducer = (state = {}, action) => {

    switch (action.type) {

        case "DELETE_ORDERITEM_REQUEST": return {
            deleteloading:true,
            ...state
        }
        case "DELETE_ORDERITEM_SUCCESS": return {
            loading:false,
            success:true,
                      
        }
        case "DELETE_ORDERITEM_ERROR": return {
            deleteerror: action.payload,
            loading:false
        }
        
        default :return state

    }

}

export const editOrderItemsReducer = (state = {}, action) => {

    switch (action.type) {

        case "UPDATE_ORDERITEM_REQUEST": return {
            updateloading:true,
            ...state
        }
        case "UPDATE_ORDERITEM_SUCCESS": return {
            updateloading:false,
            updatesuccess:true,
                      
        }
        case "UPDATE_ORDERITEM_ERROR": return {
            updateerror: action.payload,
            updateloading:false
        }
        
        default :return state

    }

}

