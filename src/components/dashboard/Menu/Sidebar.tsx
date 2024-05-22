import { privateRoutes } from '@/utils/routes'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
	return (
		<aside className='w-[300px] hidden md:block border-r h-screen border-r-gray-300 dark:border-r-[var(--border-color)] p-12'>
			{/* logo */}
			<div>
				<h2 className='text-blue-500 font-bold text-xl'>Ankicard</h2>
			</div>
			{/* navigation */}
			<nav className='mt-12'>
				<ul className='space-y-4'>
					{privateRoutes.map(route => (
						<li key={route.id}>
							<NavLink to={route.path} className='flex items-center space-x-2'>
								{route.icon}
								<span>{route.title}</span>
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar
