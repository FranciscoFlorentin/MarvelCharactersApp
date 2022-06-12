import { Platform, TextProps } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

interface CustomProps{
    color?: string;
    size ?: number;
    fontWeight?: string;
    position?: 'left' | 'right' | 'center';
    paddingVertical ?: number;
    bold?: boolean;
}

const StyledText = styled.Text<CustomProps>`
	font-size: ${({ size }) => size || 16}px;
	color: ${(props) => props.color ? props.color : colors.white};
    text-align: ${(props)=>props.position ? props.position : 'center'};
    padding-vertical: ${(props)=>props.paddingVertical ? props.paddingVertical : '0'}px;
    font-family: ${(props)=>
        Platform.OS=='ios' 
        ? props.bold 
            ? 'ActionMan-Bold' 
            : 'ActionMan'
        : props.bold 
            ? 'actionMan_bold' 
            : 'actionMan'
    };
`;

export default StyledText;
