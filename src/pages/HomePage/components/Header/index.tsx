import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import ThemeSwitcher from '../../../../components/ThemeSwitcher'

const Header = () => {
	return (
		<header className='flex h-[70px] py-4 items-center justify-between'>
			<h1 className='font-bold'>Ankicard</h1>
			<div className='flex item-center gap-2'>
				<ThemeSwitcher />
				<Link to={'/signin'}>
					<Button>login</Button>
				</Link>
			</div>
		</header>
	)
}

export default Header
