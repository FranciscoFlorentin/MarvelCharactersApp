import { View, Text, FlatList } from 'react-native'
import React from 'react'
import StyledText from '../texts/StyledText'
import { MarvelCharacter } from '../../interfaces/charactersInterface';
interface Props{
	title: string
	data : MarvelCharacter[]
	renderItem: (item:any)=>void
}
const StyledFlatList = ({title,data,renderItem}:Props) => {
  return (
	<View>
		<StyledText paddingVertical={30} bold color='white' size={32}>
			{title}
		</StyledText>
		<FlatList
			horizontal
			data={data}
			keyExtractor={({id}:any)=>id}
			renderItem={renderItem}
			ItemSeparatorComponent={()=><View style={{width:10}}/>}
			showsHorizontalScrollIndicator={false}
		/>
	</View>
  )
}

export default StyledFlatList
