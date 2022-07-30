import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ContentView from './ContentView';

import styles from './styles/MainView.style'

export default function MainView({ navigation }) {

    const enterPoll = () => {
        navigation.navigate('Ranked poll');
    }

    return (
    <View style={styles.main}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.newButton} onPress={() => navigation.navigate('Poll type')}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Create poll</Text>
        </View>

        <ContentView onSubmit={enterPoll} />
    </View>);
}