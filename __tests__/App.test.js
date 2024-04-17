import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Screen from '../screen';
import { LoaderProvider } from '../hooks/LoaderProvider';
import { AuthProvider } from '../hooks/AuthProvider';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('App Component', () => {
  it('renders without crashing', () => {
    const component = (
      <LoaderProvider>
      <AuthProvider>
        <Provider store={store}>
          <NavigationContainer test-id="navigation-container">
            <Screen testID="screen-component" />
          </NavigationContainer>
        </Provider>
      </AuthProvider>
    </LoaderProvider>
    )
    render(component);
  });
});
