// componentes
import React from 'react';
import { StyledSafeAreaView } from './styles/StyledSafeAreaView';
import { ThemeProvider } from 'styled-components';

// temas
import { darkTheme, lightTheme } from './components/Theme';

// funções
import { useAppSelector } from './features/hooks';

// states globais
import { selectTheme } from './features/reducers/general';
import ActionBar from './components/ActionBar';

const App = () => {
    const theme = useAppSelector(selectTheme);

    return (
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <StyledSafeAreaView>
                    <ActionBar />
                </StyledSafeAreaView>
            </ThemeProvider>
    );
};

export default App;
