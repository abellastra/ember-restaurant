'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'


const images = [
  { src: '/restaurante/gallery1.jpg', alt: 'Ambiente del restaurante' },
  { src: '/restaurante/gallery2.jpg', alt: 'Nuestra cocina' },
  { src: '/restaurante/gallery3.jpg', alt: 'Mesa especial' },
  { src: '/restaurante/gallery4.jpg', alt: 'Bar' },
  { src: '/restaurante/gallery5.jpg', alt: 'Terraza' },
  { src: '/restaurante/gallery6.jpg', alt: 'Evento especial' },
]

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="gallery" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 tracking-[0.3em] text-sm mb-4">
            NUESTRO ESPACIO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            La <span className="text-yellow-400">Experiencia</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              onClick={() => setSelected(image.src)}
              className="relative h-64 overflow-hidden cursor-pointer group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  +
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative w-full max-w-4xl h-[80vh]"
          >
            <Image
              src={selected}
              alt="Foto ampliada"
              fill
              className="object-contain"
            />
          </motion.div>
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-yellow-400 transition-colors"
          >
            ×
          </button>
        </motion.div>
      )}

    </section>
  )
}