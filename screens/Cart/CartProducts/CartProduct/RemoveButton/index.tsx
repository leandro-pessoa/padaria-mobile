// funções
import { useAppDispatch } from '../../../../../features/hooks';

// componentes
import { StyledToucheableHighlight } from './styles';
import React from 'react';

// ícones
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// actions
import { removeProductFromCart } from '../../../../../features/reducers/product';

// tipagem dos props
interface RemoveButtonProps {
    id: string | number[];
}

const RemoveButton = ({ id }: RemoveButtonProps) => {
    const dispatch = useAppDispatch();

    return (
        <StyledToucheableHighlight
            onPress={() => dispatch(removeProductFromCart(id))}
            underlayColor={'transparent'}
        >
            <MaterialCommunityIcon name="close" size={30} color="#fff" />
        </StyledToucheableHighlight>
    );
};

export default RemoveButton;
