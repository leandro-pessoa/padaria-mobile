// funções
import styled from 'styled-components/native';

// variaveis
import { variables, flex } from '../../variables';

const StyledView = styled.View`
    ${flex('row', 'space-between', 'center')}
    background-color: ${variables.blue};
    width: 100%;
    height: 70px;
    padding: 0 20px 0 20px;
`;

const Title = styled.Text`
    color: ${variables.white};
    font-size: 25px;
    font-family: ${variables.secondaryFont};
`;

export { StyledView, Title };
