import React from 'react'
import Hero from './HSections/Hero'
import Features from './HSections/Features'
import Pricing from './HSections/Pricing'
import Faq from './HSections/Faq'

const Home = () => {
  return (
    <div className='w-full h-full'>
      <Hero />
      <Features />
      <Pricing />
      <Faq />
    </div>
  )
}

export default Home
