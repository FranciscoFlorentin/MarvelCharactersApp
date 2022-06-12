import { View, Text, StyleSheet, Image, ImageBackground, StyleSheetProperties, ImageStyle } from 'react-native'
import React from 'react'
import { StyledCard } from './StyledCard'
import StyledText from '../texts/StyledText'
import { colors } from '../../styles/colors'
import StyledSectionList from '../lists/StyledSectionList'

interface CharacterCardProps{
    title ?: string,
    uri?: string,
    description?: string|null,
    onPress ?: ()=>void,
    width : number,
    height : number,
    cardStyle?: any,
    imageStyle ?: ImageStyle
}

export const CharacterCard = ({cardStyle,title,uri,description,onPress,width,height,imageStyle}:CharacterCardProps) => {
    return (
        <StyledCard
            width={width}
            height={height}
            onPress={onPress}
            style={cardStyle}
        >
            <View style={[styles.imageContainer,{...imageStyle}]}>
                <ImageBackground
                    imageStyle={{width:'100%',height:210,...imageStyle}}
                    source={{uri}}
                    resizeMode={'stretch'}
                    />
            </View>
            <View style={styles.textsContainer}>
                <StyledText color='white' position='left'>{title}</StyledText>
                {
                    (description && description!='') && 
                    <StyledText color='white' position='left'>{description}</StyledText>
                }
            </View>
        </StyledCard>
    )
}

const styles= StyleSheet.create({
    imageContainer: {
        height:'60%',
        width:'100%',
        backgroundColor:'white'
    },
    textsContainer:{
        backgroundColor:colors.black,
        justifyContent:'space-evenly',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopWidth:6,
        borderColor: colors.orange,
    }
})

