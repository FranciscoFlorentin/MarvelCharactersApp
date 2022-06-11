import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StyledCard } from './StyledCard'
import StyledText from '../texts/StyledText'
import { colors } from '../../styles/colors'

interface CharacterCardProps{
    title ?: string,

}

export const CharacterCard = ({title}:CharacterCardProps) => {
    return (
        <StyledCard>
            <View style={styles.imageContainer}>

            </View>
            <View style={styles.textsContainer}>
                <StyledText color='white' position='left'>{title}</StyledText>
                <StyledText color='white' position='left'>{title}</StyledText>
            </View>
        </StyledCard>
    )
}

const styles= StyleSheet.create({
    imageContainer: {
        height:'60%',
        backgroundColor:'white'
    },
    textsContainer:{
        backgroundColor:'red',
        height:'40%',
        justifyContent:'space-between',
        paddingVertical: 10
    }
    
})

