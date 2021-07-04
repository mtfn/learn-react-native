import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles/Connection.style'

export default function Connection() {
    const [isConnected, setConnected] = useState(false);

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
