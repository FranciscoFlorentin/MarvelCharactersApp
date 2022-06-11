import { View, Text } from 'react-native'
import React from 'react'
import { useMarvelCharacters } from '../hooks/useMarvelCharacters'
import { MarvelCharacter } from '../interfaces/charactersInterface';
import { CharacterCard, StyledBackground,StyledFlatList } from '../components';

export const LandingScreen = () => {
  const {marvelCharacters,isLoading}= useMarvelCharacters();
  
  function renderMarvelCharacter(marvelCharacter:MarvelCharacter){
    return(
      <CharacterCard
        title={marvelCharacter.name}
      />
    )
  }
  return (
    <StyledBackground >
      <StyledFlatList
        horizontal
        data={marvelCharacters}
        keyExtractor={({id}:any)=>id}
        renderItem={({item}:any)=>renderMarvelCharacter(item)}
        ItemSeparatorComponent={()=><View style={{width:10}}/>}
        showsHorizontalScrollIndicator={false}
      />
    </StyledBackground>
  )
}

