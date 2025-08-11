import { FaArrowsTurnRight, FaQrcode, FaRegCopy } from "react-icons/fa6"
import { useLinkStore } from "../../store/useLinkStore"
import { ToastContainer, toast, type TypeOptions } from "react-toastify"

export const ShorterLinkList = () => {

    const notify = (msg: string, type: TypeOptions, idToast: string) => {

        if (idToast && toast.isActive(idToast)) return;
        toast(msg, { type, toastId: idToast })
        
    }
    const links = useLinkStore(state => state.links)
    // const shortLink = useLinkStore(state => state.links.shortLink)

    //funcion para copiar en portapapeles con el icono
    const copyButtom = (textToCopy: string) => {

        navigator.clipboard.writeText(textToCopy)
        notify('Texto copiado', 'info', 'copy-text')

    }

    return (

        links.map((link, index) => (

            <section className="list-link" key={index}>

                {/* shorter link section */}
                <section className="truncate">

                    <a href={ link.shortLink } className="short-link" target="_blank">{link.shortLink}</a>

                    <section className="flex mt-2 w-fit">

                        <FaArrowsTurnRight className="icon-arrow" />

                        <a href={ link.url } className="long-link truncate max-w-xs" target="_blank">{ link.url }</a>

                    </section>

                </section>

                {/* function icons */}
                <section className="justify-center items-center">

                    <div className="icon-funtions" onClick={() => copyButtom(link.shortLink)}><FaRegCopy /></div>
                    <div className="icon-funtions"><FaQrcode /></div>

                </section>

            </section>
        )



        )

    )
}
