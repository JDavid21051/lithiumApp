import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {mainScreenStyles} from '../home/home.style';
import Card from '../../ui/molecules/card/card';
import {fetchEventData, useEventsData} from '../../core/stores/events/events-list.query';
import TextError from '../../ui/atoms/text-error/text-error';

const EventsListScreen = () => {
/*    const {mutate} = useMutation({
        mutationFn: () =>,
        onSuccess: (data) => {
            console.log(data);
            setData(data);
        },
        onError: (error) => {
            console.log(error);
            setLoading(false);
        },
    });*/
    const { data, error, isError } = useEventsData();

    useEffect(() => {
        console.log('isError',isError);
        console.log('data',data);
    }, []);
    return (
        <View style={mainScreenStyles.container}>
            <Text>Eventos principales</Text>
            {error && <TextError text={error.message} />}
            <FlatList
                data={data}
                ItemSeparatorComponent={() => <View style={{height: 10}}/>}
                renderItem={({item, index}) =>
                    <Card key={index} imageUrl={item.imageUrl} title={item.title}
                          url={item.url} type={item.type} publish_by={item.publish_by}
                          publish_at={item.publish_at}/>}
                keyExtractor={item => item.title}
            />
        </View>
    );
};
export default EventsListScreen;