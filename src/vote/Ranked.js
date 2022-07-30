import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

import CenteredButton from '../common/CenteredButton';

import styles from './styles/Ranked.style';

const exampleData = [
    {
        id: 'a',
        text: 'Discord.js'
    },

    {
        id: 'b',
        text: 'jQuery'
    },

    {
        id: 'c',
        text: 'React'
    },

    {
        id: 'd',
        text: 'Socket.IO'
    }
];

export default function Ranked({ navigation }) {
  const [data, setData] = useState(exampleData);

  const renderItem = useCallback(
    ({ item, drag, isActive }) => {
        const itemStyle = isActive ? [styles.item, styles.itemDragged] : styles.item;
        const textStyle = isActive ? [styles.label, styles.labelDragged] : styles.label;

      return (
        <TouchableOpacity style={itemStyle} onLongPress={drag} delayLongPress={100}>
          <Text style={textStyle}>{item.text}</Text>
        </TouchableOpacity>
      );
    },
    []
  );

  return (
    <View style={{ flex: 1 }}>
        <Text style={styles.title}>Drag your favorites to the top</Text>
        <CenteredButton text="Submit" onPress={() => {navigation.navigate('Home')}} />

        <DraggableFlatList
            data={data}
            renderItem={renderItem}
            containerStyle={styles.list}
            keyExtractor={(item, index) => item.id}
            onDragEnd={({ data }) => setData(data)}
        />
    </View>
  );
}
