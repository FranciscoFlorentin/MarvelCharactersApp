import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StackNavigator} from './src/navigation/StackNavigator';
import { StatusBar } from 'react-native';


export const App = () => {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor='transparent'/>
			<StackNavigator/>
		</NavigationContainer>
	)
};
