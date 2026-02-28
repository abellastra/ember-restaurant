'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-yellow-400 tracking-widest">
          EMBER
        </span>
        <ul className="hidden md:flex gap-8 text-sm tracking-wider text-white/80">
          <li><Link href="#about" className="hover:text-yellow-400 transition-colors">NOSOTROS</Link></li>
          <li><Link href="#menu" className="hover:text-yellow-400 transition-colors">MENÚ</Link></li>
          <li><Link href="#gallery" className="hover:text-yellow-400 transition-colors">GALERÍA</Link></li>
          <li><Link href="#reservation" className="hover:text-yellow-400 transition-colors">RESERVAS</Link></li>
        </ul>
        <button className="border border-yellow-400 text-yellow-400 px-4 py-2 text-sm tracking-wider hover:bg-yellow-400 hover:text-black transition-all duration-300">
          RESERVAR
        </button>
      </div>
    </nav>
  )
}