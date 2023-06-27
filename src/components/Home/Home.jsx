import React from 'react'
import Features from '../Features/Features'
import ContactUs from '../ContactUs/ContactUs'
import AiPoweredSystem from '../AiPoweredSystem/AiPoweredSystem'
import Hero from '../Hero/Hero'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <ContactUs/>
        <AiPoweredSystem/>
    </div>
  )
}

export default Home