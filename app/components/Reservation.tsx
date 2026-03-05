'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservation" className="bg-neutral-950 py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 tracking-[0.3em] text-sm mb-4">
            RESERVÁ TU LUGAR
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Hacé tu <span className="text-yellow-400">Reserva</span>
          </h2>
          <p className="text-white/50 mt-4">
            Reservá con anticipación y asegurá tu mesa
          </p>
        </motion.div>

        {/* Formulario */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <p className="text-6xl mb-6">🍽️</p>
            <h3 className="text-2xl font-bold text-white mb-3">
              ¡Reserva confirmada!
            </h3>
            <p className="text-white/50">
              Te esperamos, {formData.name}. Te contactaremos por email para confirmar tu mesa.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 border border-yellow-400 text-yellow-400 px-6 py-2 text-sm tracking-widest hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              HACER OTRA RESERVA
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Nombre */}
            <div className="flex flex-col gap-2">
              <label className="text-white/50 text-sm tracking-wider">NOMBRE</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="bg-neutral-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors placeholder:text-white/20"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-white/50 text-sm tracking-wider">EMAIL</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="bg-neutral-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors placeholder:text-white/20"
              />
            </div>

            {/* Fecha */}
            <div className="flex flex-col gap-2">
              <label className="text-white/50 text-sm tracking-wider">FECHA</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="bg-neutral-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            {/* Hora */}
            <div className="flex flex-col gap-2">
              <label className="text-white/50 text-sm tracking-wider">HORA</label>
              <select
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="bg-neutral-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
              >
                <option value="">Seleccioná un horario</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
              </select>
            </div>

            {/* Personas */}
            <div className="flex flex-col gap-2">
              <label className="text-white/50 text-sm tracking-wider">PERSONAS</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="bg-neutral-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
              >
                {[1,2,3,4,5,6,7,8].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>
                ))}
              </select>
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-white/50 text-sm tracking-wider">MENSAJE (OPCIONAL)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Alguna solicitud especial, alergias, ocasión especial..."
                rows={4}
                className="bg-neutral-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors placeholder:text-white/20 resize-none"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-4 font-bold tracking-widest hover:bg-yellow-300 transition-all duration-300"
              >
                CONFIRMAR RESERVA
              </button>
            </div>

          </motion.form>
        )}

      </div>
    </section>
  )
}