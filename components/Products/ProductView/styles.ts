// funções
import styled from 'styled-components/native';

// variaveis
import { flex, variables } from '../../../variables';

const StyledView = styled.View`
    position: relative;
    ${flex('row', 'auto', 'center')}
    margin-bottom: 25px;
`;

const StyledImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 5px;
    margin-right: 20px;
`;

const TextView = styled.View``;

const Title = styled.Text`
    font-size: 22px;
    font-family: ${variables.terciaryFont};
    color: ${variables.primaryColor};
`;

const Price = styled.Text`
    color: ${(props) => props.theme.colors.fontColor};
    background-color: ${variables.primaryColor};
    font-family: ${variables.primaryFont};
    color: ${variables.white};
    border-radius: 5px;
    width: 80px;
    text-align: center;
    padding: 3px 0 3px 0;
    font-size: 15px;
`;

const ButtonView = styled.View`
    position: absolute;
    right: 0;
`;

export {
    StyledView,
    StyledImage,
    TextView,
    Title,
    Price,
    ButtonView,
};
