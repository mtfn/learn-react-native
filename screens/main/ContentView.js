import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
export default function ContentView() {

    const styles = StyleSheet.create({
        container: {
            marginTop: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          },

          input: {
              color: '#d5d9e0',
              borderWidth: 2,
              borderColor: '#d5d9e0',
              borderRadius: 3,
              width: '75%',
              height: 50,
              paddingLeft: '2%',
              paddingRight: '2%',
              textAlign: 'center',
              fontSize: 25
          },

          output: {
              color: '#d5d9e0'
          }
    });

    return(
    <View style={styles.container}>
        <TextInput style={styles.input} autoCorrect={false} autoCompleteType="off" />
        <Text style={styles.output}>Enter your poll code</Text>
      </View>);
}