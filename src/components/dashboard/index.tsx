import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import TopHeader from './TopHeader/TopHeader'

const Dashboard = () => {
	return (
		<div className='flex'>
			<Sidebar />
			<div className='w-full'>
				<TopHeader />
				<Outlet />
			</div>
		</div>
	)
}

export default Dashboard
