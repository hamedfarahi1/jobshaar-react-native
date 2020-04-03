import React from 'react';
import { Text, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

function Account() {
	return <Text onPress={() => Actions.home()}>
		clickk
		</Text>
}

export { Account }