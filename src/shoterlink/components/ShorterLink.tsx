import { FaLink } from 'react-icons/fa6'
import { useForm } from '../../hooks/useForm'
import { postShortLink } from '../../helpers/postShortLink'
import { useLinkStore } from '../../store/useLinkStore'
import { ToastContainer, toast, type TypeOptions } from 'react-toastify'
import { Loading } from './Loading'
import { useState } from 'react'

export const ShorterLink = () => {

    const [loading, setLoading] = useState(false)

    const addLink = useLinkStore(state => state.addLink)

    const { inputUrl, onInputChange, onResetForm } = useForm({ inputUrl: '' })

    const notify = (msg: string, type: TypeOptions, idToast: string) => {

        if (idToast && toast.isActive(idToast)) return;
        toast(msg, { type, toastId: idToast })

    }

    const createShortLink = async (inputUrl: string) => {

        if (!inputUrl?.trim()) {

            notify('El campo de la url esta vacio', 'warning', 'empty-link')
            return
        }

        try {

            new URL(inputUrl)

        } catch (error) {

            notify('Url Invalida', 'warning', 'invalid-url')
            return

        }

        try {

            setLoading(true)
            const dataLink = await postShortLink(inputUrl)

            if (dataLink.error) throw new Error(dataLink.error.message) 
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
