import { FaArrowsTurnRight, FaQrcode, FaRegCopy } from "react-icons/fa6"

export const ShorterLinkList = () => {
    return (

        <section className="list-link">

            {/* shorter link section */}
            <section className="truncate">

                <a href="#" className="short-link">acortalo.link/avCdq1</a>

                <section className="flex mt-2 w-fit">

                    <FaArrowsTurnRight className="icon-arrow" />

                    <a href="#" className="long-link truncate max-w-xs">https://tudireccion.com/folders/1Gci1VUvzxeMvBJ4OqxWWCTasdasdafavLseytasbXSY</a>

                </section>

            </section>

            {/* function icons */}
            <section className="justify-center items-center">

                <div className="icon-funtions"><FaRegCopy /></div>
                <div className="icon-funtions"><FaQrcode /></div>

            </section>

        </section>

    )
}
