import { Outlet } from 'react-router'
import './App.css'
import { Footer } from './UI/public/components/Footer'
import { MenuBar } from './UI/public/components/MenuBar'

export const App = () => {
	return (
		<section className='flex flex-col h-auto justify-between'>
			<section className='container w-4xl mx-auto p-4 max-xs:w-auto'>
				<MenuBar />
				<Outlet />
			</section>
			<Footer />
		</section>
	)
}
