// componentes
import { TouchableHighlight } from 'react-native';
import { StyledView } from './styles';
import React from 'react';
import { Link, useLocation } from 'react-router-native';

// ícones
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const NavBar = () => {
    const { pathname } = useLocation();

    return (
        <StyledView>
            <TouchableHighlight>
                <Link to="/">
                    <MaterialIcon
                        name={pathname === '/' ? 'home' : 'google-home'}
                        size={30}
                        color="#fff"
                    />
                </Link>
            </TouchableHighlight>
            <TouchableHighlight>
                <MaterialIcon
                    name="add-circle-outline"
                    size={30}
                    color="#fff"
                />
            </TouchableHighlight>
            <TouchableHighlight>
                <Link to="/cart">
                    <MaterialCommunityIcon
                        name="cart-outline"
                        size={30}
                        color="#fff"
                    />
                </Link>
            </TouchableHighlight>
        </StyledView>
    );
};

export default NavBar;
