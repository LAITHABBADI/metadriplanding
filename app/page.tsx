
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Stats from '@/components/Stats'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <motion.div 
          className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: scrollY * 0.2,
            y: scrollY * 0.1,
          }}
        />
        <motion.div 
          className="absolute top-[20%] right-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            x: scrollY * -0.2,
            y: scrollY * 0.15,
          }}
        />
      </div>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
    </main>
  )
}