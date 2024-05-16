import CardIcon from '@/assets/icons/CardIcon'
import TodoIcon from '@/assets/icons/TodoIcon'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
	return (
		<aside className='w-[300px] border-r h-screen border-gray-200 dark:border-gray-700 p-12'>
			{/* logo */}
			<div>
				<h2 className='text-blue-500 font-bold text-xl'>Ankicard</h2>
			</div>
			{/* navigation */}
			<nav className='mt-12'>
				<ul className='space-y-4'>
					<li>
						<NavLink
							to='/dashboard/cards'
							className='flex items-center space-x-4 text-gray-300'
						>
							<CardIcon className='w-6 h-6' />
							<span>Card</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/dashboard/todo'
							className='flex items-center space-x-4 text-gray-300'
						>
							<TodoIcon className='w-6 h-6' />
							<span>Todo</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar
