import { FaGoogle, FaFacebookF } from "react-icons/fa6";

export const Login = () => {
    return (


        <section className="container m-auto h-screen flex flex-col gap-4 justify-center items-center">

            {/* <h1 className="border">Iniciar Sesión</h1> */}

            <section className="flex gap-2 w-[80%] min-sm:w-[400px] flex-col items-center justify-center p-4">

                <h1 className="titles">Iniciar Sesión</h1>

                <input type="text" placeholder="Usuario" className="input-link" />
                <input type="text" placeholder="Contraseña" className="input-link" />
                <button className="btn-primary">Iniciar</button>
                <a href="" className="self-end cursor-pointer text-subtitle">Recuperar Contraseña</a>

            </section>

            <section className="flex w-[80%] min-sm:w-[400px] items-center justify-center px-4">
                <div className="w-20 h-px bg-gray-300"></div>
                <span className="px-3 text-sm text-gray-500">Continuar con</span>
                <div className="w-20 h-px bg-gray-300"></div>
            </section>

            <section className="flex flex-col gap-2 w-[80%] min-sm:w-[400px] px-4">

                <section className="border border-accentBlue/15 py-2 px-3 rounded-md cursor-pointer hover:bg-primary/10 flex items-center justify-center">
                    <FaGoogle className="size-6 text-primary mr-3" />Continuar con Google
                </section>
                <section className="border border-accentBlue/15 py-2 px-3 rounded-md cursor-pointer hover:bg-primary/10 flex items-center justify-center">
                    <FaFacebookF className="size-6 text-primary mr-3" />Continuar con Facebook
                </section>

            </section>

        </section>

    )
}
