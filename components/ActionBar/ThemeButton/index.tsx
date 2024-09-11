// componentes
import { TouchableOpacity, View } from 'react-native';
import React from 'react';

// icones
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

// states globais
import { selectTheme } from '../../../features/reducers/general';

// funções
import { useAppDispatch, useAppSelector } from '../../../features/hooks';

// actions
import { toggleTheme } from '../../../features/reducers/general';

const ThemeButton = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);

    return (
        <View>
            <TouchableOpacity onPress={() => dispatch(toggleTheme())}>
                {theme === 'light' ? (
                    <MaterialIcon name="light-mode" size={30} color="#fff" />
                ) : (
                    <MaterialIcon name="dark-mode" size={30} color="#fff" />
                )}
            </TouchableOpacity>
        </View>
    );
};

export default ThemeButton;
