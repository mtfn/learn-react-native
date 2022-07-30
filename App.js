import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainView from './src/main/MainView';
import SelectPollType from './src/create/SelectPollType';
import AddOptions from './src/create/AddOptions';
import OtherOptions from './src/create/OtherOptions';

import Plurality from './src/vote/Plurality';
import Ranked from './src/vote/Ranked';

const hOpts = { headerTintColor: '#d5d9e0' }

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer theme={{ colors: { background: '#0d1117' } }}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainView} options={{ headerShown: false }}/>
        <Stack.Screen name="Poll type" component={SelectPollType} options={hOpts} />
        <Stack.Screen name="Create poll" component={AddOptions} options={hOpts} />
        <Stack.Screen name="Other options" component={OtherOptions} options={hOpts} />

        <Stack.Screen name="Plurality poll" component={Plurality} options={hOpts} />
        <Stack.Screen name="Ranked poll" component={Ranked} options={hOpts} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}