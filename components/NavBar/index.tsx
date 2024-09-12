// componentes
import { TouchableHighlight } from 'react-native';
import { StyledView } from './styles';
import React from 'react';

// ícones
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const NavBar = () => {
    return (
        <StyledView>
            <TouchableHighlight>
                <MaterialIcon name="home" size={30} color="#fff" />
            </TouchableHighlight>
            <TouchableHighlight>
                <MaterialIcon name="add-circle-outline" size={30} color="#fff" />
            </TouchableHighlight>
            <TouchableHighlight>
                <MaterialCommunityIcon name="cart-outline" size={30} color="#fff" />
            </TouchableHighlight>
        </StyledView>
    );
};

export default NavBar;
