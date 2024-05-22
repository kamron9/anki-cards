import ThemeSwitcher from '@/components/Header/ThemeSwitcher'
import CardModal from '@/components/modal/CardModal.tsx'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthProvider'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { memo } from 'react'
import { useLocation } from 'react-router-dom'

const TopHeader = () => {
	const { pathname } = useLocation()

	const { logOut } = useAuth()
	const user = JSON.parse(localStorage.getItem('user') as string) || {
		full_name: '',
	}

	return (
		<div className='w-full h-[65px] border-b border-b-gray-300 dark:border-b-[var(--border-color)] px-4  flex justify-between items-center'>
			{pathname === '/cards' && <CardModal />}
			<div className='flex gap-4 items-center'>
				<div>
					<ThemeSwitcher />
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild className='mr-4 bg-[var(--light-gray)]'>
						<Button
							variant={'outline'}
							className='font-semibold bg-transparent'
						>
							{user.full_name}
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='w-36  rounded-md p-2 bg-[var(--card-light)] dark:bg-[var(--light-gray)]'>
						<button className='text-center w-full py-2 border-b border-b-gray-300 dark:border-b-gray-700'>
							settings
						</button>

						<button className='text-center w-full py-2' onClick={logOut}>
							Log out
						</button>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}

export default memo(TopHeader)
