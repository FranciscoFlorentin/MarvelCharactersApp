import { View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { useMarvelCharacters } from '../hooks/useMarvelCharacters'
import { MarvelCharacter } from '../interfaces/charactersInterface';
import { CharacterCard, StyledBackground } from '../components';
import StyledText from '../components/texts/StyledText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParams } from '../navigation/StackNavigator';
import { getCorrectUrl } from '../helpers/getCorrectUrl';

interface Props extends NativeStackScreenProps<StackParams,'LandingScreen'>{}

export const LandingScreen = ({route,navigation}:Props) => {
  const {marvelCharacters,isLoading}= useMarvelCharacters();

  /**
   * renderMarvelCharacter
   * This method render a singular marvel character card.
   * @param {MarvelCharacter} marvelCharacter
   */
  function renderMarvelCharacter(marvelCharacter:MarvelCharacter){
    let {path,extension}=marvelCharacter.thumbnail
    let imageUrl=getCorrectUrl(path+'.'+extension);
    return(
      <CharacterCard
        width={250}
        height={350}
        title={marvelCharacter.name}
        uri={imageUrl}
        onPress={()=>navigation.push('DetailScreen',marvelCharacter)}
      />
    )
  }
  function renderFavouriteCharacter(marvelCharacter:MarvelCharacter){
    let {path,extension}=marvelCharacter.thumbnail
    let imageUrl=getCorrectUrl(path+'.'+extension);
    return(
      <CharacterCard
        width={100}
        height={140}
        title={marvelCharacter.name}
        uri={imageUrl}
        imageStyle={{height:60,width:100}}
        onPress={()=>navigation.push('DetailScreen',marvelCharacter)}
      />
    )
  }
  return (
    <StyledBackground>
      <ScrollView style={{marginBottom:50}}>
        <StyledText paddingVertical={30} bold color='white' size={32}>Marvel Characters</StyledText>
        <FlatList
          horizontal
          data={marvelCharacters}
          keyExtractor={({id}:any)=>id}
          renderItem={({item}:any)=>renderMarvelCharacter(item)}
          ItemSeparatorComponent={()=><View style={{width:10}}/>}
          showsHorizontalScrollIndicator={false}
        />
        <StyledText paddingVertical={30} bold color='white' size={32}>Favourite Characters</StyledText>
        <FlatList
          horizontal
          data={marvelCharacters}
          keyExtractor={({id}:any)=>id}
          renderItem={({item}:any)=>renderFavouriteCharacter(item)}
          ItemSeparatorComponent={()=><View style={{width:10}}/>}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
      
    </StyledBackground>
  )
}

