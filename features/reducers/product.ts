// funções
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// tipagens externas
import { IProduct } from '../../interfaces/IProduct';
import { RootState } from '../store';

// tipagens dos states globais
interface State {
    cart: IProduct[];
}

// declaração dos states iniciais
const initialState: State = {
    cart: [],
};

// declaração do slice
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProductInCart: (state, action: PayloadAction<IProduct>) => {
            state.cart = [...state.cart, action.payload];
        },
        removeProductFromCart: (state, action: PayloadAction<string | number[]>) => {
            state.cart = state.cart.filter(
                (product) => product.id !== action.payload
            );
        },
    },
});

// export do reducer
export const productReducer = productSlice.reducer;

// export das actions
export const { addProductInCart, removeProductFromCart } = productSlice.actions;

// export dos states
export const selectCart = (state: RootState) => state.product.cart;
