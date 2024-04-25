import LeftArrowIcon from '@/assets/icons/LeftArrowIcon'
import AuthService from '@/service/authService'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Card, CardContent, CardHeader } from '../ui/card'

interface InputValue {
	fullName: string
	username: string
	password: string
	confirmPassword: string
}

const Auth = () => {
	const { pathname } = useLocation()
	//get input value in state
	const [inputValue, setInputValue] = useState<InputValue>({
		fullName: '',
		username: '',
		password: '',
		confirmPassword: '',
	})

	const postData = async () => {
		try {
			if (pathname === '/signin') {
				const { username, password } = inputValue
				const result = await AuthService.signIn({ username, password })
				console.log(result)
			} else {
				const { fullName, username, password, confirmPassword } = inputValue
				if (password !== confirmPassword) {
					console.log('Password and confirm password must be same')
					return
				}
				const res = await AuthService.signUp({
					full_name: fullName,
					username,
					password,
				})
				console.log(res)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const handleData = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const [fullName, email, passsword, confirmPassword] = e.target as any
		setInputValue({
			fullName: fullName.value,
			username: email.value,
			password: passsword.value,
			confirmPassword: confirmPassword.value,
		})
		postData()
	}

	const inputStyle =
		'w-full bg-transparent p-2 rounded-md mb-2 border focus:outline-none focus:ring-2 focus:ring-blue-500'

	return (
		<div className='container h-screen flex justify-center items-center'>
			<Card className='max-w-[500px] w-full h-fit'>
				<CardHeader>
					<div className='flex items-center justify-center relative'>
						<div className='absolute left-0 z-10'>
							<Link to={'/'} className='flex items-center gap-1'>
								<LeftArrowIcon className='text-blue-500' />
								<span>back</span>
							</Link>
						</div>
						<h2 className='font-bold text-xl'>
							{pathname === '/signin' ? 'Sign In' : 'Sign Up'}
						</h2>
					</div>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleData}>
						{
							// Show full name input only on sign up
							pathname === '/signup' && (
								<input
									name='fullName'
									type='text'
									placeholder='full name'
									className={inputStyle}
								/>
							)
						}
						<input
							name='username'
							type='text'
							placeholder='username or email'
							className={inputStyle}
						/>
						<input
							name='passsword'
							type='password'
							placeholder='password'
							className={inputStyle}
						/>
						{
							// Show confirm password input only on sign up
							pathname === '/signup' && (
								<input
									name='confirmPassword'
									type='password'
									placeholder='confirm password'
									className={inputStyle}
								/>
							)
						}

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
