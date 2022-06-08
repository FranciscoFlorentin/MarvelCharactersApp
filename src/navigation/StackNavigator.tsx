import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen, LandingScreen } from '../screens';

export type StackParams={
    Landing: undefined,
    DetailScreen: undefined
}

const Stack = createNativeStackNavigator<StackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
        }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  )
}
