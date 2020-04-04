const axios = require('axios');

const axiosInstance = axios.create({
	baseURL: 'http://5.9.226.21:9090',
	/* other custom settings */
});

module.exports = axiosInstance;