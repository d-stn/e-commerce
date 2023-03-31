import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    buyNowItem: {},
    cartPurchase: true
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const currentItem = state.items.find(item => item.id === action.payload.id);

            if (!currentItem) {
                state.items.push(action.payload);
            }
            else if (currentItem.qty + action.payload.qty <= currentItem.stock) {
                currentItem.qty += action.payload.qty;
            }
            state.cartPurchase = true;
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        buyNow: (state, action) => {
            state.buyNowItem = action.payload;
            state.cartPurchase = false;
        },
        setCartPurchase: (state, action) => {
            state.cartPurchase = action.payload;
        },
        clearCart: (state, action) => {
            console.log("Clearing cart, and this is my payload:", action.payload);
            // if customer orders from "buy now", we want to keep shopping cart contents
            switch (action.payload.cartPurchase) {
                case true:
                    state.items = [];
                    break;
                case false:
                    state.buyNowItem = {}
                    break;
                default:
                    console.error("Incorrect use of \"clearCart\" action in cartReducer.");
            }
            state.cartPurchase = true;
        }
    },
})

export const { addToCart, removeFromCart, clearCart, buyNow, setCartPurchase } = cartSlice.actions

export default cartSlice.reducer