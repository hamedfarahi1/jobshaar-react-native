/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Button,
} from 'react-native';
import { LocalizeProvider } from 'react-localize-redux'
import { Provider } from 'react-redux';
import { store } from './src/core/_helpers';
import { userConstants } from './src/core/_constants';
import { myStorage } from './src/shared/utils/async-storge';


const App = () => {
	return (
		<>
			<LocalizeProvider>
				<Provider store={store}>

					<Button title="fuck you" />
					<Button title="fuck you" />
				</Provider>
			</LocalizeProvider>
		</>
	);
};

const styles = StyleSheet.create();

export default App;
