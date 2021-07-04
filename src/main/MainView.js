import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ContentView from './ContentView';
import Connection from './Connection';

import styles from './styles/MainView.style'

export default function MainView({ navigation }) {

    return (
    <View style={styles.main}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.newButton} onPress={() => navigation.navigate('Poll type')}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Create poll</Text>
        </View>

        <ContentView />
        <Connection />
    </View>);
}