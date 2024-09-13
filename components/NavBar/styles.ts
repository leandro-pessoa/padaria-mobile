// funções
import styled from 'styled-components/native';

// variávies
import { variables, flex } from '../../variables';

const StyledView = styled.View`
    ${flex('row', 'space-around')}
    position: fixed;
    background-color: ${variables.primaryColor};
    padding: 15px;
`;

export { StyledView };
