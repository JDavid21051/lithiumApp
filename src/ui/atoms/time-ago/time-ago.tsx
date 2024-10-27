import {differenceInDays, differenceInHours, differenceInMinutes, differenceInYears} from 'date-fns';
import {Text} from 'react-native';
import React from 'react';
import {TextAnimationStyle} from '../card/text-animation.function';

export default function TimeAgo({ date, isPress }: { date: string, isPress: boolean }) {
    const now = new Date();
    const minutes = differenceInMinutes(now, date);
    const hours = differenceInHours(now, date);
    const days = differenceInDays(now, date);
    const years = differenceInYears(now, date);

    if (minutes < 60) {
        return <Text style={TextAnimationStyle(isPress)}>Hace {minutes} minuto{minutes !== 1 ? 's' : ''}</Text>;
    } else if (hours < 24) {
        return <Text style={TextAnimationStyle(isPress)}>Hace {hours} hora{hours !== 1 ? 's' : ''}</Text>;
    } else if (days < 365) {
        return <Text style={TextAnimationStyle(isPress)}>Hace {days} día{days !== 1 ? 's' : ''}</Text>;
    } else {
        return <Text style={TextAnimationStyle(isPress)}>Hace {years} año{years !== 1 ? 's' : ''}</Text>;
    }
};