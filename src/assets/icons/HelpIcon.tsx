import { SVGProps } from 'react'
const HelpIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth={2}
		className='lucide lucide-message-circle-question'
		{...props}
	>
		<path d='M7.9 20A9 9 0 1 0 4 16.1L2 22Z' />
		<path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01' />
	</svg>
)
export default HelpIcon
