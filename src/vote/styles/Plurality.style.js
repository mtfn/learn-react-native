import { StyleSheet } from "react-native";

export default StyleSheet.create({
    list: {
        marginBottom: '5%'
    },

    item: {
        borderWidth: 1,
        borderRadius: 5,
        padding: '3%',
        marginVertical: '2%',
        marginHorizontal: '2%',
    },

    selected: {
        borderColor: 'limegreen',
    },

    unselected: {
        borderColor: '#d5d9e0'
    },

    title: {
        textAlign: 'center',
        color: '#d5d9e0'
    },

    question: {
        fontSize: 32,
        textAlign: 'center',
        color: '#d5d9e0',
        marginBottom: '8%'
    }
});