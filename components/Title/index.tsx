// componentes
import { StyledText } from './styles';
import React from 'react';

// tipagem dos props
interface TitleProps {
    children: string;
}

const Title = ({ children }: TitleProps) => {
    return <StyledText>{children}</StyledText>;
};

export default Title;
