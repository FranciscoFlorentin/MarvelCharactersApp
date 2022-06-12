import { View, Text, ScrollView, Dimensions, ImageBackground, Image } from 'react-native'
import React from 'react'
import { StackParams } from '../navigation/StackNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CharacterCard, StyledBackground } from '../components'
import { getCorrectUrl } from '../helpers/getCorrectUrl'
import StyledText from '../components/texts/StyledText'
import StyledSectionList from '../components/lists/StyledSectionList'
import { StyledButton } from '../components/buttons/StyledButton'
import { useDispatch, useSelector } from 'react-redux';
import { addFavCharacter, removeFavCharacter } from '../redux/reducers/marvelReducer'
import { MarvelCharacter } from '../interfaces/charactersInterface';

interface Props extends NativeStackScreenProps<StackParams,'DetailScreen'>{}

export const DetailScreen = ({route,navigation}:Props) => {
  const favouriteCharacters=useSelector((state:any)=>state.marvel.favouriteCharacters);
  const dispatch=useDispatch();
  let {name,thumbnail,comics,events,stories,series,description} = route.params;
  let imageUrl= getCorrectUrl(thumbnail.path+'.'+thumbnail.extension)
  function isCharacterInFavList(){
    return favouriteCharacters.find((character:MarvelCharacter)=>character.id==route.params.id)
  }
  return (
    <StyledBackground>
      <ScrollView style={{marginBottom:40}}>
        <StyledText bold size={30} paddingVertical={10} color='yellow' position='center'>{name}</StyledText>
        <Image
          style={{width:'100%',height:400}}
          source={{uri:imageUrl}}
          resizeMode={'stretch'}
          />
        <StyledText paddingVertical={10} position='center'>{description}</StyledText>
        <StyledButton 
          text={isCharacterInFavList() ?'Remove from fav':'Add to fav'} 
          onPress={()=>
            isCharacterInFavList() 
            ? dispatch(removeFavCharacter(route.params))
            : dispatch(addFavCharacter(route.params))}/>
        {comics?.items?.length ? <StyledSectionList title='Comics' data={comics.items}/> : null}
        {series?.items?.length ? <StyledSectionList title='Series' data={series.items}/> : null}
        {stories?.items?.length ? <StyledSectionList title='Stories' data={stories.items}/> : null }
        {events?.items?.length ? <StyledSectionList title='Events' data={events.items}/>: null}
      </ScrollView>
    </StyledBackground>
  )
}