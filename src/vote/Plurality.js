import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

import CenteredButton from '../common/CenteredButton';

import styles from './styles/Plurality.style';

const initData = [
    {
        id: 'a',
        text: 'a',
        selected: false
    },

    {
        id: 'b',
        text: 'b',
        selected: false
    },

    {
        id: 'c',
        text: 'c',
        selected: false
    },

    {
        id: 'd',
        text: 'd',
        selected: false
    }
];

export default function Plurality() {

    const [data, setData] = useState(initData);

    const [allowSubmit, setAllowSubmit] = useState(false);
    const checkSubmittable = (data) => {
        setAllowSubmit(data.some(obj => obj.selected));
    }

    const select = (id) => {
        setData(prev => {
            const newData = prev.map(obj => {
                obj.selected = (obj.id === id);
                return obj;
            });

            checkSubmittable(newData);
            return newData;
        });
        setAllowSubmit(true);
    }

    const approvalSelect = (id) => {
        setData(prev => {
            const newData = prev.map(obj => {
                if(id === obj.id) {
                    obj.selected = !obj.selected;
                }
                return obj;
            });

            checkSubmittable(newData);
            return newData;
        });
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { approvalSelect(item.id) }}>
            <View style={[styles.item, item.selected ? styles.selected : styles.unselected]}>
                <Text style={styles.title}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
    <View>
        <Text style={styles.question}>Choose one:</Text>
        <FlatList
            renderItem={renderItem}
            data={data}
            style={styles.list}>
        </FlatList>

        <CenteredButton disabled={!allowSubmit} text="Vote" />
    </View>);
}