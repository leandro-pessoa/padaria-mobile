// funções
import styled from 'styled-components/native';

// variáveis
import { flex, variables } from '../../../variables';

const StyledFlatList = styled.FlatList`
    margin: 20px;
`;

const StyledToucheableHighlight = styled.TouchableHighlight`
    ${flex('row', 'center')}
    background-color: ${variables.primaryColor};
    margin: 20px;
    padding: 5px;
`;

const StyledText = styled.Text`
    color: ${variables.white};
    font-size: 20px;
`;

export { StyledFlatList, StyledToucheableHighlight, StyledText };
