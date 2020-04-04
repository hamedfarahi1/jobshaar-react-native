import { Account } from '../../../entity/account/Account';

function privateComponent({ component, loggedIn }) {
	if (loggedIn)
		return component;
	return Account
}

export { privateComponent }