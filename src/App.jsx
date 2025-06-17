import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import OurPartners from './components/OurPartners'
import PartnerBenefits from './components/PartnerBenefits'
import InvestorsSection from './components/InvestorsSection'
import PressSection from './components/PressSection'
import BlogSection from './components/BlogSection'
import Careers from './components/Careers'
import ContactUs from './components/ContactUs'
import CabCompareSection from './components/CabCompareSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <OurPartners />
      <PartnerBenefits />
      <InvestorsSection />
      <PressSection />
      <BlogSection />
      <Careers />
      <ContactUs />
      <CabCompareSection />
    </div>
  )
}

export default App