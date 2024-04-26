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
	isprivate: boolean
}

export const routes: Routes[] = [
	{
		id: 1,
		title: 'Home',
		path: '/',
		element: <Home />,
		isprivate: false,
	},
	{
		id: 2,
		title: 'Dashboard',
		path: '/dashboard',
		element: <Dashboard />,
		isprivate: true,
	},
	{
		id: 3,
		title: 'Cards',
		path: '/cards',
		element: <Cards />,
		isprivate: true,
	},
	{
		id: 4,
		title: 'todo',
		path: '/todo',
		element: <Todo />,
		isprivate: true,
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
