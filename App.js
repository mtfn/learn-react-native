import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainView from './screens/main/MainView';
import CreateView from './screens/create/CreateView';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer theme={{ colors: { background: '#0d1117' } }}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainView} options={{ headerShown: false }}/>
        <Stack.Screen name="Create" component={CreateView} options={{ headerTintColor: '#d5d9e0' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}