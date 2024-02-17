import {combineReducers} from 'redux'
import {thunk} from 'redux-thunk'

import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';

import getOrderItemsReducer from '../src/reducers/orderItemsReducer'

const finalReducer=combineReducers({
    getOrderItemsReducer:getOrderItemsReducer
})

const store = configureStore({
    reducer: finalReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // <-- array of middlewares to install/apply
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  });

export default store;