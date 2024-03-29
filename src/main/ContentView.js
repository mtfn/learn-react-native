import React from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from './styles/ContentView.style'

export default function ContentView(props) {

    return(
    <View style={styles.container}>
        <TextInput style={styles.input}
          autoCorrect={false}
          autoCompleteType="off"
          onSubmitEditing={props.onSubmit} />
        <Text style={styles.output}>Enter your poll code</Text>
      </View>);
}