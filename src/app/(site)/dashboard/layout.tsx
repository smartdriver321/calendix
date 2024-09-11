import { ReactNode } from 'react'
import mongoose from 'mongoose'

import { session } from '@/lib/session'
import { ProfileModel } from '@/models/Profile'
import DashboardNav from '@/components/DashboardNav'

export default async function DashboardLayout({
	children,
}: {
	children: ReactNode
}) {
	await mongoose.connect(process.env.MONGODB_URI as string)

	const email = await session().get('email')

	if (!email) {
		return 'Not logged in'
	}

	const profileDoc = await ProfileModel.findOne({ email })

	return (
		<div>
			<DashboardNav username={profileDoc?.username || ''} />
			{children}
		</div>
	)
}
