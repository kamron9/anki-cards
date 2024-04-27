import { useAuth } from '@/context/AuthProvider'
import { disableBrowserBackBtn } from '@/helpers/disableBrowserBackBtn'
import AuthPage from '@/pages/Auth'
import { routes } from '@/utils/routes'
import { useEffect } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
const Routes = () => {
	const token = localStorage.getItem('token')

	const navigate = useNavigate()
	const location = useLocation()
	const { user } = useAuth()

	useEffect(() => {
		if (token && location.pathname !== '/dashboard') {
			navigate('/dashboard', { replace: true })
			disableBrowserBackBtn()
		} else if (
			!token &&
			location.pathname !== '/signin' &&
			location.pathname !== '/' &&
			location.pathname !== '/signup'
		) {
			navigate('/signin', { replace: true })
		}
	}, [token, location, navigate, user])

	const routing = useRoutes(
		routes.map(({ path, element, isprivate }) => {
			if (isprivate && !token) {
				return { path: '*', element: <AuthPage /> }
			}
			if (!isprivate && token) {
				return { path, element }
			}
			return { path, element }
		})
	)

	return routing
}

export default Routes
