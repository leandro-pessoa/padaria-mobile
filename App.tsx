// componentes
import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { StyledSafeAreaView } from './styles/StyledSafeAreaView';

// store
import { store } from './features/store';

const App = () => {
    return (
        <Provider store={store}>
          <StyledSafeAreaView>
              <Text>Hello world!</Text>
          </StyledSafeAreaView>
        </Provider>
    );
};

export default App;
