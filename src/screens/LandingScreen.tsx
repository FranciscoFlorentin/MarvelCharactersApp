import { View, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import { useMarvelCharacters } from '../hooks/useMarvelCharacters'
import { MarvelCharacter } from '../interfaces/charactersInterface';
import { CharacterCard, StyledBackground } from '../components';
import StyledText from '../components/texts/StyledText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParams } from '../navigation/StackNavigator';
import { getCorrectUrl } from '../helpers/getCorrectUrl';
import { useSelector } from 'react-redux';

interface Props extends NativeStackScreenProps<StackParams,'LandingScreen'>{}

export const LandingScreen = ({route,navigation}:Props) => {
  const {marvelCharacters,isLoading}= useMarvelCharacters();
  const favouriteCharacters=useSelector((state:any)=>state.marvel.favouriteCharacters);
  
  /**
   * renderMarvelCharacter
   * This method render a singular marvel character card.
   * @param {MarvelCharacter} marvelCharacter
   * @param {boolean} isFavList only to know the dimensions of the card
   */
  function renderMarvelCharacter(marvelCharacter:MarvelCharacter,isFavList:boolean=false){
    let {path,extension}=marvelCharacter.thumbnail
    let imageUrl=getCorrectUrl(path+'.'+extension);
    return(
      <CharacterCard
        width={isFavList ? 100 : 250}
        height={isFavList ? 140 : 350}
        title={marvelCharacter.name}
        imageStyle={isFavList ?{ height:60,width:100}:{}}
        uri={imageUrl}
        onPress={()=>navigation.push('DetailScreen',marvelCharacter)}
      />
    )
  }
  return (
    <StyledBackground>
      <ScrollView style={{marginBottom:50}}>
        <StyledText paddingVertical={30} bold color='white' size={32}>Marvel Characters</StyledText>
        {
          isLoading
          ?
            <View style={{height:300,justifyContent:'center'}}>
              <ActivityIndicator color={'yellow'} size='large'/>
            </View>
          :
            <FlatList
              horizontal
              data={marvelCharacters}
              keyExtractor={({id}:any,index)=>id+index.toString()}
              renderItem={({item}:any)=>renderMarvelCharacter(item)}
              ItemSeparatorComponent={()=><View style={{width:10}}/>}
              showsHorizontalScrollIndicator={false}
            />
        }
        <StyledText paddingVertical={30} bold color='white' size={32}>Favourite Characters</StyledText>
        <FlatList
          horizontal
          data={favouriteCharacters}
          keyExtractor={({id}:any,index)=>index.toString()+id}
          renderItem={({item}:any)=>renderMarvelCharacter(item,true)}
          ItemSeparatorComponent={()=><View style={{width:10}}/>}
          showsHorizontalScrollIndicator={false}
        />
        {
          favouriteCharacters.length==0 ?
          <StyledText >You don't have any favourite character. You can add one in his profile card</StyledText>
          : null
        }
      </ScrollView>
      
    </StyledBackground>
  )
}

