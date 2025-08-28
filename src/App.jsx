import FeaturesSection from './components/FeaturesSection'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { partnersLogo } from './data/partners'
import Slider from './components/Slider'
import RoadMapSection from './components/RoadMapSection'
import TestimonialsSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import FooterSection from './components/FooterSection'
function App() {
  return (
    <>
      <div className='w-screen min-h-screen fixed 
      z-10 flex justify-center px-6 py-40
    pointer-events-none'>
        <div className=' absolute inset-0 z-0 
        bg-[url("/grid.svg")] opacity-75'></div>

        <img src="/mesh.svg" className='opacity-25 
        absolute bottom-1 h-[600px] z-10' />
        <div className='bg-gradient-to-c from-transparent via-transparent
         to-white absolute inset-0 z-10'>


        </div>
      </div>
      <div className='relative z-20'>
        <Navbar />
        <div className='container mx-auto'>
          <HeroSection />
          <Slider images={partnersLogo} /> 
          <RoadMapSection/>
          <FeaturesSection/>
          <TestimonialsSection/>
          <PricingSection/>
          <FooterSection/>
        </div>
      </div>
    </>
  )

}

export default App
