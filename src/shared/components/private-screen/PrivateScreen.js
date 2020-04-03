import React from 'react'
import { connect } from 'react-redux';
import { Account } from '../../../entity/account/Account';

function PrivateScreen(props) {
	return <></>
}

function mapState(state) {
	const { loggedIn } = state.authentication;
	return { loggedIn }
}

const connectedPrivateScreenPage = connect(mapState, {})(PrivateScreen)
export { connectedPrivateScreenPage as PrivateScreen }
