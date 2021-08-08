import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from './slice/productsSlice'
import cartReducer from "./slice/cartSlice";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

export default store