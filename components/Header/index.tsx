// componentes
import { StyledView, Title } from './styles';
import React from 'react';
import ThemeButton from './ThemeButton';

const Header = () => {
    return (
        <StyledView>
            <Title>PadariaApp</Title>
            <ThemeButton />
        </StyledView>
    );
};

export default Header;
