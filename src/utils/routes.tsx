import AuthPage from '@/pages/Auth'
import Cards from '@/pages/Cards'
import Dashboard from '@/pages/Dashboard'
import Home from '@/pages/Home'
import Todo from '@/pages/Todo.tsx'
import { LayoutDashboard, ListTodo, SquareAsterisk } from 'lucide-react'

interface Routes {
	id: number
	title: string
	path: string
	element: JSX.Element
	isprivate: boolean
}
interface PublicRoutes {
	id: number
	title: string
	path: string
	element: JSX.Element
	isprivate: boolean
	icon: JSX.Element
}

export const publicRoutes: Routes[] = [
	{
		id: 1,
		title: 'Home',
		path: '/',
		element: <Home />,
		isprivate: false,
	},

	{
		id: 5,
		title: 'sign in',
		path: '/signin',
		element: <AuthPage />,
		isprivate: false,
	},
	{
		id: 6,
		title: 'sign up',
		path: '/signup',
		element: <AuthPage />,
		isprivate: false,
	},
]

export const privateRoutes: PublicRoutes[] = [
	{
		id: 2,
		title: 'Dashboard',
		path: '/dashboard',
		element: <Dashboard />,
		isprivate: true,
		icon: <LayoutDashboard />,
	},
	{
		id: 3,
		title: 'Cards',
		path: 'cards',
		element: <Cards />,
		isprivate: true,
		icon: <SquareAsterisk />,
	},
	{
		id: 4,
		title: 'todo',
		path: 'todo',
		element: <Todo />,
		isprivate: true,
		icon: <ListTodo />,
	},
]
