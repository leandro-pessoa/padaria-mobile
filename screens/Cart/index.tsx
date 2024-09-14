// funções
import { useAppSelector } from '../../features/hooks';

// states globais
import { selectCart } from '../../features/reducers/product';

// componentes
import React from 'react';
import CartProducts from './CartProducts';
import { StyledText, StyledView } from './styles';

const Cart = () => {
    const cart = useAppSelector(selectCart);

    return (
        <>
            {cart.length >= 1 ? (
                <CartProducts />
            ) : (
                <StyledView>
                    <StyledText>Não há itens no seu carrinho</StyledText>
                </StyledView>
            )}
        </>
    );
};

export default Cart;
