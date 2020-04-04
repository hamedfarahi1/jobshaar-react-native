import { myStorage } from '../../shared/utils/async-storge';

export function authHeader() {
	// return authorization header with jwt token
	return myStorage.getItem('auth').then(res => {
		let auth = JSON.parse(res.replace(/'/g, '"'));
		if (auth && auth.token) {
			return { 'Authorization': 'Bearer ' + auth.token };
		} else {
			return {};
		}
	})
}