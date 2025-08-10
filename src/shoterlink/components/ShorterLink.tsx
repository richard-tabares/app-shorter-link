import { FaLink } from 'react-icons/fa6'
import { useForm } from '../../hooks/useForm'
import { postShortLink } from '../../helpers/postShortLink'
import { useLinkStore } from '../../store/useLinkStore'
import { ToastContainer, toast, type TypeOptions } from 'react-toastify'

export const ShorterLink = () => {

    const addLink = useLinkStore(state => state.addLink)

    const { inputUrl, onInputChange, onResetForm } = useForm({ inputUrl: '' })


    const notify = (msg: string, type:TypeOptions) => toast(msg, {type})


    const createShortLink = async (inputUrl: string) => {

        // if (!inputUrl.trim()) return
        if (!inputUrl?.trim()) {

            notify('El campo de la url esta vacio', 'warning' )
            return
        }

        try {

            new URL(inputUrl)

        } catch (error) {

            notify('Url Invalida', 'warning')
            return
            
        }

        try {

            const dataLink = await postShortLink(inputUrl)
            addLink(dataLink)
            onResetForm()

        } catch (error) {

            notify('Hubo un problema a intentar acortar la Url, intentalo de nuevo', 'error')
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

            <button className="btn-primary" onClick={() => createShortLink(inputUrl)}>Acortar</button>

            <ToastContainer
                position='top-right'
                autoClose={4000}
            />

        </section >

    )
}
