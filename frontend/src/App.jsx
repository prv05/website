import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Connect from './components/Connect'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Chat from './components/Chat'
import AIFloatingIcon from './components/AIFloatingIcon'

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-full overflow-x-hidden">
      <Navbar />
      <div className="fixed -top-[20vh] -right-[60vw] w-[150vw] h-[150vw] max-md:w-[200vw] max-md:h-[200vw] max-md:-top-[30vh] max-md:-right-[100vw] bg-[radial-gradient(circle,rgba(253,81,8,0.8)_0%,rgba(0,0,0,0)_65%)] -z-10 pointer-events-none rotate-180 -scale-x-100 opacity-60 mix-blend-screen" />

      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>

      <AIFloatingIcon />
    </div>
  )
}

export default App
