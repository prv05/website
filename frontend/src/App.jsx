import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen min-w-full overflow-x-hidden">
      <Navbar />
      <div className="fixed -top-[20vh] -right-[60vw] w-[150vw] h-[150vw] max-md:w-[200vw] max-md:h-[200vw] max-md:-top-[30vh] max-md:-right-[100vw] bg-[radial-gradient(circle,rgba(253,81,8,0.8)_0%,rgba(0,0,0,0)_65%)] -z-10 pointer-events-none rotate-180 -scale-x-100 opacity-60 mix-blend-screen" />

      <main className="flex-grow w-full">
        <Hero />
      </main>
    </div>
  )
}

export default App
