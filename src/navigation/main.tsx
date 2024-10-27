import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NewsListScreen from '../screens/news/news-list.screen';
import EventsListScreen from '../screens/events/events-list.screen';

const Drawer = createDrawerNavigator();

export default function MainPage() {
    return (
        <Drawer.Navigator initialRouteName="Events">
            <Drawer.Screen name="Events" component={EventsListScreen} options={{
                               headerTitle: 'Eventos principales',
                           }}/>
            <Drawer.Screen name="News" component={NewsListScreen} options={{
                headerTitle: 'Noticias principales',
            }} />
        </Drawer.Navigator>
    );
}
