import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import styles from './styles/AddOptions.style'
  
export default function AddOptions() {

    return (
    <View style={styles.container}>
        <Text style={styles.question}>Time to make your poll:</Text>
    </View>);
}