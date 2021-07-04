import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Connection() {

    const [isConnected, setConnected] = useState(false);

    const styles = StyleSheet.create({
        main: {
            marginTop: '15%',
            height: '30%'
        },

        text: {
            color: '#d5d9e0',
            textAlign: 'center',
            fontSize: 20
        },

        button: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%',
        }
    });

    return (
    <View style={styles.main}>
        <Text style={styles.text}>
            Network status: {isConnected ? 'Connected' : 'Not connected'}
        </Text>
        <View style={styles.button}>
            <Button onPress={() => {setConnected(!isConnected)}} title={isConnected ? 'Disconnect' : 'Connect'} />
        </View>
    </View>);
}
