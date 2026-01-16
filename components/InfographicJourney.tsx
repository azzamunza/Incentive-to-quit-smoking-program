'use client'

import { motion } from 'framer-motion'
import Stage1Infographic from './Stage1Infographic'
import Stage2Infographic from './Stage2Infographic'
import Stage3Infographic from './Stage3Infographic'
import Stage4Infographic from './Stage4Infographic'

export default function InfographicJourney() {
  return (
    <div 
      className="relative bg-gradient-to-b from-gray-100 via-gray-50 to-blue-50 py-20"
      id="infographic-journey"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-deep-teal text-white px-8 py-4 rounded-lg shadow-lg mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <div className="text-left">
                <h2 className="text-3xl font-bold">Clean Air Rewards</h2>
                <p className="text-sm opacity-90">Your Journey to a Smoke-Free Life</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SVG Road Path - Winding through the stages */}
        <svg 
          className="absolute left-1/2 top-24 transform -translate-x-1/2 w-full h-full max-w-4xl pointer-events-none hidden lg:block"
          viewBox="0 0 800 3200"
          preserveAspectRatio="xMidYMin meet"
          style={{ zIndex: 0 }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          
          {/* Main road path */}
          <motion.path
            d="M 400 50 
               L 400 400
               Q 400 500, 300 550
               L 200 600
               Q 150 625, 150 675
               L 150 900
               Q 150 950, 200 975
               L 500 1100
               Q 550 1125, 550 1175
               L 550 1400
               Q 550 1450, 500 1475
               L 300 1600
               Q 250 1625, 250 1675
               L 250 1900
               Q 250 1950, 300 1975
               L 500 2100
               Q 550 2125, 550 2175
               L 550 2400
               Q 550 2450, 500 2475
               L 300 2600
               Q 250 2625, 250 2675
               L 250 2900
               L 400 3000
               L 400 3150"
            fill="none"
            stroke="url(#roadGradient)"
            strokeWidth="100"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Road center line dashes */}
          <motion.path
            d="M 400 50 
               L 400 400
               Q 400 500, 300 550
               L 200 600
               Q 150 625, 150 675
               L 150 900
               Q 150 950, 200 975
               L 500 1100
               Q 550 1125, 550 1175
               L 550 1400
               Q 550 1450, 500 1475
               L 300 1600
               Q 250 1625, 250 1675
               L 250 1900
               Q 250 1950, 300 1975
               L 500 2100
               Q 550 2125, 550 2175
               L 550 2400
               Q 550 2450, 500 2475
               L 300 2600
               Q 250 2625, 250 2675
               L 250 2900
               L 400 3000
               L 400 3150"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="20 30"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
          />
        </svg>

        {/* Stage Sections */}
        <div className="relative space-y-32" style={{ zIndex: 1 }}>
          {/* START Marker */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-eucalyptus-green text-white px-8 py-4 rounded-full font-bold text-2xl shadow-2xl border-4 border-white">
              🏁 START
            </div>
          </motion.div>

          {/* Stage 1: GP Gateway */}
          <Stage1Infographic />

          {/* Stage 2: Chemist Routine */}
          <Stage2Infographic />

          {/* Stage 3: App & Rewards */}
          <Stage3Infographic />

          {/* Stage 4: Legal Recognition */}
          <Stage4Infographic />

          {/* FINISH Marker */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-2xl shadow-2xl border-4 border-white">
              🏆 FINISH - 12 MONTH THRESHOLD
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
