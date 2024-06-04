import { Outlet } from 'react-router-dom'
import BottomMenu from './BottomMenu'
import Sidebar from './Sidebar'
import TopHeader from './TopHeader'

const Layout = () => {
	return (
		<div className='flex w-full'>
			<Sidebar />
			<div className='w-full'>
				<TopHeader />
				<Outlet />
			</div>
			<BottomMenu />
		</div>
	)
}

export default Layout
