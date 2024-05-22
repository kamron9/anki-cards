import { useState } from 'react'

import CardForm from '@/components/Form/CardForm.tsx'
import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from '@/components/ui/dialog.tsx'

const CardModal = () => {
	const [open, setOpen] = useState(false)
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<button className={'bg-green-700 text-white px-4 py-1 rounded-md'}>
					Add card
				</button>
			</DialogTrigger>
			<DialogContent>
				<CardForm />
			</DialogContent>
		</Dialog>
	)
}

export default CardModal
