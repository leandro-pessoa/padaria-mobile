// funções
import { createSlice } from '@reduxjs/toolkit';

// tipagens dos states globais
interface State {}

// declaração dos states iniciais
const initialState: State = {};

// declaração do slice
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
});

export const productReducer = productSlice.reducer;
