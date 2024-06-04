import { Axios } from '@/api/axios'
import { CardType } from '@/shared/types'

export default class CardService {
	static async getCards() {
		try {
			const response = await Axios.get('/words')
			return response.data
		} catch (error) {
			console.error('CardService -> getCards -> error', error)
			return []
		}
	}
	static async createCard(card: CardType) {
		try {
			const response = await Axios.post('/words', {
				front: card.front,
				back: card.back,
				pronunciation: card.pronunciation,
			})
			console.log(response.data)

			return response.data
		} catch (error) {
			console.error('CardService -> createCard -> error', error)
			return null
		}
	}
	static async updateCard(card: CardType) {
		try {
			const response = await Axios.put(`/cards/${card.id}`, card)
			return response.data
		} catch (error) {
			console.error('CardService -> updateCard -> error', error)
			return null
		}
	}
	static async deleteCard(cardId: number) {
		try {
			const response = await Axios.delete(`/cards/${cardId}`)
			return response.data
		} catch (error) {
			console.error('CardService -> deleteCard -> error', error)
			return null
		}
	}
}
