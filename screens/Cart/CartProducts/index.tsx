// componentes
import { StyledFlatList, StyledToucheableHighlight, StyledText } from './styles';
import CartProduct from './CartProduct';
import React from 'react';

// funções
import { useAppSelector } from '../../../features/hooks';

// states globais
import { selectCart } from '../../../features/reducers/product';

// tipagens externas
import { IProduct } from '../../../interfaces/IProduct';
import { ListRenderItemInfo } from 'react-native';
import Title from '../../../components/Title';

const CartProducts = () => {
    const cart = useAppSelector(selectCart);

    return (
        <>
            <Title>Carrinho</Title>
            <StyledFlatList
                data={cart}
                keyExtractor={(item: IProduct) => item.id}
                renderItem={({ item }: ListRenderItemInfo<IProduct>) => (
                    <CartProduct {...item} />
                )}
            />
            <StyledToucheableHighlight>
                <StyledText>Finalizar compra</StyledText>
            </StyledToucheableHighlight>
        </>
    );
};

export default CartProducts;
