import { ShorterLink } from "../shoterlink/components/ShorterLink";
import { ShorterLinkList } from "../shoterlink/components/ShorterLinkList";

export const ShoterLinkPage = () => {
  return (

    <section className="text-center max-w-xl m-auto">

      {/* Hero */}
      <section className="mb-12">

        <h1 className="titles">Acorta tus enlaces de forma rápida y sencilla</h1>

        <p className="text-subtitle text-base">Convierte URLs largas en links cortos, profesionales y fáciles de compartir. ¡Ideal para redes sociales, marketing y más!</p>
        <p className="text-subtitle text-base mt-2">¡Empieza ahora y mejora la apariencia de tus enlaces!</p>

      </section>

      {/* shorter links main section */}
      <section className="container flex flex-wrap gap-y-4 w-full m-auto justify-center bg-accentBlue/10 rounded-lg p-4">

        <ShorterLink />
        <ShorterLinkList />

      </section>
    </section>


  )
}
