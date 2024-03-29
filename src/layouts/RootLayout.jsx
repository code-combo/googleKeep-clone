import { Outlet } from 'react-router-dom'

// Styles
import "./RootLayout.css"

// Components
import Sidenav from '../components/sidenav/Sidenav'
import Searchbar from '../components/searchbar/Searchbar'
import Footer from '../components/footer/Footer'

export default function RootLayout() {
  return (
    <div className='root-layout font-robotoSlab'>
        <Searchbar/>
      <main>
        <section> 
          <Sidenav/>
        </section>
        <section className='outlet child-comp are-rendered'>
          <Outlet/>
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
