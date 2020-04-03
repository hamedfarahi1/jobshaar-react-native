import React from 'react'
import { Button, Icon, Text, Container, View } from 'native-base'
import { Actions } from 'react-native-router-flux';

function Home() {
	return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Text >Details Screen</Text>
		<Button light full
			title="Go to Details... again"
			onPress={() => Actions.account()}
		/>
	</View>
}

export { Home }