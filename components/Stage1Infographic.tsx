'use client'

import { motion } from 'framer-motion'
import { User, Shield, Database } from 'lucide-react'

export default function Stage1Infographic() {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Stage Label */}
        <div className="w-full lg:w-auto lg:absolute lg:-left-4 lg:top-8 z-10">
          <div className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-xl inline-block">
            <h3 className="text-xl font-bold">STAGE 1: THE GP GATEWAY</h3>
          </div>
        </div>

        {/* Visual Section */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end lg:mt-20">
          <motion.div 
            className="relative w-full max-w-md"
            initial={{ rotateX: 30, rotateY: -15 }}
            whileInView={{ rotateX: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Isometric GP Clinic Building */}
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 shadow-2xl border-4 border-white"
              style={{ 
                transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Clinic Sign */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-deep-teal text-white px-6 py-2 rounded-lg shadow-lg font-bold text-lg">
                🏥 GP CLINIC
              </div>

              {/* Doctor and Patient Illustration */}
              <div className="flex justify-center items-center gap-6 mb-6 mt-4">
                <motion.div 
                  className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <User className="w-12 h-12 text-white" />
                  <span className="absolute -bottom-2 text-xs bg-white px-2 py-1 rounded shadow">GP</span>
                </motion.div>
                <div className="text-4xl">💬</div>
                <motion.div 
                  className="w-20 h-20 bg-red-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <User className="w-12 h-12 text-white" />
                  <span className="absolute -bottom-2 text-xs bg-white px-2 py-1 rounded shadow">Patient</span>
                </motion.div>
              </div>

              {/* Hair Follicle Test Diagram */}
              <div className="bg-white rounded-lg p-4 shadow-inner">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">💇</div>
                  <h4 className="font-bold text-gray-800">3-MONTH NICOTINE HISTORY</h4>
                </div>
                
                {/* Bar Chart - Biological History */}
                <div className="flex items-end justify-center gap-2 h-24 mb-2">
                  {[40, 55, 70, 85, 95, 100, 90, 80].map((height, i) => (
                    <motion.div
                      key={i}
                      className={`flex-1 rounded-t ${
                        i < 3 ? 'bg-red-500' : i < 5 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ height: `${height}%` }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                  ))}
                </div>
                <p className="text-xs text-center text-gray-600">3 months → Baseline Established</p>
              </div>

              {/* myGovID Badge */}
              <motion.div 
                className="mt-4 flex items-center justify-center gap-2 bg-deep-teal/10 rounded-lg p-3"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Shield className="w-6 h-6 text-deep-teal" />
                <span className="font-semibold text-deep-teal">myGovID</span>
                <Database className="w-5 h-5 text-eucalyptus-green" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Information Panel */}
        <div className="w-full lg:flex-1 bg-white rounded-2xl shadow-xl p-6 border-l-8 border-deep-teal">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-deep-teal text-white rounded-full flex items-center justify-center text-sm">1</span>
                Initial Consultation
              </h4>
              <p className="text-sm text-gray-700 pl-8">
                Visit GP to express interest in Clean Air Rewards program
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-deep-teal text-white rounded-full flex items-center justify-center text-sm">2</span>
                Biological Verification
              </h4>
              <p className="text-sm text-gray-700 pl-8">
                Eligibility based on rigorous biological test
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-deep-teal text-white rounded-full flex items-center justify-center text-sm">3</span>
                Verification Method
              </h4>
              <p className="text-sm text-gray-700 pl-8">
                DNA-based hair test to analyse history. 3-month biological history verifies 3-month biological history of nicotine use to confirm qualification.
              </p>
            </div>

            <div className="bg-eucalyptus-green/10 rounded-lg p-4 mt-4">
              <p className="text-xs text-gray-800">
                <strong>🔒 Secure Integration:</strong> All data is securely linked to My Health Record with myGovID authentication ensuring privacy and data integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
