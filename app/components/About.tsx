'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import about from "@/public/about.jpg"
export default function About() {
  return (
    <section id="about" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[500px]"
        >
          <Image
            src={about}
            alt="Nuestro restaurante"
            fill
            className="object-cover"
          />
          {/* Borde decorativo dorado */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-yellow-400/30 -z-10" />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-400 tracking-[0.3em] text-sm mb-4">
            NUESTRA HISTORIA
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Pasión por la<br />
            <span className="text-yellow-400">gastronomía</span>
          </h2>
          <p className="text-white/60 mb-6 leading-relaxed">
            Ember nació en 2018 con una visión simple: crear experiencias gastronómicas que van más allá de la comida. Cada plato es una historia, cada visita un recuerdo.
          </p>
          <p className="text-white/60 mb-10 leading-relaxed">
            Nuestro chef ejecutivo, con más de 15 años de experiencia en cocinas de Buenos Aires y Europa, lidera un equipo apasionado que trabaja con productos frescos y de temporada.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            {[
              { number: '6+', label: 'Años de experiencia' },
              { number: '50+', label: 'Platos en carta' },
              { number: '10k+', label: 'Clientes felices' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-yellow-400">{stat.number}</p>
                <p className="text-white/50 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}