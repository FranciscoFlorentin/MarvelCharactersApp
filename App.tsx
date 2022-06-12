import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StackNavigator} from './src/navigation/StackNavigator';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {persistStore} from 'redux-persist';


export const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistStore(store)}>
				<NavigationContainer>
					<StatusBar backgroundColor='transparent'/>
					<StackNavigator/>
				</NavigationContainer>
			</PersistGate>	
		</Provider>

	)
};
