// funções
import { createSlice } from '@reduxjs/toolkit';

// tipagens externas
import { RootState } from '../store';

// tipagem dos states
interface State {
    theme: string;
}

// declaração inicial dos states
const initialState: State = {
    theme: 'light',
};

// declaração do slice
const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
    },
});

// export do reducer
export const generalReducer = generalSlice.reducer;

// export das actions
export const { toggleTheme } = generalSlice.actions;

// export dos states
export const selectTheme = (state: RootState) => state.general.theme;
