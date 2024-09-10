import Image from 'next/image'

import Hero from '../components/Hero'

export default function HomePage() {
	return (
		<>
			<Hero />

			<section className='text-center mt-32'>
				<p className='text-gray-600'>Trusted by those companies:</p>
				<div className='flex gap-8 *:h-6 mt-6 justify-center'>
					<Image
						src='https://images.ctfassets.net/lh3zuq09vnm2/7hhEfCdZPI7mPC24fFsC94/adf392604ef673a224307e48ac87bd96/Adobe.svg'
						height={100}
						width={50}
						alt=''
					/>
					<Image
						src='https://images.ctfassets.net/lh3zuq09vnm2/4Y87kRrhSPSYgUbSWYxP1z/a13177cf43f99e7a79c691c54e271a98/Hubspot.svg'
						height={100}
						width={50}
						alt=''
					/>
					<Image
						src='https://images.ctfassets.net/lh3zuq09vnm2/7dsuPwH4V8KJvCexSZueZc/272b2ef619de8ae4b443758413a19733/Unbounce_Logo.svg'
						height={100}
						width={50}
						alt=''
					/>
					<Image
						src='https://images.ctfassets.net/lh3zuq09vnm2/6jZ182ywMavcqhY7WiLS5x/fb3c393066ae09dc17819472dc605d8f/15Five.svg'
						height={100}
						width={50}
						alt=''
					/>
				</div>
			</section>
		</>
	)
}
