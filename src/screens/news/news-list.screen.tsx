import React from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-paper';
import Card from '../../ui/molecules/card/card';
import {mainScreenStyles} from '../home/home.style';
import {MOCK_CARD_NEWS} from './news-mock';
export default function NewsListScreen() {
    return (
        <View style={mainScreenStyles.container}>
            <Text>Noticias principales</Text>
            <FlatList
                data={MOCK_CARD_NEWS}
                ItemSeparatorComponent={() => <View style={{height: 10}}/>}
                renderItem={({item, index}) =>
                    <Card key={index} imageUrl={item.imageUrl} title={item.title}
                          url={item.url} type={item.type} publish_by={item.publish_by}
                          publish_at={item.publish_at}/>}
                keyExtractor={item => item.title}
            />
        </View>
    );
}