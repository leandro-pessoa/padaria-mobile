// componentes
import { NativeRouter, Route, Routes } from 'react-router-native';
import React from 'react';

// telas
import Home from './screens/Home';
import DefaultScreen from './screens/DefaultScreen';
import Cart from './screens/Cart';

const AppRoutes = () => {
    return (
        <NativeRouter>
            <Routes>
                <Route path="/" element={<DefaultScreen />}>
                    <Route index element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Route>
            </Routes>
        </NativeRouter>
    );
};

export default AppRoutes;
