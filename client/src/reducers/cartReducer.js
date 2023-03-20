import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const currentItem = state.items.find(item => item.id === action.payload.id)

            if (!currentItem) {
                state.items.push(action.payload)
            }
            else if (currentItem.qty + action.payload.qty <= currentItem.stock) {
                currentItem.qty += action.payload.qty
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
        clearCart: (state, action) => {
            state.items = [];
        }
    },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer