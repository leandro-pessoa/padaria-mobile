// componentes
import { StyledImageBackground, StyledText } from './styles';
import React from 'react';

const Banner = () => {
    return <StyledImageBackground source={require('../../../assets/images/banner.jpg')} >
        <StyledText>
            App Perfeito para as suas compras
        </StyledText>
    </StyledImageBackground>;
};

export default Banner;
