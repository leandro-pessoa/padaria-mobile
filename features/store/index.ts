// funções
import { configureStore } from '@reduxjs/toolkit';

// reducers
import { productReducer } from '../reducers/product';
import { generalReducer } from '../reducers/general';

// declaração da store
export const store = configureStore({
    reducer: {
        product: productReducer,
        general: generalReducer,
    },
});

// exports das tipagens necessárias
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
