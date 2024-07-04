
import './App.css'
import AppointmentSection from './components/AppointmentSection'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Banner from './components/Header/Banner'
import Comprehensive from "./components/Header/Comprehensive"
import Main from './components/Main'
import Navbar from './components/Navbar'
import Textimonial from './components/Textimonial'

function App() {


  return (
    <div className=''>
      
        <div className='px-3 md:px-6 lg:px-[140px]'>
        <Navbar/>
        <Banner/>
        <Comprehensive/>
        <Main/>
        <Textimonial/>
        <Faq/>
        <AppointmentSection/>
        </div>
        <Footer/>

    </div>
  )
}

export default App
