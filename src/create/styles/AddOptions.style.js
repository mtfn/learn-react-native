import { StyleSheet } from 'react-native';

const submit = {
    borderWidth: 1,
    marginLeft: '25%',
    marginRight: '25%',
    padding: '1%',
    borderColor: 'limegreen',
    width: '50%',
    marginBottom: '10%'
}

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
    },

    submit: submit,

    submitDisabled: Object.assign({}, submit, {borderColor: 'lightcoral'}),

    submitText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#d5d9e0'
    }
});