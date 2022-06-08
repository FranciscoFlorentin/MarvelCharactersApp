import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useMarvelCharacters } from '../hooks/useMarvelCharacters'

export const LandingScreen = () => {
  const {marvelCharacters,isLoading}= useMarvelCharacters();
  if(isLoading){
    return (
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator color='red' size={100}/>
        </View>
    )
  }
  return (
    <View>
      <Text>{marvelCharacters.length}</Text>
      <Text>{marvelCharacters.length}</Text>
      <Text>{marvelCharacters.length}</Text>
      
    </View>
  )
}

