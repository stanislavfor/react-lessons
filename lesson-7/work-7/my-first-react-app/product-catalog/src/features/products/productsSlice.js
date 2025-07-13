// my-first-react-app/product-catalog/src/features/products/productsSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        id: nanoid(),
        name: 'Товар A',
        description: 'Описание A',
        price: 100,
        available: true,
    },
];

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(product) {
                return { payload: { ...product, id: nanoid() } };
            },
        },
        deleteProduct(state, action) {
            return state.filter(product => product.id !== action.payload);
        },
        toggleAvailability(state, action) {
            const product = state.find(p => p.id === action.payload);
            if (product) product.available = !product.available;
        },
        updateProduct(state, action) {
            const index = state.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { addProduct, deleteProduct, toggleAvailability, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;