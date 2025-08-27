import { useState } from 'react'
import { FaAngleDown, FaBars, FaX } from 'react-icons/fa6'
import { NavLink, useNavigate } from 'react-router'

export const MenuBar = () => {
	const [menuMobile, setMenuMobile] = useState(true)
	const navigate = useNavigate()

	const toggleMenu = () => {
		setMenuMobile(!menuMobile)
	}

	const onLogin = () => {
		navigate('/login', {
			replace: false,
		})
	}

	const onSingUp = () => {
		navigate('/singup', { replace: false })
	}

	return (
		<header className='flex justify-between mb-12'>
			{/* Logo */}
			<section className='flex items-center'>
				<div className='logo'></div>
			</section>

			{/* Menu items */}
			<section
				className={`${
					menuMobile ? 'hidden' : 'block'
				} fixed bg-lightBg w-full h-full sm:static sm:flex sm:w-auto sm:h-auto`}>
				<span
					className={`${
						menuMobile ? 'hidden' : 'block'
					} sm:hidden flex justify-end cursor-pointer`}
					onClick={toggleMenu}>
					<FaX className='size-6 text-subtitle' />
				</span>

				<ul className='text-right items-center sm:flex sm:justify-center sm:gap-2'>
					<NavLink
						to=''
						className={({ isActive }: { isActive: boolean }) =>
							isActive ? 'menu-item isActive' : 'menu-item'
						}>
						Productos {/*<FaAngleDown /> */}
					</NavLink>
					<NavLink
						to='contact'
						className={({ isActive }: { isActive: boolean }) =>
							isActive ? 'menu-item isActive' : 'menu-item'
						}>
						Contacto
					</NavLink>
				</ul>
			</section>

			<section className='flex'>
				{/* Log In - Sing Up */}
				<section className='flex gap-2 items-center max-xxs:hidden'>
					<span
						className='login-btn'
						onClick={onLogin}>
						Iniciar sesión
					</span>
					<span
						className='singup-btn'
						onClick={onSingUp}>
						Registrarse
					</span>
				</section>

				{/* Mobile Icon Menu */}
				<span
					className={`${
						menuMobile ? 'flex' : 'hidden'
					} sm:hidden items-center cursor-pointer ml-3`}
					onClick={toggleMenu}>
					<FaBars className='size-8' />
				</span>
			</section>
		</header>
	)
}
