// componentes
import { ScrollView } from 'react-native';
import Banner from '../../components/Banner';
import Products from '../../components/Products';
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
