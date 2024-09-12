// componentes
import { StyledFlatList, StyledImage, StyledView } from './styles';
import React from 'react';

// json
import DATA from '../../json/products.json';
import CommonText from '../CommonText';

// tipagens externas
import { IProduct } from '../../interfaces/IProduct';
import { Image, ListRenderItemInfo, View } from 'react-native';

const Teste = (ur) => {
    return (
        <View>
            <StyledImage source={{uri: ur}}/>
        </View>
    )
}

const Products = () => {
    return (
        <StyledFlatList
            data={DATA.products}
            keyExtractor={(item: IProduct) => item.title}
            renderItem={({ item }: ListRenderItemInfo<IProduct>) => (
                <StyledView>
                    <Teste
                        ur={item.image}
                    />
                    <CommonText>{item.title}</CommonText>
                    <CommonText>{item.price}</CommonText>
                </StyledView>
            )}
        />
    );
};

export default Products;
