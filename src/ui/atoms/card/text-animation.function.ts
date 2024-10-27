import {cardStyles} from './card-style';

export const TextAnimationStyle = (isPress: boolean) => {
    return {...cardStyles.title, ...(isPress ? cardStyles.highlight : {})}
}