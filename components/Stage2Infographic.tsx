'use client'

import { motion } from 'framer-motion'
import { Smartphone, CheckCircle2, QrCode } from 'lucide-react'

export default function Stage2Infographic() {
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
            <h3 className="text-xl font-bold">STAGE 2: THE CHEMIST ROUTINE</h3>
            <p className="text-sm opacity-90">(Weekly Verification)</p>
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
            {/* Isometric Chemist Building */}
            <div className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 shadow-2xl border-4 border-white"
              style={{ 
                transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Chemist Sign */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-eucalyptus-green text-white px-6 py-2 rounded-lg shadow-lg font-bold text-lg">
                💊 CHEMIST
              </div>

              {/* Circular road around chemist */}
              <div className="absolute -inset-8 opacity-30 pointer-events-none">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#475569" strokeWidth="20" strokeDasharray="10 5" />
                </svg>
              </div>

              {/* Pharmacist and Customer */}
              <div className="flex justify-center items-center gap-4 mb-6 mt-4">
                <motion.div 
                  className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl">👨‍⚕️</span>
                  <span className="absolute -bottom-2 text-xs bg-white px-2 py-1 rounded shadow">Pharmacist</span>
                </motion.div>
                <div className="text-3xl">🧪</div>
                <motion.div 
                  className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="text-2xl">👤</span>
                </motion.div>
              </div>

              {/* Phone with QR Code */}
              <div className="bg-white rounded-2xl p-4 shadow-lg mx-auto max-w-xs">
                <div className="bg-gray-900 rounded-xl p-3 mb-3">
                  <div className="bg-white p-3 rounded-lg">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="flex justify-center"
                    >
                      <QrCode className="w-24 h-24 text-gray-900" />
                    </motion.div>
                  </div>
                </div>
                <div className="text-center">
                  <Smartphone className="w-6 h-6 mx-auto text-gray-600 mb-1" />
                  <p className="text-xs font-semibold text-gray-700">Scan to Check-In</p>
                </div>
              </div>

              {/* Test Strip Animation */}
              <div className="mt-4 bg-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-600">Digital Test Strip</span>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-eucalyptus-green" />
                  </motion.div>
                </div>
                <div className="flex gap-2">
                  <motion.div 
                    className="flex-1 h-3 rounded-full bg-gradient-to-r from-orange-500 to-green-500"
                    initial={{ width: "30%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  />
                </div>
                <div className="flex justify-between text-xs mt-1 text-gray-600">
                  <span>Orange</span>
                  <span className="text-eucalyptus-green font-bold">→ Green = Clean!</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Information Panel */}
        <div className="w-full lg:flex-1 bg-white rounded-2xl shadow-xl p-6 border-l-8 border-eucalyptus-green">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-eucalyptus-green text-white rounded-full flex items-center justify-center text-sm">1</span>
                Pharmacy Integration
              </h4>
              <p className="text-sm text-gray-700 pl-8">
                Weekly checks through national pharmacy network. Convenient locations across Australia.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-eucalyptus-green text-white rounded-full flex items-center justify-center text-sm">2</span>
                Digital Integration
              </h4>
              <p className="text-sm text-gray-700 pl-8">
                User scans QR code at pharmacy counter. Instant results synced to mobile app.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-eucalyptus-green text-white rounded-full flex items-center justify-center text-sm">3</span>
                Rapid Saliva Testing
              </h4>
              <p className="text-sm text-gray-700 pl-8">
                Non-invasive saliva tests for cotinine levels. Digital &ldquo;test strip&rdquo; graphic animates from Orange to Green to show successful weekly result.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-eucalyptus-green text-white rounded-full flex items-center justify-center text-sm">4</span>
                Immediate Feedback
              </h4>
              <p className="text-sm text-gray-700 pl-8">
                Digital &ldquo;Test Strip&rdquo; graphic transitions from Orange to Green to show successful weekly result.
              </p>
            </div>

            <div className="bg-deep-teal/10 rounded-lg p-4 mt-4">
              <p className="text-xs text-gray-800">
                <strong>📱 Seamless Experience:</strong> Testing frequency reduces over time: Weekly (0-4 weeks) → Fortnightly (5-12 weeks) → Monthly (4-12 months).
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
