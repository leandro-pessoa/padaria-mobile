// funções
import { formattedPrice } from '../../../../utils/formattedPrice';

// componentes
import {
    StyledView,
    StyledImage,
    TextView,
    Title,
    Price,
    ButtonView,
} from '../../../../styles/Product/styles';
import React from 'react';
import AddProduct from './AddProduct';

// tipagens externas
import { IProduct } from '../../../../interfaces/IProduct';

const ProductView = ({ image, title, price }: IProduct) => {
    return (
        <StyledView>
            <StyledImage source={image} />
            <TextView>
                <Title>{title}</Title>
                <Price>{formattedPrice(price)}</Price>
            </TextView>
            <ButtonView>
                <AddProduct image={image} title={title} price={price} />
            </ButtonView>
        </StyledView>
    );
};

export default ProductView;
