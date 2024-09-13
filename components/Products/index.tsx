// componentes
import { StyledFlatList, StyledText } from './styles';
import React from 'react';
import ProductView from './ProductView/indext';

// data
import { products } from '../../data/products';

// tipagens externas
import { IProduct } from '../../interfaces/IProduct';
import { ListRenderItemInfo } from 'react-native';

const Products = () => {
    return (
        <>
            <StyledText>
                Nossos produtos
            </StyledText>
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
