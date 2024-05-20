import { CardType, useCard } from '@/context/CardProvider'
import { useState } from 'react'

const CardForm = () => {
	const [front, setFront] = useState<string>('')
	const [back, setBack] = useState<string>('')
	const [pronunciation, setPronunciation] = useState<string>('')
	const { cards, addCard } = useCard()

	const onAdd = () => {
		const newCards: CardType = {
			id: cards.length + 1,
			front,
			back,
			pronunciation,
			isReversed: false,
		}
		console.log(newCards)

		addCard(newCards)
		setFront('')
		setBack('')
		setPronunciation('')
	}

	return (
		<div className='form'>
			<input
				className='front-input'
				value={front}
				type='text'
				placeholder='front'
				onChange={e => setFront(e.target.value)}
			/>
			<input
				className='back-input'
				value={back}
				type='text'
				placeholder='back'
				onChange={e => setBack(e.target.value)}
			/>
			<input
				className='pronunciation-input'
				value={pronunciation}
				type='text'
				placeholder='pronunciation'
				onChange={e => setPronunciation(e.target.value)}
			/>
			<button className='add-button' onClick={onAdd}>
				add
			</button>
		</div>
	)
}
export default CardForm
