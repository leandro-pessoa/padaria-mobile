// componentes
import { ScrollView } from 'react-native';
import Banner from './Banner';
import Products from './Products';
import React from 'react';

const Home = () => {
    return (
        <>
            <ScrollView>
                <Banner />
                <Products />
            </ScrollView>
        </>
    );
};

export default Home;
