import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#d5d9e0',
        textAlign: 'center',
        marginBottom: '3%'
    },

    list: {
        height: '75%'
    },

    item: {
        borderWidth: 1,
        borderColor: '#d5d9e0',
        borderRadius: 5,
        marginBottom: '1%',
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    itemDragged: {
        backgroundColor: '#d5d9e0'
    },

    label: {
        color: '#d5d9e0',
        fontSize: 24,
    },

    labelDragged: {
        color: '#0d1117'
    }
});