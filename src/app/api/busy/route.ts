import { NextRequest } from 'next/server'
import mongoose from 'mongoose'
import { TimeSlot } from 'nylas'

import { nylas } from '@/lib/nylas'
import { ProfileModel } from '@/models/Profile'

export async function GET(req: NextRequest) {
	await mongoose.connect(process.env.MONGODB_URI as string)

	const url = new URL(req.url)
	const username = url.searchParams.get('username')
	const from = new Date(url.searchParams.get('from') as string)
	const to = new Date(url.searchParams.get('to') as string)

	const profileDoc = await ProfileModel.findOne({ username })

	if (!profileDoc) {
		return Response.json('invalid username and/or bookingUri', { status: 404 })
	}

	const nylasBusyResult = await nylas.calendars.getFreeBusy({
		identifier: profileDoc.grantId,
		requestBody: {
			emails: [profileDoc.email],
			startTime: Math.round(from.getTime() / 1000),
			endTime: Math.round(to.getTime() / 1000),
		},
	})

	let busySlots: TimeSlot[] = []

	if (nylasBusyResult.data?.[0]) {
		// @ts-ignore
		const slots = nylasBusyResult.data?.[0]?.timeSlots as TimeSlot[]
		// @ts-ignore
		busySlots = slots.filter((slot) => slot.status === 'busy')
	}

	return Response.json(busySlots)
}
