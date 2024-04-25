import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'
import Cards from '@/pages/Cards'
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
]
