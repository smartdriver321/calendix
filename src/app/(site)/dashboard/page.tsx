import mongoose from 'mongoose'

import { session } from '@/lib/session'
import { ProfileModel } from '@/models/Profile'
import ProfileForm from '@/app/components/ProfileForm'

export default async function DashboardPage() {
	await mongoose.connect(process.env.MONGODB_URI as string)

	const email = await session().get('email')
	const profileDoc = await ProfileModel.findOne({ email })

	return (
		<div>
			<ProfileForm existingUsername={profileDoc?.username || ''} />
		</div>
	)
}
