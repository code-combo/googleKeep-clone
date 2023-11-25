import { Outlet } from 'react-router-dom'

// Styles
import "./RootLayout.css"

// Components
import Sidenav from '../components/sidenav/Sidenav'
import Navbar from '../components/navbar/Navbar'

export default function RootLayout() {
  return (
    <div className='root-layout'>
      <header>
        <Navbar/>
      </header>
      <main>
        <section> 
          <Sidenav/>
        </section>
        <section className='alaye-section'>
          <Outlet/>
        </section>
      </main>
    </div>
  )
}
