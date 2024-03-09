import {combineReducers} from 'redux'
import {thunk} from 'redux-thunk'

import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';

import getOrderItemsReducer from '../src/reducers/orderItemsReducer';
import {addToCartReducer} from '../src/reducers/addToCartReducer';

 import {registerUserReducer} from '../src/reducers/userReducer';
 import {loginUserReducer} from '../src/reducers/userReducer';
 import {orderReducer} from '../src/reducers/orderReducer';



const finalReducer=combineReducers({
    getOrderItemsReducer:getOrderItemsReducer,
    addToCartReducer:addToCartReducer,
   registerUserReducer:registerUserReducer,
   loginUserReducer:loginUserReducer,
   orderReducer:orderReducer
})


const cartItems=localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[]
const currentUser=localStorage.getItem("currentUser")? JSON.parse(localStorage.getItem("currentUser")):[]
const initialState={
  addToCartReducer:{
    cartItems:cartItems
  },
  loginUserReducer:{
    currentUser:currentUser
  }
  
}

const store = configureStore({
    reducer: finalReducer,
    preloadedState:initialState,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // <-- array of middlewares to install/apply
    devTools: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    
  });

export default store;