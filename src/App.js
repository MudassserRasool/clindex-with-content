import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import ContactUs from './components/ContactUs/ContactUs'
import AiPoweredSystem from './components/AiPoweredSystem/AiPoweredSystem'
import NewsLatter from './components/NewsLatter/NewsLatter'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <ContactUs/>
      <AiPoweredSystem/>
      <NewsLatter/>
      <Footer/>
    </div>
  )
}

export default App