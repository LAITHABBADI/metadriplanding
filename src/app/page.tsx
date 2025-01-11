import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Home from '@/components/pages/Home/Home'
import React from 'react'

const page = () => {
  return (
    <main className='w-full h-full'>
      <Navbar />
      <Home />
      <Footer />
    </main>
  )
}

export default page
