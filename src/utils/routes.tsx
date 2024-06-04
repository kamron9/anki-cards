import AuthPage from '@/pages/AuthPage'
import Cards from '@/pages/CardsPage'
import Dashboard from '@/pages/DashboardPage'
import Home from '@/pages/HomePage'
import Todo from '@/pages/Todo.tsx'
import { LayoutDashboard, ListTodo, SquareAsterisk } from 'lucide-react'

interface Routes {
	id: number
	title: string
	path: string
	element: JSX.Element
}
interface PublicRoutes {
	id: number
	title: string
	path: string
	element: JSX.Element

	icon: JSX.Element
}

export const publicRoutes: Routes[] = [
	{
		id: 1,
		title: 'Home',
		path: '/',
		element: <Home />,
	},

	{
		id: 5,
		title: 'sign in',
		path: '/signin',
		element: <AuthPage />,
	},
	{
		id: 6,
		title: 'sign up',
		path: '/signup',
		element: <AuthPage />,
	},
]

export const privateRoutes: PublicRoutes[] = [
	{
		id: 2,
		title: 'Dashboard',
		path: '/dashboard',
		element: <Dashboard />,
		icon: <LayoutDashboard />,
	},
	{
		id: 3,
		title: 'Cards',
		path: 'cards',
		element: <Cards />,
		icon: <SquareAsterisk />,
	},
	{
		id: 4,
		title: 'todo',
		path: 'todo',
		element: <Todo />,
		icon: <ListTodo />,
	},
]
