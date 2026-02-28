'use client'

import { motion } from 'framer-motion'
import salon from '@/public/hero.jpg'
import Image from 'next/image'
export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"

      > 
      <Image
        src={salon}
        alt='salon'
        fill
        className='object-cover'
        priority
      />
      </div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-yellow-400 tracking-[0.3em] text-sm mb-4"
        >
          RESTAURANTE & BAR
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-9xl font-bold text-white tracking-widest mb-6"
        >
          EMBER
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/70 text-lg md:text-xl max-w-md mb-10"
        >
          Una experiencia gastronómica que despierta todos los sentidos
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4"
        >
          <a
            href="#reservation"
            className="bg-yellow-400 text-black px-8 py-3 text-sm tracking-widest font-bold hover:bg-yellow-300 transition-all duration-300"
          >
            RESERVAR MESA
          </a>
          <a
            href="#menu"
            className="border border-white/50 text-white px-8 py-3 text-sm tracking-widest hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
          >
            VER MENÚ
          </a>
        </motion.div>

      </div>

      {/* Flecha scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        ↓
      </motion.div>

    </section>
  )
}