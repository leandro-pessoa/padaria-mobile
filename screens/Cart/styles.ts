// funções
import styled from 'styled-components/native';

// variáveis
import { variables, flex } from '../../variables';

const StyledView = styled.View`
    ${flex('row', 'center', 'center')}
    flex: 1;
`;

const StyledText = styled.Text`
    color: ${(props) => props.theme.colors.fontColor};
    font-size: 25px;
    font-family: ${variables.terciaryFont};
    border: 2px solid ${variables.primaryColor};
    padding: 5px 10px;
`;

export { StyledText, StyledView };
