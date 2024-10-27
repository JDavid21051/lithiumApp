import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import TimeAgo from '../../atoms/time-ago/time-ago';
import {cardStyles} from './card-style';
import {PokeDataModel} from '../../../core/models/app-poke.model';
import {TextAnimationStyle} from './text-animation.function';

export default function Card(props: PokeDataModel) {
    const [isPress, setIsPress] = useState(false);

    const handlePress = () => {
        if (props.onClick) props.onClick();
    };

    return (
        <Pressable style={cardStyles.card} onPress={() => handlePress()} onPressIn={() => setIsPress(true)}
                   onPressOut={() => setIsPress(false)}>
            <Image style={cardStyles.image} src={props.imageUrl}/>
            <View style={cardStyles.dataContainer}>
                <Text style={TextAnimationStyle(isPress)}>{props.title}</Text>
                <View style={cardStyles.authorContainer}>
                    <Text style={TextAnimationStyle(isPress)}>{props.publish_by}</Text>
                    <Text style={TextAnimationStyle(isPress)}>-</Text>
                    <TimeAgo date={props.publish_at} isPress={isPress}/>
                </View>
            </View>
        </Pressable>
    );
}

