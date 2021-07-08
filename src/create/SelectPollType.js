import React from 'react';
import { View, Text, Image, FlatList, TouchableHighlight } from 'react-native';

import rankedIcon from '../../assets/ranked.png'
import approvalIcon from '../../assets/approval.png'
import pluralityIcon from '../../assets/plurality.png'

import styles from './styles/SelectPollType.style'

const list = [
    {
      id: 'b7fcd',
      title: 'Instant-runoff',
      description: 'Voters rank their favorites, losers are eliminated in multiple rounds. Losers\' votes follow the ranking.\n\nVote third party, guilt-free.',
      image: rankedIcon,
    },
    {
      id: '1ca5f',
      title: 'Approval',
      description: 'Voters select multiple options, most votes wins.\n\nFind the most okay option.',
      image: approvalIcon
    },
    {
      id: 'e3647',
      title: 'Plurality',
      description: 'Voters select one option, most votes wins.\n\nPlain and simple.',
      image: pluralityIcon
    },
];

export default function SelectPollType({ navigation }) {

    const renderItem = ({ item }) => (
      <TouchableHighlight onPress={() => { navigation.navigate('Create poll') }}><View style={styles.item}>

        <Image source={item.image} style={styles.image} />

        <View style={styles.textView}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        </View></TouchableHighlight>
    );

    return (
    <View style={styles.container}>
        <Text style={styles.question}>Choose your favorite:</Text>
        <FlatList
            data={list}
            renderItem={renderItem}
        />
    </View>);
}