import { View } from 'react-native'
import React from 'react'
import StyledText from '../texts/StyledText'
interface Props{
    title:string
    data: any[]
}
const StyledSectionList = ({title,data}:Props) => {
  return (
    <View style={{paddingVertical:10,paddingHorizontal:5}}>
        <StyledText paddingVertical={5} size={20} color='yellow' bold position='center'>{title}</StyledText>
            {
                data.map(({name},index)=><StyledText key={name+index} paddingVertical={5}  position='left'>* {name}</StyledText>)
            }
    </View>
  )
}

export default StyledSectionList