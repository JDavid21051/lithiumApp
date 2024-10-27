import React from 'react';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import MainPage from './src/navigation/main';
import {NavigationContainer} from '@react-navigation/native';
import {LithiumConfigProvider} from './src/core/context/environment.context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const theme = {
    ...DefaultTheme,
};

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <PaperProvider theme={theme}>
                    <LithiumConfigProvider>
                        <MainPage/>
                    </LithiumConfigProvider>
                </PaperProvider>
            </NavigationContainer>
        </QueryClientProvider>
    );
}
