import ThemeSwitcher from '@/components/Header/ThemeSwitcher'
import CardModal from '@/components/modal/CardModal.tsx'
import { memo } from 'react'
import { useLocation } from 'react-router-dom'
const TopHeader = () => {
	const user = JSON.parse(localStorage.getItem('user') as string) || {
		full_name: '',
	}
	const { pathname } = useLocation()

	return (
		<div className='w-full h-[60px] border-b p-4 flex justify-between items-center border-gray-300 dark:border-gray-700'>
			{pathname === '/cards' && <CardModal />}
			<div className='flex gap-4 items-center'>
				<ThemeSwitcher />
				<div className='mr-4 font-semibold'>{user.full_name}</div>
			</div>
		</div>
	)
}

export default memo(TopHeader)
