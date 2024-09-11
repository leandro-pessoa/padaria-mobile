// funções
import styled from 'styled-components/native';

const StyledSafeAreaView = styled.SafeAreaView`
    background-color: ${(props) => props.theme.colors.backgroundColor};
    height: 100vh;
    flex: 1;
`;

export { StyledSafeAreaView };
