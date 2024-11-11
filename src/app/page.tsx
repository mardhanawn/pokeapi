'use client'
import { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header'
import WelcomeModal from '@/components/Modal/WelcomeModal'
import Landing from './sections/Homepage/Landing'
import PokeDex from './sections/Homepage/PokeDex'

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false)
  const pokedexRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isFirstVisit = !localStorage.getItem('hasVisited')
    if (isFirstVisit) {
      setShowWelcome(true)
      localStorage.setItem('hasVisited', 'true')
    }
  }, [])

  const scrollToPokedex = () => {
    pokedexRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <WelcomeModal open={showWelcome} onClose={() => setShowWelcome(false)} />
      <Header />
      <Landing scrollToPokedex={scrollToPokedex} />
      <div ref={pokedexRef}>
        <PokeDex />
      </div>
    </>
  )
}
