import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import styled, { ThemeProvider } from 'styled-components/native';
import { AppRouter } from './router/app.router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { theme } from './styles/theme';

const SafeAreaView = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
`;

export function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={theme.colors.primary}
          />
          <NavigationContainer
            theme={{
              ...DefaultTheme,
              colors: {
                ...DefaultTheme.colors,
                background: theme.colors.primary,
              },
            }}>
            <AppRouter />
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
