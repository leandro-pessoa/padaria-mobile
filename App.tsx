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
import Header from './components/Header';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Products from './components/Products';

const App = () => {
    const theme = useAppSelector(selectTheme);

    return (
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <StyledSafeAreaView>
                    <Header />
                    <Banner />
                    <Products />
                    <NavBar />
                </StyledSafeAreaView>
            </ThemeProvider>
    );
};

export default App;
