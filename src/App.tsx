import { useEffect, useState } from 'react'
import './App.css'
import close from './close.svg'

interface Card {
	front: string
	back: string
	pronunciation: string
	isReversed: boolean
}

const App = () => {
	const [front, setFront] = useState<string>('')
	const [back, setBack] = useState<string>('')
	const [pronunciation, setPronunciation] = useState<string>('')
	const [cards, setCards] = useState<Card[]>([])

	useEffect(() => {
		const savedCards = localStorage.getItem('cards')
		if (savedCards) {
			setCards(JSON.parse(savedCards))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('cards', JSON.stringify(cards))
	}, [cards])

	const onAdd = () => {
		const newCards = [
			{ front, back, pronunciation, isReversed: false },
			...cards,
		]
		setCards(newCards)
		setFront('')
		setBack('')
		setPronunciation('')
	}

	const onDelete = (index: number) => {
		const newCards = cards.filter((card, i) => i !== index)
		setCards(newCards)
	}

	const onReverse = (index: number) => {
		const newCards = cards.map((card, i) =>
			i === index ? { ...card, isReversed: !card.isReversed } : card
		)
		setCards(newCards)
	}

	return (
		<div className='wrapper'>
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
			<div className='container'>
				{cards.map((card, index) => (
					<div
						className={`card ${card.isReversed ? 'reversed' : ''}`}
						onClick={() => onReverse(index)}
					>
						<div className='card-inner'>
							<div className='front'>
								{card.front}
								{card.pronunciation && (
									<div className='pronunciation'>({card.pronunciation})</div>
								)}
							</div>
							<div className='back'>{card.back}</div>
						</div>
						<button
							className='delete-button'
							onClick={e => {
								e.stopPropagation()
								onDelete(index)
							}}
						>
							<img src={close} alt='close' />
						</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default App
