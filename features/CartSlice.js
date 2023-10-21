import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect';


const initialState = {
    item: [],
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.item = [...state.item, action.payload]
        },
        removeFromCart: (state, action) => {
            const i = state.item.findIndex((items) => items.id === action.payload.id)
            let newCart = [...state.item]
            if (i >= 0) {
                newCart.splice(i, 1)
            } else {
                console.warn(`Product ${action.payload.id} is not in Cart`)
            }
            state.item = newCart

        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = CartSlice.actions

export const selectCartItems = (state) => state.cart.item

export const selectCartItemsWithId = (state, id) => state.cart.item.filter((items) => items.id === id)
export const selectTotalItems = (state) => state.cart.item.reduce((total, item) => (total += item.price), 0)






export default CartSlice.reducer