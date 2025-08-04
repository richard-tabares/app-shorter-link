import { FaLink } from "react-icons/fa6"

export const ShorterLink = () => {
    return (

        < section className="bg-lightBg rounded-lg p-3 w-full justify-center shadow border border-subtitle/15" >

            <section className="flex items-center mb-3">

                <FaLink className="text-2xl text-accentRed mx-2 absolute" />
                <input type="text" placeholder="Ingresa tu enlace aquí" className="input-link" />

            </section>

            <button className="btn-primary">Acortar</button>

        </section >

    )
}
