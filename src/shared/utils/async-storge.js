import { AsyncStorage } from 'react-native';

const setItem = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (error) {
		// Error retrieving data
		console.log(error.message);
	}
};

const getItem = async (key) => {
	let value = '';
	try {
		value = await AsyncStorage.getItem(key) || 'none';
	} catch (error) {
		// Error retrieving data
		console.log(error.message);
	}
	return value;
}

const removeItem = async (key) => {
	try {
		await AsyncStorage.removeItem(key);
		return true;
	}
	catch (exception) {
		return false;
	}
}

export const myStorage = {
	setItem,
	getItem,
	removeItem
}