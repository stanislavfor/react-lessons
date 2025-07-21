import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // { id, title, size, price, quantity }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id, title, size, price } = action.payload;
            const existingItem = state.items.find(
                item => item.id === id && item.size === size
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ id, title, size, price, quantity: 1 });
            }
        },
        updateQuantity(state, action) {
            const { id, size, quantity } = action.payload;
            const item = state.items.find(i => i.id === id && i.size === size);
            if (item && quantity >= 1) {
                item.quantity = quantity;
            }
        },
        removeFromCart(state, action) {
            const { id, size } = action.payload;
            state.items = state.items.filter(
                item => !(item.id === id && item.size === size)
            );
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
