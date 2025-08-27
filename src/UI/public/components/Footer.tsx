import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

export const Footer = () => {
	return (
		<section
			className='footer'
			id='footer'>
			<section className='container w-4xl flex gap-2 justify-between'>
				<section className='flex flex-col gap-3 w-1/2'>
					{/* Logo */}
					<section className='w-12 h-12 bg-lightBg rounded-full'></section>

					{/* Info */}
					<section className=''>
						<p>
							En <strong>GoLink</strong>, hacemos que compartir
							sea más sencillo. Acortamos tus enlaces para que tú
							puedas enfocarte en lo importante: conectar con tu
							audiencia
						</p>
					</section>

					{/* Socials */}
					<section className='flex flex-col gap-2'>
						<h2 className='text-lg font-semibold'>Sígueme</h2>

						<section className='flex gap-3'>
							<a href='https://github.com/richard-tabares'>
								<FaGithub className='icons-socials' />
							</a>
							<a href='https://www.linkedin.com/in/richard-tabares/'>
								<FaLinkedinIn className='icons-socials' />
							</a>
							<a href='https://richardtabares.dev/'>
								<FaArrowUpRightFromSquare className='icons-socials' />
							</a>
						</section>
					</section>
				</section>
				<section className='w-1/2 flex flex-col gap-3'>
					<h2 className='text-lg font-semibold'>
						Información & Ayuda
					</h2>
					<a
						href=''
						className='links'>
						Que es un acortador de Links?
					</a>
					<a
						href=''
						className='links'>
						Como funciona un acrotador de Links?
					</a>
					<a
						href=''
						className='links'>
						Como obtener el codigo QR de un Link?
					</a>
					<a
						href=''
						className='links'>
						Como acortar un Link?
					</a>
				</section>
			</section>
			<section className='text-center mt-6'>
				<p className='text-sm'>
					⚡Creado con React | Tailwind | Motion | Supabase
				</p>
				<p className='text-sm'>
					Hecho con ♥️ por{' '}
					<a
						href='https://richardtabares.dev/'
						target='_blank'
						className='links'>
						<strong>Richard Tabares</strong>
					</a>
				</p>
			</section>
		</section>
	)
}
