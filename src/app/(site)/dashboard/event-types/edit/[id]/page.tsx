import mongoose from 'mongoose'

import { EventTypeModel } from '@/models/EventType'
import EventTypeForm from '@/app/components/EventTypeForm'

type PageProps = {
	params: {
		id: string
	}
}

export default async function EditEventTypePage({ params }: PageProps) {
	await mongoose.connect(process.env.MONGODB_URI as string)

	const eventTypeDoc = await EventTypeModel.findOne({ _id: params.id })

	if (!eventTypeDoc) {
		return '404'
	}

	return (
		<div>
			<EventTypeForm doc={JSON.parse(JSON.stringify(eventTypeDoc))} />
		</div>
	)
}
