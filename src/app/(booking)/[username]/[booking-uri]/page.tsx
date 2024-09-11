import mongoose from 'mongoose'

import { ProfileModel } from '@/models/Profile'
import { EventTypeModel } from '@/models/EventType'
import TimePicker from '@/components/TimePicker'

type PageProps = {
	params: {
		username: string
		'booking-uri': string
	}
}
export default async function BookingBoxPage(props: PageProps) {
	await mongoose.connect(process.env.MONGODB_URI as string)

	const profileDoc = await ProfileModel.findOne({
		username: props.params.username,
	})

	if (!profileDoc) {
		return '404'
	}

	const etDoc = await EventTypeModel.findOne({
		email: profileDoc.email,
		uri: props.params?.['booking-uri'],
	})

	if (!etDoc) {
		return '404'
	}

	return (
		<TimePicker
			username={props.params.username}
			meetingUri={etDoc.uri}
			length={etDoc.length}
			bookingTimes={JSON.parse(JSON.stringify(etDoc.bookingTimes))}
		/>
	)
}
