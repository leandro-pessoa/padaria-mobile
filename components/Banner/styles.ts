// funções
import styled from 'styled-components/native';

// variáveis
import { variables, flex } from '../../variables';

const StyledImageBackground = styled.ImageBackground`
    ${flex('column', 'center', 'flex-start')}
    width: auto;
    height: 200px;
    padding: 20px;
`;

const StyledText = styled.Text`
    font-size: 25px;
    font-family: ${variables.terciaryFont};
    color: ${variables.white};
    text-shadow: 0px 0px 10px ${variables.shadowColor};
    width: 200px;
`;

export { StyledImageBackground, StyledText };
