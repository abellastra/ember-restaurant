'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { menuItems } from '@/app/data/menu'

const categories = ['Todos', 'Entradas', 'Principales', 'Postres']

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="bg-neutral-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 tracking-[0.3em] text-sm mb-4">
            LO QUE OFRECEMOS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Nuestro <span className="text-yellow-400">Menú</span>
          </h2>
        </motion.div>

        {/* Filtros */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm tracking-widest transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-yellow-400 text-black font-bold'
                  : 'border border-white/20 text-white/60 hover:border-yellow-400 hover:text-yellow-400'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid de platos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-neutral-900 overflow-hidden"
            >
              {/* Imagen */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 tracking-wider">
                  {item.category.toUpperCase()}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-bold text-lg">{item.name}</h3>
                  <span className="text-yellow-400 font-bold">${item.price.toLocaleString()}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}