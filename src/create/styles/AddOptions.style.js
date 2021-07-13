import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    item: {
        borderColor: '#d5d9e0',
        borderWidth: 1,
        borderRadius: 5,
        padding: '3%',
        marginVertical: '2%',
        marginHorizontal: '2%',
    },

    title: {
        color: '#d5d9e0',
        fontSize: 12,
    },

    input: {
        height: 48,
        margin: '2%',
        borderWidth: 1,
        borderColor: '#d5d9e0',
        borderRadius: 10,
        color: '#d5d9e0',
        paddingLeft: '2%',
        paddingRight: '2%',
        marginTop: '5%'
    },

    keyboardAvoidingView: {
        marginTop: '5%',
        justifyContent: 'flex-end'
    },

    list: {
        height: '80%'
    }
});