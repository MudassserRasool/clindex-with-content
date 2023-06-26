import React from 'react'
import Navbar from '../Navbar/Navbar'
import Features from '../Features/Features'
import ContactUs from '../ContactUs/ContactUs'
import AiPoweredSystem from '../AiPoweredSystem/AiPoweredSystem'
import Hero from '../Hero/Hero'
import NewsLatter from '../NewsLatter/NewsLatter'

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