// componentes
import { TouchableHighlight } from 'react-native';
import { StyledView } from './styles';
import React from 'react';
import { Link, useLocation } from 'react-router-native';

// ícones
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const NavBar = () => {
    const { pathname } = useLocation();

    return (
        <StyledView>
            <TouchableHighlight>
                <Link to="/" underlayColor="transparent">
                    <MaterialCommunityIcon
                        name={pathname === '/' ? 'home' : 'home-outline'}
                        size={30}
                        color="#fff"
                    />
                </Link>
            </TouchableHighlight>
            <TouchableHighlight>
                <Link to="/cart" underlayColor="transparent">
                    <MaterialCommunityIcon
                        name={pathname === '/cart' ? 'cart' : 'cart-outline'}
                        size={30}
                        color="#fff"
                    />
                </Link>
            </TouchableHighlight>
        </StyledView>
    );
};

export default NavBar;
