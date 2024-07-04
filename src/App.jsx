
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
    <div className='relative'>
     <div className="absolute top-0 z-[-2] h-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
        <div className='px-3 md:px-6 lg:px-[140px] z-30'>
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
