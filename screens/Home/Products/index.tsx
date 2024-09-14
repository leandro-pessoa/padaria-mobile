// componentes
import { StyledFlatList } from './styles';
import React from 'react';
import ProductView from './ProductView/indext';
import Title from '../../../components/Title';

// data
import { products } from '../../../data/products';

// tipagens externas
import { IProduct } from '../../../interfaces/IProduct';
import { ListRenderItemInfo } from 'react-native';

const Products = () => {
    return (
        <>
            <Title>
                Nossos produtos
            </Title>
            <StyledFlatList
                data={products}
                keyExtractor={(item: IProduct) => item.title}
                renderItem={({ item }: ListRenderItemInfo<IProduct>) => (
                    <ProductView {...item}/>
                )}
                scrollEnabled={false}
            />
        </>
    );
};

export default Products;
