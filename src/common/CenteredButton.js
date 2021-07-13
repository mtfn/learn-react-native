import React from 'react';
import { TouchableHighlight, Text, StyleSheet  } from 'react-native';

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        marginLeft: '25%',
        marginRight: '25%',
        padding: '1%',
        width: '50%',
        marginBottom: '10%'
    },

    enabled: {
        borderColor: 'limegreen'
    },

    disabled: {
        borderColor: 'lightcoral'
    },

    submitText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#d5d9e0'
    }
});

export default function CenteredButton({
    onPress = () => {},
    disabled = false,
    text = 'Click me',
    style = {} 
}) {

    return (
    <TouchableHighlight 
        onPress={onPress}
        disabled={disabled}
        style={[style, styles.button, disabled ? styles.disabled : styles.enabled]}
    >
        <Text style={styles.submitText}>{text}</Text>
    </TouchableHighlight>);
}