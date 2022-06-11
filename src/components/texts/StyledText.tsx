import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

interface CustomProps{
    color?: string;
    size ?: string;
    fontWeight?: string;
    position?: 'left' | 'right' | 'center';
}

const StyledText = styled.Text<CustomProps>`
	font-size: ${({ size }) => size || 16}px;
	color: ${(props) => props.color ? props.color : colors.black};
    text-align: ${(props)=>props.position ? props.position : 'center'};
`;

export default StyledText;
