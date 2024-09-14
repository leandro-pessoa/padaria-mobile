// funções
import { formattedPrice } from '../../../../utils/formattedPrice';

// componentes
import {
    ButtonView,
    Price,
    StyledImage,
    StyledView,
    TextView,
    Title,
} from '../../../../styles/Product/styles';
import RemoveButton from './RemoveButton';
import React from 'react';

// tipagens externas
import { IProduct } from '../../../../interfaces/IProduct';

const CartProduct = ({ id, image, title, price }: IProduct) => {
    return (
        <StyledView>
            <StyledImage source={image} />
            <TextView>
                <Title>{title}</Title>
                <Price>{formattedPrice(price)}</Price>
            </TextView>
            <ButtonView>
                <RemoveButton id={id} />
            </ButtonView>
        </StyledView>
    );
};

export default CartProduct;
