import Layout from '@/components/dashboard/Layout'
import { useAuth } from '@/context/AuthProvider'
import AuthPage from '@/pages/Auth'
import CardsPage from '@/pages/Cards'
import DashboardPage from '@/pages/Dashboard'
import HomePage from '@/pages/Home'
import TodoPage from '@/pages/Todo'

import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

const Routers = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const { isAuthenticated } = useAuth()

	useEffect(() => {
		if (
			!isAuthenticated &&
			location.pathname !== '/signin' &&
			location.pathname !== '/' &&
			location.pathname !== '/signup'
		) {
			navigate('/', { replace: true })
		} else if (
			(isAuthenticated && location.pathname === '/') ||
			location.pathname === '/signin' ||
			location.pathname === '/signup'
		) {
			navigate('/dashboard')
		} else {
			return
		}
	}, [isAuthenticated])

	return (
		<>
			{isAuthenticated ? (
				<Routes>
					<Route element={<Layout />}>
						<Route path='/dashboard' element={<DashboardPage />} />
						<Route path='/cards' element={<CardsPage />} />
						<Route path='/todo' element={<TodoPage />} />
					</Route>
				</Routes>
			) : (
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/signin' element={<AuthPage />} />
					<Route path='/signup' element={<AuthPage />} />
				</Routes>
			)}
		</>
	)
}

export default Routers
