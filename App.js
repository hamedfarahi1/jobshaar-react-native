/**
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { LocalizeProvider } from 'react-localize-redux'
import { Provider } from 'react-redux';
import { store } from './src/core/_helpers';
import { Main } from './src/entity/main/Main';

import { interceptorsSetter } from './src/core/interceptors/interceptorsSetter';


const App = () => {

	useEffect(() => {
		interceptorsSetter()
	})
	return (
		<>
			<LocalizeProvider>
				<Provider store={store}>
					<Main />
				</Provider>
			</LocalizeProvider>
		</>
	);
};

export default App;
