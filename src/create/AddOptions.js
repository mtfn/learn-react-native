import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, FlatList, KeyboardAvoidingView, TextInput } from 'react-native';
import uuid from 'react-native-uuid';

import styles from './styles/AddOptions.style'

export default function AddOptions() {
    const [ data, setData ] = useState([]);
    const [ text, setText ] = useState('');

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            setData(prev => prev.filter(x => x.id !== item.id));
        }}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );

    const textInput = useRef(null);
    const onSubmit = () => {
        const newItem = {
            text: text,
            id: uuid.v4()
        }
        setData(prev => [...prev, newItem]);
        textInput.current.clear();
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.select({ ios: 'padding' })}
            style={styles.keyboardAvoidingView}
        >
            
            <TouchableOpacity disabled={data.length < 2} style={data.length > 1 ? styles.submit : styles.submitDisabled}>
                <Text style={styles.submitText}>Done</Text>
            </TouchableOpacity>
            
            <FlatList
                style={styles.list}
                contentContainerStyle={{}} 
                data={data}
                extraData={data}
                renderItem={renderItem}
            />

            <TextInput
                style={styles.input}
                ref={textInput}
                onChangeText={setText}
                onSubmitEditing={onSubmit}
            />

        </KeyboardAvoidingView>
    );
}