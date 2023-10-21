import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect';


const initialState = {
    restaurant: {
        id: null,
        genre: null,
        img: null,
        title: null,
        rating: null,
        address: null,
        short_description: null,
        dishes: null,
        lat: null,
        long: null

    }
}

export const RestaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = RestaurantSlice.actions

export const selectRestaurant = (state) => state.restaurant.restaurant






export default RestaurantSlice.reducer