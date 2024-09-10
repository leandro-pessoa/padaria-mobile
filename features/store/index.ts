// funções
import { configureStore } from '@reduxjs/toolkit';

// reducers
import { productReducer } from '../reducers/product';

// declaração da store
export const store = configureStore({
    reducer: productReducer,
});

// exports das tipagens necessárias
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
