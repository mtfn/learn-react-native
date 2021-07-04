import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ContentView from './ContentView';
import Connection from './Connection';
export default function MainView({ navigation }) {
    const styles = StyleSheet.create({
        main: {
            height: '100%',
            backgroundColor: '#0d1117'
        },

        newButton: {
            justifyContent: 'center',
            width: 70,
            height: 70,
            borderRadius: 50,
            backgroundColor: 'limegreen'
        },

        buttonText: {
            fontSize: 50,
            textAlign: 'center',
            color: 'white'
        },

        header: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20%',
            flexDirection: 'row'
        },
        
        title: {
            marginLeft: 20,
            fontSize: 30,
            color: '#d5d9e0'
        }
    });

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