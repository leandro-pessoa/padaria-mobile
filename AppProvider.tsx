// componentes
import { Provider } from 'react-redux';
import React from 'react';
import App from './App';

// store
import { store } from './features/store';

const AppProvider = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default AppProvider;
