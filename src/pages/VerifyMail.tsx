import { NavLink } from "react-router"

export const VerifyMail = () => {
  return (
      <section>
          <h1 className="titles">Verificar Email</h1>
          <NavLink to="/login"><h2 className="titles">Iniciar Sesión </h2>
              
          </NavLink>
      </section>
  )
}
