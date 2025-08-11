import { Routes, Route, Navigate } from "react-router"
import { ShoterLinkPage } from "../pages/ShoterLinkPage"
import { MenuBar } from "../UI/components/MenuBar"
import { Footer } from "../UI/components/Footer"

export const AppRouter = () => {
  return (

    <section className="flex flex-col h-auto justify-between">

      <section className="container w-4xl mx-auto p-4 max-xs:w-auto">

        <MenuBar />

        <section>

          <Routes>

            <Route path="/" element={<ShoterLinkPage />} />

            <Route path="/*" element={<Navigate to='/' />} />

          </Routes>

        </section>



      </section>

      <Footer />

    </section>




  )
}
