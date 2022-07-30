import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import CenteredButton from '../common/CenteredButton';

export default function OtherOptions({ navigation }) {

    const onDone = () => {
        navigation.navigate('Home');
    }

    return (
    <View>
        <CenteredButton text='Done' onPress={onDone} />
        <TouchableOpacity>
            <Text>Require CAPTCHA</Text>
        </TouchableOpacity>
    </View>);
}