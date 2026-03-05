import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10">
      
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Logo y descripción */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 tracking-widest mb-4">
            EMBER
          </h3>
          <p className="text-white/40 text-sm leading-relaxed mb-6">
            Una experiencia gastronómica única en el corazón de Buenos Aires.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-yellow-400 transition-colors text-sm tracking-wider">
              IG
            </a>
            <a href="#" className="text-white/40 hover:text-yellow-400 transition-colors text-sm tracking-wider">
              FB
            </a>
            <a href="#" className="text-white/40 hover:text-yellow-400 transition-colors text-sm tracking-wider">
              TW
            </a>
          </div>
        </div>

        {/* Horarios */}
        <div>
          <h4 className="text-white font-bold tracking-widest text-sm mb-6">
            HORARIOS
          </h4>
          <ul className="space-y-3">
            {[
              { day: 'Lunes - Miércoles', hours: '12:00 - 23:00' },
              { day: 'Jueves - Viernes', hours: '12:00 - 00:00' },
              { day: 'Sábado', hours: '11:00 - 01:00' },
              { day: 'Domingo', hours: '11:00 - 22:00' },
            ].map(item => (
              <li key={item.day} className="flex justify-between text-sm">
                <span className="text-white/40">{item.day}</span>
                <span className="text-yellow-400">{item.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-bold tracking-widest text-sm mb-6">
            CONTACTO
          </h4>
          <ul className="space-y-3 text-sm text-white/40">
            <li>📍 Av. Corrientes 1234, CABA</li>
            <li>📞 +54 11 1234-5678</li>
            <li>✉️ reservas@ember.com.ar</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs tracking-wider">
            © 2024 EMBER RESTAURANT. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <p className="text-white/20 text-xs tracking-wider">
            DISEÑADO Y DESARROLLADO POR{' '}
            <a
              href="https://abellastra.netlify.app"
              target="_blank"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              ABEL LASTRA
            </a>
          </p>
        </div>
      </div>

    </footer>
  )
}