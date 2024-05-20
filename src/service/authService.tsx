import axios from 'axios'

interface SignIn {
	username: string
	password: string
}
interface SignUp {
	full_name: string
	username: string
	password: string
}

class AuthService {
	static baseUrl = 'https://ankicard.chogirmali.uz/api/v1/users'

	static async signIn(data: SignIn) {
		const resonse = await axios.post(`${this.baseUrl}/sign-in`, data)
		return await resonse.data
	}
	static async signUp(data: SignUp) {
		const resonse = await axios.post(`${this.baseUrl}/sign-up`, data)
		return await resonse.data
	}
}
export default AuthService
