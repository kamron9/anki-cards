import LeftArrowIcon from '@/assets/icons/LeftArrowIcon'
import AuthService from '@/service/authService'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader } from '../ui/card'

export interface AuthProps {
	fullName: string
	username: string
	password: string
	confirmPassword?: string
}

const Auth = () => {
	const { pathname } = useLocation()
	const [errorMsg, setErrorMsg] = useState('')
	const navigate = useNavigate()

	const postData = async (authData: AuthProps) => {
		const { fullName, username, password } = authData

		try {
			if (pathname === '/signin') {
				const result = await AuthService.signIn({ username, password })

				if (result.token) {
					localStorage.setItem('token', result.token)
					navigate('/dashboard')
				}
			} else {
				const res = await AuthService.signUp({
					full_name: fullName,
					username,
					password,
				})
				console.log(res.token)

				if (res.token) {
					localStorage.setItem('token', res.token)
					//redirect to dashboard page
					navigate('/dashboard')
				}
				setErrorMsg('')
			}
		} catch (error: any) {
			setErrorMsg(error.response.data.errors[0].detail)
		}
	}

	const handleData = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const element = e.target.elements as any

		let authData = {}

		if (pathname === '/signin') {
			authData = {
				username: element[0].value,
				password: element[1].value,
			}
		} else {
			authData = {
				fullName: element[0].value,
				username: element[1].value,
				password: element[2].value,
				confirmPassword: element[3].value,
			}
		}

		postData(authData)
	}

	return (
		<div className='container h-screen flex justify-center items-center'>
			<Card className='max-w-[500px] w-full h-fit'>
				<CardHeader>
					<div className='flex items-center justify-center relative'>
						<div className='absolute left-0 z-10'>
							<Link to={'/'} className='flex items-center gap-1'>
								<LeftArrowIcon className='text-blue-500' />
								<span>Back</span>
							</Link>
						</div>
						<h2 className='font-bold text-xl'>
							{pathname === '/signin' ? 'Sign in' : 'Sign up'}
						</h2>
					</div>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleData}>
						{
							// Show full name input only on sign up
							pathname === '/signup' && (
								<FormInput name='fullName' label='full name' type='text' />
							)
						}
						<FormInput name='username' type='text' label='username or email' />

						<FormInput name='password' type='password' label='password' />

						{
							// Show confirm password input only on sign up
							pathname === '/signup' && (
								<FormInput
									name='confirmPassword'
									type='password'
									label='confirm password'
								/>
							)
						}
						{errorMsg && (
							<div className='text-red-500 text-sm font-semibold'>
								{errorMsg}
							</div>
						)}
						<button
							type='submit'
							className='w-full bg-blue-500 text-white py-2 rounded-md mt-2'
						>
							{pathname === '/signin' ? 'Sign In' : 'Sign Up'}
						</button>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

export default Auth

type TformInput = {
	label: string
	type: string
	name: string
}

const FormInput = ({ label, type, name }: TformInput) => {
	return (
		<>
			<label htmlFor={label}>{label}</label>
			<input
				className='w-full mt-1 bg-transparent p-2 rounded-md mb-2 border focus:outline-none focus:ring-2 focus:ring-blue-500'
				type={type}
				id={label}
				name={name}
				placeholder='...'
				required
			/>
		</>
	)
}
