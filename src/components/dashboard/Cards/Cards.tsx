import CloseIcon from '@/assets/icons/CloseIcon'
import { Card, CardContent } from '@/components/ui/card.tsx'
import { CardType, useCard } from '@/context/CardProvider'

const Cards = () => {
	const { cards, onReverse, removeCard } = useCard()

	const onDelete = (card: CardType) => {
		removeCard(card)
	}
	return (
		<div className={'px-4 mt-4'}>
			<div className='grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] '>
				{cards.map(card => (
					<Card
						key={card.id}
						className={`card  border-none shadow-none ${
							card.isReversed ? 'reversed' : ''
						}  bg-transparent`}
						onClick={() => onReverse(card.id)}
					>
						<div className='card-inner bg-[var(--card-light)] dark:bg-[var(--card-dark)] dark:text-[var(--card-light)]'>
							<CardContent className='front p-0 overflow-hidden rounded-[12px] '>
								{card.front}
								{card.pronunciation && (
									<div className='pronunciation'>({card.pronunciation})</div>
								)}
							</CardContent>
							<CardContent className='back p-0 overflow-hidden rounded-[12px]'>
								{card.back}
							</CardContent>
						</div>
						<button
							className='delete-button'
							onClick={e => {
								e.stopPropagation()
								onDelete(card)
							}}
						>
							<CloseIcon />
						</button>
					</Card>
				))}
			</div>
		</div>
	)
}

export default Cards
