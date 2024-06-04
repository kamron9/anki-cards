import axios from 'axios'
import Cookies from 'js-cookie'

export const Axios = axios.create({
	baseURL: 'https://ankicard.chogirmali.uz/api/v1/users',
	headers: {
		'Content-Type': 'application/json',
	},
})

Axios.interceptors.request.use(
	config => {
		const token = Cookies.get('token')
		console.log(token)
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)
