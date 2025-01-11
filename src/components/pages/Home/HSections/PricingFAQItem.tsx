"use client"
import { useState } from 'react'

const PricingFAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#1F1F3B]/50 backdrop-blur-sm rounded-2xl overflow-hidden">
      <button 
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        <svg 
          className={`w-6 h-6 text-white/60 transition-transform ${isOpen ? 'rotate-45' : ''}`} 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <path d="M12 6L12 18M18 12L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-white/60">
          {answer}
        </div>
      )}
    </div>
  )
}

export default PricingFAQItem
