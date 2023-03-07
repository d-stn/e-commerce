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
            else {
                currentItem.qty += action.payload.qty
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        }
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer