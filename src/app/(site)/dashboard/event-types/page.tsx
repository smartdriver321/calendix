'use server'

import Link from 'next/link'
import mongoose from 'mongoose'
import { Plus } from 'lucide-react'

import { session } from '@/lib/session'
import { EventTypeModel } from '@/models/EventType'

export default async function EventTypesPage() {
	await mongoose.connect(process.env.MONGODB_URI as string)

	const email = await session().get('email')
	const eventTypes = await EventTypeModel.find({ email })

	return (
		<div>
			<div className='mt-4 border border-b-0 rounded-xl overflow-hidden mb-4'>
				{eventTypes.map((et) => (
					<div key={et.id} className='block p-2 border-b'>
						<Link href={'/dashboard/event-types/edit/' + et.id}>
							{et.title}
						</Link>
					</div>
				))}
			</div>
			<Link className='btn-gray' href='/dashboard/event-types/new'>
				<Plus size={16} />
				New Event Type
			</Link>
		</div>
	)
}
