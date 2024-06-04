import ThemeSwitcher from '@/components/ThemeSwitcher'
import CardModal from '@/components/modal/CardModal.tsx'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthProvider'
import RemoveCard from '@/pages/CardsPage/components/Cards/RemoveCard'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import Cookies from 'js-cookie'
import { memo } from 'react'
import { useLocation } from 'react-router-dom'

const TopHeader = () => {
	const { pathname } = useLocation()

	const { logOut } = useAuth()
	const user = JSON.parse(Cookies.get('user') || '{}')
	console.log(user)

	return (
		<div className='w-full h-[65px] border-b border-b-gray-300 dark:border-b-[var(--border-color)] px-4  flex justify-between items-center'>
			{pathname === '/cards' && <CardModal />}
			<RemoveCard />
			<div className='flex gap-2 items-center'>
				<div>
					<ThemeSwitcher />
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild className='bg-[var(--light-gray)]'>
						<Button
							variant={'outline'}
							className='font-semibold bg-transparent'
						>
							{user.full_name}
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='w-36 border-2 border-gray-300 dark:border-gray-700 relative z-50  rounded-md p-2 bg-[var(--card-light)] dark:bg-[var(--light-gray)]'>
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
