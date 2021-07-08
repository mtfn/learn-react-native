import { StyleSheet } from 'react-native';
import header from './common/header';

export default StyleSheet.create(Object.assign({

    item: {
        borderColor: '#d5d9e0',
        borderWidth: 1,
        borderRadius: 5,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row'
    },

    textView: {
        marginLeft: '7%',
        width: '80%'
    },
    
    title: {
        color: '#d5d9e0',
        fontSize: 32,
    },

    description: {
        marginTop: '5%',
        color: '#d5d9e0'
    },

    image: {
        marginTop: 'auto',
        marginBottom: 'auto',
        height: 72,
        width: 50
    },
}, header));