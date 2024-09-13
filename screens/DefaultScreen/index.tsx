// componentes
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import React from 'react';
import { Outlet } from 'react-router-native';

const DefaultScreen = () => {
    return (
        <>
            <Header />
            <Outlet />
            <NavBar />
        </>
    );
};

export default DefaultScreen;
