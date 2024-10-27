import {View} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
import {mainScreenStyles} from './home.style';

export default function HomePage() {
    return (
        <View style={mainScreenStyles.container}>
            <Text>Home </Text>
        </View>
    );
}
