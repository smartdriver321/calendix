import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { session } from '@/lib/session'

export async function GET() {
	await session().set('grantId', null)
	await session().set('email', null)
	await session().destroy()

	revalidatePath('/')
	redirect('/?logged-out=1')
}
