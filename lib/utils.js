const axios = require('axios')

module.exports = {
	fetchCurrencys() {
		return axios.get('https://economia.awesomeapi.com.br/all')
			.then((response) => {
				if (response.status === 200) {
					return Object.values(response.data)
				}
				else {
					Promise.reject(response)
				}
			})
			.catch(console.error)
	}
}
