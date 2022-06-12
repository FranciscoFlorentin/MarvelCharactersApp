import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';
import StyledText from '../texts/StyledText';

interface Props{
    onPress:()=>void,
    text:string,
}

export const StyledButton = ({onPress,text}:Props) => {
  return (
    <StyledTouchable onPress={onPress}>
        <StyledText bold>{text}</StyledText>
    </StyledTouchable>
  )
}

const StyledTouchable= styled.TouchableOpacity`
    width: 160px;
    height: 40px;
    border-width:2px;
    border-radius: 15px;
    justify-content: center;
    align-items:center;
    background-color:black;
    border-color:orange;
    margin-bottom: 10px;
    align-self: center;
`

