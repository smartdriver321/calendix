import { NextRequest } from 'next/server'
import { redirect } from 'next/navigation'

import { nylas, nylasConfig } from '@/lib/nylas'
import { session } from '@/lib/session'

export async function GET(req: NextRequest) {
	console.log('Received callback from Nylas')
	const url = new URL(req.url as string)
	const code = url.searchParams.get('code')

	if (!code) {
		return Response.json('No authorization code returned from Nylas', {
			status: 400,
		})
	}

	const codeExchangePayload = {
		clientSecret: nylasConfig.apiKey,
		clientId: nylasConfig.clientId as string,
		redirectUri: nylasConfig.callbackUri,
		code,
	}

	const response = await nylas.auth.exchangeCodeForToken(codeExchangePayload)
	const { grantId, email } = response

	await session().set('grantId', grantId)
	await session().set('email', email)

	redirect('/')
}
