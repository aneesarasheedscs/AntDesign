import React from 'react'
import AppHero from '../home/hero'
import AppAbout from '../home/about'
import AppFeature from '../home/feature'
import AppWorks from '../home/works'
import FAQ from '../home/FAQ'
import Pricing from '../home/Pricing'
import Contact from '../home/Contact'

function AppHome() {
  return (
    <div className='main'>
      <AppHero />
      <AppAbout />
      <AppFeature />
      <AppWorks />
      <FAQ />
      <Pricing />
      <Contact />
    </div>
  )
}

export default AppHome