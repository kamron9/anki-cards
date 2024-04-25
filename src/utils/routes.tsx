import AuthPage from '@/pages/Auth'
import Cards from '@/pages/Cards'
import Dashboard from '@/pages/Dashboard'
import Home from '@/pages/Home'
import Todo from '@/pages/Todo.tsx'

interface Routes {
	id: number
	title: string
	path: string
	element: JSX.Element
}

export const routes: Routes[] = [
	{
		id: 1,
		title: 'Home',
		path: '/',
		element: <Home />,
	},
	{
		id: 2,
		title: 'Dashboard',
		path: '/dashboard',
		element: <Dashboard />,
	},
	{
		id: 3,
		title: 'Cards',
		path: '/cards',
		element: <Cards />,
	},
	{
		id: 4,
		title: 'todo',
		path: '/todo',
		element: <Todo />,
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
