import styled from 'styled-components/native';
import { colors } from '../../styles/colors';
import { StyleSheetProperties } from 'react-native';
interface CustomProps{
	color?: string,
    height ?: number,
    width ?: number | string,
    style ?: StyleSheetProperties
}
export const StyledCard = styled.TouchableOpacity<CustomProps>`
    border-width:1.5px;
    border-radius: 16px;
    background-color: black;
    overflow: hidden;
    height: ${({height})=> height ? height: '300'}px;
    width: ${({width})=> width ? width : '300'}px;
`;
