import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/CartSlice';
import restaurantReducer from './features/RestaurantSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        restaurant: restaurantReducer
    },
})