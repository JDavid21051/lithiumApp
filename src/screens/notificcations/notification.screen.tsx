import {View} from 'react-native';
import {Text} from 'react-native-paper';
import React, {useEffect} from 'react';
import {NotificationScreenStyles} from './notification.style';
import Switch from '../../ui/molecules/switch/switch';
import useNotification from '../../core/hooks/useNotification';

export default function NotificationScreen() {
    const expoPushToken = useNotification()
    useEffect(() => {
        console.log(expoPushToken);
    }, []);

    return (
        <View style={NotificationScreenStyles.container}>
            <Text>Notificaciones</Text>
            <View style={NotificationScreenStyles.form}>
                <View style={NotificationScreenStyles.section}>
                    <Text>Notificaciones push</Text>
                    <Switch />
                </View>
            </View>
        </View>
    );
}
