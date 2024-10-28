import {StyleSheet} from 'react-native';

export const NotificationScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 16,
        paddingHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    form: {
        padding: 16,
        width: '100%',
    },
    section: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 8,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#c3c3c3',
    }
});