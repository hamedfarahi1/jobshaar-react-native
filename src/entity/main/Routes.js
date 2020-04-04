import React from 'react'
import { Home } from '../home/Home';
import { Account } from '../account/Account';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { privateComponent } from '../../shared/components/private-screen/PrivateComponent';


function Routes({ loggedIn }) {
	return <Router>
		<Scene key="root" hideNavBar>
			<Stack key="home" hideNavBar>
				<Scene key="home" component={privateComponent({ component: Home, loggedIn })} title="Home" initial={true} />
			</Stack>
			<Stack key="account" hideNavBar>
				<Scene key="account" component={Account} title="Account" />
			</Stack>
		</Scene>
	</Router>
}

export { Routes }