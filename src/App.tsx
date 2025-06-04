import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AITools from './components/AITools'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <AITools />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
