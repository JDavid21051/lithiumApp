import React from 'react';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import MainPage from './src/navigation/main';
import {NavigationContainer} from '@react-navigation/native';

const theme = {
    ...DefaultTheme,
};

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider theme={theme}>
                <MainPage/>
            </PaperProvider>
        </NavigationContainer>
    );
}
