import { UseSelector, useSelector } from "react-redux"
export const addToCartReducer=(state={cartItems:[]},action)=>{
    switch(action.type){
        case "ADD_TO_CART":
        const checkItem= state.cartItems.find(i=>i._id===action.payload._id)
        if(checkItem){
            return{
                ...state,
                cartItems: state.cartItems.map(i=>i._id===action.payload._id?action.payload:i)
            }
        }
        else{
        return{
            ...state,
            cartItems:[...state.cartItems,action.payload]
        }
    }
    case "CART_CLEAR_ITEMS":
        return {
            ...state,
            cartItems: [], // Set cartItems to an empty array to clear the cart
          };
    case "DELETE_QUANTITY":
        const item= state.cartItems.find(i=>i._id===action.payload._id)
        if(item){
            return{
                ...state,
                cartItems: state.cartItems.filter(i=>i._id!=action.payload._id)
            }
        }
        else{
        return{
            ...state           
        }
    }
       
        default:
            return state
    }
}