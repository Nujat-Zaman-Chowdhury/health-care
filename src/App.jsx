
import './App.css'
import AppointmentSection from './components/AppointmentSection'
import Footer from './components/Footer'
import Banner from './components/Header/Banner'

import Navbar from './components/Navbar'

function App() {


  return (
    <div className=''>
      
        <div className='max-w-7xl px-[140px]'>
        <Navbar/>
        <Banner/>
        <AppointmentSection/>
        
        </div>
        <Footer/>

    </div>
  )
}

export default App
