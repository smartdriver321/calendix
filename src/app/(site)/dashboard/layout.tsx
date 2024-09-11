import { ReactNode } from 'react'

import DashboardNav from '@/components/DashboardNav'

export default async function DashboardLayout({
	children,
}: {
	children: ReactNode
}) {
	return (
		<div>
			<DashboardNav />
			{children}
		</div>
	)
}
