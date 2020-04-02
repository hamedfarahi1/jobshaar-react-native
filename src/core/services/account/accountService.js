import { myStorage } from '../../shared/utils/async-storge';

const axios = require('axios').default;

export const accountService = {
	login,
	logout,
	register,
	getUserInfo,
	setAuthInterceptor
}
function login(credential) {
	return axios.post(`/api/${+credential.roleTypeIndex === 1 ? 'employee' : 'employer'}/login`, {
		username: credential.username,
		password: credential.password
	}).then(res => {
		return submitUser(res, credential)
	});
}

function logout() {
	// remove user from local storage to log user out
	axios.interceptors.request.use(request => {
		request.headers['Authorization'] = null;
		return request;
	})
	myStorage.removeItem('user');
	myStorage.removeItem('auth');
}

function register(credential) {
	return axios.post(`/api/${+credential.roleTypeIndex === 1 ? 'employee' : 'employer'}/register`, {
		username: credential.username,
		password: credential.password,
		email: credential.email,
		allowExtraEmails: credential.allowExtraEmails
	}).then(
		res => {
			return submitUser(res, credential)
		}
	);
}

function submitUser(res, credential) {
	const user = { username: credential.username, roleTypeIndex: credential.roleTypeIndex }
	myStorage.setItem("auth", JSON.stringify(res));
	myStorage.setItem("	user", JSON.stringify(user));
	setAuthInterceptor()
	return
}

function setAuthInterceptor() {
	myStorage.getItem('auth').then(res => {
		const auth = JSON.parse(res.replace(/'/g, '"'));

		try {
			axios.interceptors.request.use(request => {
				request.headers['Authorization'] = auth.token ? 'Bearer ' + auth.token : '';
				return request;
			})
		}
		catch (e) { return null }
	})
}

function getUserInfo() {
	return axios.get("/api/account");
}

export function _delete() { }