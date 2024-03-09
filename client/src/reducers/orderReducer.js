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
            //error:action.payload,
            success:false,
        }
        default: return state

    }

}