// funções
import styled from 'styled-components/native';

// variaveis
import { variables } from '../../variables';

// tipagem dos props
interface CommonTextProps {
    readonly $color?: string;
}

const CommonText = styled.Text<CommonTextProps>`
    color: ${(props) =>
        props.$color
            ? props.$color === 'light'
                ? variables.white
                : variables.darkGray
            : props.theme.colors.fontColor};
    font-family: ${variables.primaryFont};
`;

export default CommonText;
