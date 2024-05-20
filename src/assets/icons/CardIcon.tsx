import { SVGProps } from 'react'
const CardIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth={2}
		className='lucide lucide-square-asterisk'
		{...props}
	>
		<rect width={18} height={18} x={3} y={3} rx={2} />
		<path d='M12 8v8M8.5 14l7-4M8.5 10l7 4' />
	</svg>
)
export default CardIcon
