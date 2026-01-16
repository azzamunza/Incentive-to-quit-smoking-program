'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Lock, FileCheck, Sparkles } from 'lucide-react'

export default function Stage4Infographic() {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
        {/* Stage Label */}
        <div className="w-full lg:w-auto lg:absolute lg:-right-4 lg:top-8 z-10">
          <div className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-xl inline-block">
            <h3 className="text-xl font-bold">STAGE 4: LEGAL RECOGNITION</h3>
          </div>
        </div>

        {/* Visual Section */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-start lg:mt-20">
          <motion.div 
            className="relative w-full max-w-md"
            initial={{ rotateX: 30, rotateY: 15 }}
            whileInView={{ rotateX: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Water/Ocean Background with Finish Line */}
            <div className="relative bg-gradient-to-b from-sky-400 to-blue-400 rounded-2xl p-8 shadow-2xl border-4 border-white overflow-hidden"
              style={{ 
                transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)',
                transformStyle: 'preserve-3d',
                minHeight: '400px'
              }}
            >
              {/* Waves */}
              <div className="absolute bottom-0 left-0 right-0 h-32">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
                  <motion.path
                    d="M0,50 Q150,70 300,50 T600,50 T900,50 T1200,50 L1200,120 L0,120 Z"
                    fill="rgba(59, 130, 246, 0.3)"
                    animate={{ d: [
                      "M0,50 Q150,70 300,50 T600,50 T900,50 T1200,50 L1200,120 L0,120 Z",
                      "M0,50 Q150,30 300,50 T600,50 T900,50 T1200,50 L1200,120 L0,120 Z",
                      "M0,50 Q150,70 300,50 T600,50 T900,50 T1200,50 L1200,120 L0,120 Z"
                    ]}}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
              </div>

              {/* Seagulls */}
              <div className="absolute top-4 left-8 flex gap-4">
                <motion.span 
                  className="text-2xl"
                  animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  🕊️
                </motion.span>
                <motion.span 
                  className="text-2xl"
                  animate={{ x: [0, -15, 0], y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  🕊️
                </motion.span>
              </div>

              {/* Wind turbines/clean air symbols */}
              <div className="absolute top-8 right-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="text-3xl"
                >
                  🌬️
                </motion.div>
              </div>

              {/* Finish Line Arch */}
              <div className="relative z-10 mb-6">
                <motion.div 
                  className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl p-4 shadow-2xl mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-3xl">🏁</div>
                    <h4 className="text-white font-bold text-xl">12 MONTH THRESHOLD</h4>
                    <div className="text-3xl">🏁</div>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 h-2 rounded-full"></div>
                </motion.div>

                {/* Fireworks */}
                <div className="absolute -top-4 left-1/4">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                  >
                    <Sparkles className="w-8 h-8 text-yellow-300" />
                  </motion.div>
                </div>
                <div className="absolute -top-4 right-1/4">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.7 }}
                  >
                    <Sparkles className="w-8 h-8 text-yellow-300" />
                  </motion.div>
                </div>
              </div>

              {/* Gold Shield Badge - Official Certificate */}
              <motion.div 
                className="relative mx-auto w-48 h-48 mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, type: "spring" }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-yellow-300 rounded-full blur-2xl opacity-50"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Gold Shield */}
                <svg viewBox="0 0 100 120" className="w-full h-full relative z-10">
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffd700" />
                      <stop offset="50%" stopColor="#ffed4e" />
                      <stop offset="100%" stopColor="#d4af37" />
                    </linearGradient>
                  </defs>
                  
                  {/* Shield shape */}
                  <path
                    d="M50,10 L90,30 L90,60 Q90,90 50,110 Q10,90 10,60 L10,30 Z"
                    fill="url(#goldGradient)"
                    stroke="#d4af37"
                    strokeWidth="2"
                  />
                  
                  {/* Inner circle */}
                  <circle cx="50" cy="55" r="25" fill="#00698f" />
                  
                  {/* Checkmark */}
                  <path
                    d="M40,55 L46,62 L60,46"
                    stroke="white"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Text "OFFICIAL" */}
                  <text x="50" y="95" textAnchor="middle" fill="#00698f" fontSize="12" fontWeight="bold">
                    OFFICIAL
                  </text>
                  <text x="50" y="107" textAnchor="middle" fill="#00698f" fontSize="8" fontWeight="bold">
                    NON-SMOKER
                  </text>
                </svg>
              </motion.div>

              {/* Locked Status Badge */}
              <motion.div 
                className="flex items-center justify-center gap-2 bg-yellow-400 rounded-lg p-3 shadow-lg"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Lock className="w-6 h-6 text-gray-900" />
                <span className="font-bold text-gray-900">LOCKED STATUS</span>
              </motion.div>

              {/* My Health Record Integration */}
              <motion.div 
                className="mt-4 bg-white rounded-xl p-4 shadow-lg"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-6 h-6 text-deep-teal" />
                  <h5 className="font-bold text-deep-teal">My Health Record</h5>
                </div>
                <p className="text-xs text-center text-gray-600">
                  Permanent certification integrated with national health system
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Information Panel */}
        <div className="w-full lg:flex-1 bg-white rounded-2xl shadow-xl p-6 border-l-8 border-yellow-500">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-600" />
                Legal Recognition
              </h4>
              <p className="text-sm text-gray-700">
                12 months clean = Government-Verified Official Certificate. Awarded Official Non-Smoker Gold Shield.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-eucalyptus-green" />
                Official Certificate
              </h4>
              <p className="text-sm text-gray-700">
                Awarded Official Non-Smoker Gold Shield certificate recognized across Australia.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-deep-teal" />
                Legal & Financial Integration
              </h4>
              <p className="text-sm text-gray-700">
                Status locked into digital health profile. Permanent record in My Health Record system.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-4 border-l-4 border-yellow-500">
              <h5 className="font-bold text-gray-900 mb-2">Long-term Benefits</h5>
              <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                <li>Reduced insurance premiums</li>
                <li>Priority health services access</li>
                <li>Employer wellness incentives</li>
                <li>Lifetime health achievement badge</li>
              </ul>
            </div>

            <div className="bg-deep-teal/10 rounded-lg p-4">
              <p className="text-xs text-gray-800">
                <strong>🎉 Celebration:</strong> Your achievement is permanently recognized by the Australian Government, providing lasting benefits for insurance, employment, and personal pride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
