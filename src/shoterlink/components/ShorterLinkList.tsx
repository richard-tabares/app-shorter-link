import { FaArrowsTurnRight, FaQrcode, FaRegCopy } from "react-icons/fa6"
import { useLinkStore } from "../../store/useLinkStore"

export const ShorterLinkList = () => {


    const links = useLinkStore(state => state.links)
    // const shortLink = useLinkStore(state => state.links.shortLink)

    return (

        links.map((link, index) => (

            <section className="list-link" key={index}>

                {/* shorter link section */}
                <section className="truncate">

                    <a href="#" className="short-link">{link.shortLink}</a>

                    <section className="flex mt-2 w-fit">

                        <FaArrowsTurnRight className="icon-arrow" />

                        <a href="#" className="long-link truncate max-w-xs">{

                            link.url
                        }</a>

                    </section>

                </section>

                {/* function icons */}
                <section className="justify-center items-center">

                    <div className="icon-funtions"><FaRegCopy /></div>
                    <div className="icon-funtions"><FaQrcode /></div>

                </section>

            </section>
        )



        )

    )
}
