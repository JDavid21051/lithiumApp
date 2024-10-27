import {TextStyle, ViewStyle, ImageStyle} from 'react-native';

export const cardStyles: { card: ViewStyle, dataContainer: ViewStyle, authorContainer: ViewStyle, image: ImageStyle, title: TextStyle, text: TextStyle, highlight: TextStyle } = {
    card: {
        backgroundColor: 'transparent',
        position: 'relative',
        width: '100%',
        minHeight: 250,
        borderRadius: 12,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'white',
    },
    dataContainer: {
        padding: 12,
        width: '100%',
        minHeight: 8,
        backgroundColor: 'rgba(0,0,0,0.85)',
        marginTop: 'auto',
        borderBottomEndRadius: 12,
        borderBottomStartRadius: 12,
        borderTopEndRadius: 0,
        borderTopStartRadius: 0,
    },
    authorContainer: {
        flexDirection: 'row',
        gap: 4,
        marginTop: 4
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        minHeight: 250,
        borderRadius: 12,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 24,
        color: 'white',
    },
    highlight: {
        color: '#2172cf',
        fontSize: 20,
        fontWeight: 'bold',
    }
};