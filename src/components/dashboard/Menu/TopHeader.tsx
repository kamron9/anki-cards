import ThemeSwitcher from '@/components/Header/ThemeSwitcher'
import { memo } from 'react'
const TopHeader = () => {
	const user = JSON.parse(localStorage.getItem('user') || '')
	console.log(user)

	return (
		<div className='w-full h-[60px] border-b p-4 flex justify-end items-center border-gray-300 dark:border-gray-700'>
			<div className='flex gap-4 items-center'>
				<ThemeSwitcher />
				<div className='mr-4 font-semibold'>{user.full_name}</div>
			</div>
		</div>
	)
}

export default memo(TopHeader)
