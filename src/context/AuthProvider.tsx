import AuthService from '@/service/authService'
import { createContext, useContext, useState } from 'react'

export interface AuthProps {
	fullName: string
	username: string
	password: string
}
//fix this bug

interface loginProps {
	username: string
	password: string
}

interface AuthContextProps {
	user: AuthProps | {}
	login: (authData: loginProps) => any
	register: (authData: AuthProps) => any
	isAuthenticated: boolean
	logOut: () => void
}

const AuthContext = createContext<AuthContextProps>({
	user: {},
	login: () => {},
	register: () => {},
	isAuthenticated: false,
	logOut: () => {},
})

export const useAuth = () => useContext(AuthContext)

//create type for AuthProvider

interface AuthProviderProps {
	children: React.ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<AuthProps | {}>({})
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
		localStorage.getItem('token') ? true : false
	)

	// for login
	const login = async ({ username, password }: loginProps) => {
		try {
			const res = await AuthService.signIn({ username, password })

			if (res.token) {
				localStorage.setItem('token', res.token)
				localStorage.setItem('user', JSON.stringify(res))
				setUser({ username, password, fullName: res.full_name })
				setIsAuthenticated(true)
			}
		} catch (error: any) {
			setIsAuthenticated(false)
			console.log(error)
		}
	}
	// for register
	const register = async ({ fullName, username, password }: AuthProps) => {
		try {
			const res = await AuthService.signUp({
				full_name: fullName,
				username,
				password,
			})

			if (res.token) {
				localStorage.setItem('token', res.token)
				localStorage.setItem('user', JSON.stringify(res))
				setUser({ fullName, username, password })
				setIsAuthenticated(true)
			}
		} catch (error: any) {
			setIsAuthenticated(false)
			console.log(error)
		}
	}
	const logOut = () => {
		setIsAuthenticated(false)
		localStorage.removeItem('token')
		localStorage.removeItem('user')
	}

	return (
		<AuthContext.Provider
			value={{ user, login, logOut, register, isAuthenticated }}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
