import styled from 'styled-components/native';
import { colors } from '../../styles/colors';
interface CustomProps{
	color?: string
}
export const StyledCard = styled.TouchableOpacity<CustomProps>`
    border-width:1px;
    border-radius: 16px;
    height: 300px;
    width: 250px;
    background-color: black
`;
