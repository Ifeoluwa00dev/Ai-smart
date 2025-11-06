import React from 'react'
import Hero from './components/HeroSection/Hero'
import LiveMarket from './components/LiveMarket'
import Packages from './components/Packages'
import Testimonial from './components/Testimonial'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'
import Realtime from './components/Realtime'
import AboutUs from './components/AboutUs'

import Tutorial from './components/TutorialVideo'

const App = () => {
  return (
    <>
    <Hero/>
    <Realtime/>
    <LiveMarket/>
    <AboutUs/>
    {/* <GetStarted/> */}

    <Tutorial/>
    <Packages/>
    <Testimonial/>
    
    <Footer/>
    </>
  )
}

export default App