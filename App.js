/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LocalizeProvider } from 'react-localize-redux'
import { Provider } from 'react-redux';
import { store } from './src/core/_helpers';
import { Main } from './src/entity/main/Main';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
	return (
		<>
			<LocalizeProvider>
				<Provider store={store}>
					<NavigationContainer>
						<Main />
					</NavigationContainer>
				</Provider>
			</LocalizeProvider>
		</>
	);
};

export default App;
