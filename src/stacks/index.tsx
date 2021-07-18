import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import NewCity from '../screens/NewCity';
import DeleteCity from '../screens/DeleteCity';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Home"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFF'
        }
      }}
    >
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="NewCity" component={NewCity}></Stack.Screen>
      <Stack.Screen name="DeleteCity" component={DeleteCity}></Stack.Screen>
    </Stack.Navigator>
);