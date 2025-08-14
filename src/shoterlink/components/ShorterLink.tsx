import { FaLink } from 'react-icons/fa6'
import { useForm } from '../../hooks/useForm'
import { postShortLink } from '../../helpers/postShortLink'
import { useLinkStore } from '../../store/useLinkStore'
import { ToastContainer, toast, type TypeOptions } from 'react-toastify'
import { Loading } from './Loading'
import { useState } from 'react'

export const ShorterLink = () => {

    const [loading, setLoading] = useState(false)
    const { inputUrl, onInputChange, onResetForm } = useForm({ inputUrl: '' })
    const addLink = useLinkStore(state => state.addLink)
    
    //fuction para llamar a la notificacion
    const notify = (msg: string, type: TypeOptions, idToast: string) => {

        if (idToast && toast.isActive(idToast)) return;
        toast(msg, { type, toastId: idToast })

    }

    //funcion para crear el short link al clicar boton
    const createShortLink = async (inputUrl: string) => {

        //validacion de que no este vacio el input
        if (!inputUrl?.trim()) {

            notify('El campo de la url esta vacio', 'warning', 'empty-link')
            return
        }

        //se valida que se aun URL valida HTTP
        try {

            new URL(inputUrl)

        } catch (error) {

            notify('Url Invalida', 'warning', 'invalid-url')
            return

        }

        try {

            setLoading(true)

            //envia la url al helper y este se conecta con el backend para obtener el idLink
            const dataLink = await postShortLink(inputUrl)

            //lanzamos error en caso de que la respuesta del backend sea error
            if (dataLink.error) throw new Error(dataLink.error)
            
            //actualiza el estado global con el nuevo link acortado
            addLink(dataLink)
            setLoading(false)
            onResetForm()

        } catch (error) {

            const message = error instanceof Error ? error.message : 'Error Desconocido'

            notify(message, 'error', 'error-fetch')
            setLoading(false)
            return

        }

    }

    return (

        < section className="bg-lightBg rounded-lg p-3 w-full justify-center shadow border border-subtitle/15" >

            <section className="flex items-center mb-3">

                <FaLink className="text-2xl text-accentRed mx-2 absolute" />
                <input
                    type="text"
                    placeholder="Ingresa tu enlace aquí"
                    className="input-link"
                    name='inputUrl'
                    value={inputUrl || ''}
                    onChange={onInputChange} />

            </section>

            <button className={`btn-primary ${loading && 'bg-accentBlue! opacity-70 cursor-not-allowed'}`} onClick={() => createShortLink(inputUrl)} disabled={loading}>{ loading ? 'Acortando' : 'Acortar Link' } { loading && <Loading /> }</button>

            <ToastContainer
                position='top-right'
                autoClose={4000}
            />
            

        </section >

    )
}
