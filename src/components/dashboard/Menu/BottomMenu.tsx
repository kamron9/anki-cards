import { privateRoutes } from '@/utils/routes'
import { NavLink } from 'react-router-dom'

const BottomMenu = () => {
	return (
		<div className='fixed block md:hidden w-full left-0 bottom-0 border-t border-gray-300 dark:border-gray-700 bg-[var(--layout-light)] dark:bg-[var(--layout-dark)]'>
			<ul className='flex items-center justify-between px-4 py-2'>
				{privateRoutes.map(route => (
					<li key={route.id}>
						<NavLink to={route.path}>
							<div className='flex justify-center'>{route.icon}</div>
							<span>{route.title}</span>
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	)
}

export default BottomMenu
