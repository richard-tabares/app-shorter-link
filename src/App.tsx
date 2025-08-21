import './App.css'
import { ShoterLinkPage } from './pages/ShoterLinkPage'
import { Footer } from './UI/components/Footer'
import { MenuBar } from './UI/components/MenuBar'

export const App = () => {

  return (

    <section className="flex flex-col h-auto justify-between">

      <section className="container w-4xl mx-auto p-4 max-xs:w-auto">

        <MenuBar />
        <ShoterLinkPage />

      </section>

      <Footer />

    </section>
  )
}
