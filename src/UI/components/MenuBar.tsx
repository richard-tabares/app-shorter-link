import { useState } from "react"
import { FaAngleDown, FaBars, FaX } from "react-icons/fa6"
import { useNavigate } from "react-router"

export const MenuBar = () => {

  const [menuMobile, setMenuMobile] = useState(true)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuMobile(!menuMobile)
  }

  const onLogin = () => {

    navigate('/login', {
      replace: true
    })

  }

  return (
    <header className="flex justify-between mb-12">

      {/* Logo */}
      <section className="flex items-center">
        <div className="logo"></div>
      </section>

      {/* Menu items */}
      <section className={`${menuMobile ? 'hidden' : 'block'} fixed bg-lightBg w-full h-full sm:static sm:flex sm:w-auto sm:h-auto`}>

        <span className={`${menuMobile ? 'hidden' : 'block'} sm:hidden flex justify-end cursor-pointer`} onClick={toggleMenu}>
          <FaX className="size-6 text-subtitle" />
        </span>

        <ul className="text-right items-center sm:flex sm:justify-center sm:gap-2">
          <a href="#" className="menu-item" onClick={toggleMenu}>Productos <FaAngleDown /></a>
          <a href="#" className="menu-item" onClick={toggleMenu}>Contacto</a>
        </ul>

      </section>

      <section className="flex">

        {/* Log In - Sing Up */}
        <section className="flex gap-2 items-center max-xxs:hidden">
          <a href="#" className="login-btn" onClick={onLogin}>Iniciar sesión</a>
          <a href="#" className="singup-btn">Registrarse</a>
        </section>

        {/* Mobile Icon Menu */}
        <span className={`${menuMobile ? 'flex' : 'hidden'} sm:hidden items-center cursor-pointer ml-3`} onClick={toggleMenu}>
          <FaBars className="size-8" />
        </span>

      </section>




    </header>
  )
}
