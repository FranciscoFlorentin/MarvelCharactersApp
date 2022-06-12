import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen, LandingScreen } from '../screens';
import { MarvelCharacter } from '../interfaces/charactersInterface';
import { colors } from '../styles/colors';

export type StackParams={
  LandingScreen: undefined,
  DetailScreen: MarvelCharacter
}

const Stack = createNativeStackNavigator<StackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle:{
              backgroundColor:colors.red,
            },
            title:'',
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerTintColor:colors.black
        }}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  )
}
