// funções
import styled from 'styled-components/native';

// variaveis
import { variables } from '../../variables';

const StyledText = styled.Text`
    font-size: 20px;
    color: ${(props) => props.theme.colors.fontColor};
    margin: 20px;
    padding-left: 20px;
    font-family: ${variables.secondaryFont};
    border: 2px solid ${variables.primaryColor};
`;

const StyledFlatList = styled.FlatList`
    margin: 0 20px 0 20px;
`;

export { StyledFlatList, StyledText };
