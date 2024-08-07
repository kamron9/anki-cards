import { toast } from '@/components/ui/use-toast.ts'
import { useCard } from '@/context/CardProvider'
import CardService from '@/service/cardService'
import { CardType } from '@/shared/types'
import { useState } from 'react'
const CardForm = () => {
	const [front, setFront] = useState<string>('')
	const [back, setBack] = useState<string>('')
	const [pronunciation, setPronunciation] = useState<string>('')
	const { cards, addCard } = useCard()

	const onAdd = async () => {
		const newCards: CardType = {
			id: cards.length + 1,
			front,
			back,
			pronunciation,
			isReversed: false,
		}
		toast({
			title: 'Card added',
			duration: 2000,
			style: {
				background: 'green',
				display: 'block !important',
			},
		})
		addCard(newCards)
		setFront('')
		setBack('')
		setPronunciation('')
		CardService.createCard(newCards)
	}

	const isButtonDisabled: boolean = !front || !back

	return (
		<form className={'flex flex-col p-4 gap-2'}>
			<input
				className={
					'bg-transparent border px-2 py-3 rounded-md focus:outline-none focus:border-blue-500'
				}
				value={front}
				type='text'
				placeholder='front'
				onChange={e => setFront(e.target.value)}
			/>
			<input
				className={
					'bg-transparent border px-2 py-3 rounded-md focus:outline-none focus:border-blue-500'
				}
				value={back}
				type='text'
				placeholder='back'
				onChange={e => setBack(e.target.value)}
			/>
			<input
				className={
					'bg-transparent border px-2 py-3 rounded-md focus:outline-none focus:border-blue-500'
				}
				value={pronunciation}
				type='text'
				placeholder='pronunciation'
				onChange={e => setPronunciation(e.target.value)}
			/>
			<button
				disabled={isButtonDisabled}
				className={
					'bg-green-700 text-white py-3 border border-green-700 rounded-md disabled:bg-green-950'
				}
				onClick={onAdd}
			>
				add
			</button>
		</form>
	)
}
export default CardForm
