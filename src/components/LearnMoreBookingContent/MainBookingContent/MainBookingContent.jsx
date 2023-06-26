import React from 'react'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import ContactUs from '../ContactUs/ContactUs'
import AiPoweredSystem from '../AiPoweredSystem/AiPoweredSystem'
import { LearnMoreBookingContent } from '../../../static/Content'

const MainBookingContent = () => {
  console.log(LearnMoreBookingContent)
  return (
    <div>
        <Hero/>
        <Features/>
        <ContactUs/>
        <AiPoweredSystem/>
    </div>
  )
}

export default MainBookingContent