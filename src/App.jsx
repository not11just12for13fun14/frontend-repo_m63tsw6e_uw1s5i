import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Calculator from './components/Calculator'
import Team from './components/Team'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white" style={{
      ['--acc']:'#81D8D0',
    }}>
      <Hero />
      <Projects />
      <Calculator />
      <Team />
      <Contact />
    </div>
  )
}

export default App
