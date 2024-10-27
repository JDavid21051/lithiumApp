import React from 'react';
import {View, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {mainScreenStyles} from '../home/home.style';
import Card from '../../ui/atoms/card/card';
import {MOCK_CARD_DATA} from './evets-mock';

const EventsListScreen = () => (
    <View style={mainScreenStyles.container}>
        <Text>Eventos principales</Text>
        <FlatList
            data={MOCK_CARD_DATA}
            ItemSeparatorComponent={() => <View style={{height: 10}}/>}
            renderItem={({item, index}) =>
                <Card key={index} imageUrl={item.imageUrl} title={item.title}
                      url={item.url} type={item.type} publish_by={item.publish_by}
                      publish_at={item.publish_at}/>}
            keyExtractor={item => item.title}
        />
    </View>
);
export default EventsListScreen;