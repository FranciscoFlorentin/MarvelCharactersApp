import styled from 'styled-components/native';
import { colors } from '../styles/colors';
interface CustomProps{
	color?: string
}
export const StyledBackground = styled.View<CustomProps>`
    flex:1;
    padding: 5px;
    background-color: ${props=>props.color ? props.color : colors.red};
`;

