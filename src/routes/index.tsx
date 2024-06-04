import Layout from '@/components/Layout'
import { useAuth } from '@/context/AuthProvider'
import AuthPage from '@/pages/AuthPage'
import CardsPage from '@/pages/CardsPage'
import DashboardPage from '@/pages/DashboardPage'
import HomePage from '@/pages/HomePage'
import TodoPage from '@/pages/Todo'

import { Toaster } from '@/components/ui/toaster.tsx'
import { useEffect } from 'react'
import {
	Navigate,
	Route,
	Routes,
	useLocation,
	useNavigate,
} from 'react-router-dom'

const Routers = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const { isAuthenticated } = useAuth()
	const unauthenticatedPaths = ['/', '/signin', '/signup']


	useEffect(() => {
		if (
			(isAuthenticated && location.pathname === '/') ||
			(!isAuthenticated && !unauthenticatedPaths.includes(location.pathname))
		) {
			navigate('/', { replace: true })
		}
	}, [isAuthenticated, location.pathname, navigate])


	useEffect(() => {
		if (isAuthenticated && location.pathname === '/') {
			navigate('/dashboard')
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
						<Route
							path='*'
							element={<Navigate to={'/dashboard'} replace={true} />}
						/>
					</Route>
				</Routes>
			) : (
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/signin' element={<AuthPage />} />
					<Route path='/signup' element={<AuthPage />} />
					<Route path='*' element={<Navigate to={'/'} replace={true} />} />
				</Routes>
			)}
			<Toaster />
		</>
	)
}

export default Routers
