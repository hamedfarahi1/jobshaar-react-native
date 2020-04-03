import React from 'react'
import { Home } from '../home/Home';
import { Account } from '../account/Account';
import { Router, Scene, Stack } from 'react-native-router-flux';


function Routes() {
	return <Router>
		<Scene key="root" hideNavBar>
			<Stack key="home" hideNavBar>
				<Scene key="home" component={Home} title="Home" initial={true} />
			</Stack>
			<Stack key="account" hideNavBar>
				<Scene key="account" component={Account} title="Account" />
			</Stack>
		</Scene>
	</Router>
}

export { Routes }