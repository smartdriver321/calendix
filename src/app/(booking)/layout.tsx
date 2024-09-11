import { Noto_Sans } from 'next/font/google'
import React from 'react'

import './../globals.css'

const noto = Noto_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '600', '700'],
})

export default function BookingLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={noto.className}>
			<body>{children}</body>
		</html>
	)
}
