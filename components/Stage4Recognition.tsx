'use client'

import { motion } from 'framer-motion'
import { Shield, FileCheck, Award } from 'lucide-react'

export default function Stage4Recognition() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <Award className="w-8 h-8 text-deep-teal" aria-hidden="true" />
        <h4 className="text-xl font-semibold text-deep-teal">Official Recognition</h4>
      </div>

      <div className="bg-white rounded-lg p-6">
        <motion.div
          className="relative w-full h-64 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative" aria-label="Official Non-Smoker Gold Shield badge animation">
            <motion.div
              className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              transition={{ duration: 1 }}
            />

            <motion.svg
              viewBox="0 0 120 140"
              className="w-48 h-56 relative z-10"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, type: 'spring' }}
            >
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffd700" />
                  <stop offset="50%" stopColor="#ffed4e" />
                  <stop offset="100%" stopColor="#d4af37" />
                </linearGradient>
              </defs>

              <motion.path
                d="M60 10 L70 40 L100 40 L75 60 L85 90 L60 70 L35 90 L45 60 L20 40 L50 40 Z"
                fill="url(#goldGradient)"
                stroke="#d4af37"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              <motion.circle
                cx="60"
                cy="60"
                r="25"
                fill="#00698f"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              />

              <motion.path
                d="M50 60 L56 66 L70 52"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
              />
            </motion.svg>

            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              <FileCheck className="w-12 h-12 text-eucalyptus-green" aria-hidden="true" />
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <h5 className="text-2xl font-bold text-deep-teal mb-3">
            Official Non-Smoker Status
          </h5>
          <p className="text-gray-700 mb-4">
            After 12 months of verified smoke-free living, receive your official
            Australian Government recognition.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white border-2 border-eucalyptus-green rounded-lg p-4">
          <Shield className="w-6 h-6 text-eucalyptus-green mb-2" aria-hidden="true" />
          <p className="font-semibold text-deep-teal mb-1">Digital Certificate</p>
          <p className="text-xs text-gray-600">
            Secure digital badge integrated with My Health Record
          </p>
        </div>
        <div className="bg-white border-2 border-eucalyptus-green rounded-lg p-4">
          <FileCheck className="w-6 h-6 text-eucalyptus-green mb-2" aria-hidden="true" />
          <p className="font-semibold text-deep-teal mb-1">Health Benefits</p>
          <p className="text-xs text-gray-600">
            Potential life insurance and health premium reductions
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-deep-teal/10 to-eucalyptus-green/10 border border-deep-teal rounded-lg p-4">
        <p className="text-sm text-gray-800">
          <strong>Long-term Recognition:</strong> Your achievement is permanently recorded,
          providing ongoing recognition of your commitment to a healthier lifestyle and
          potentially unlocking additional health and wellness benefits.
        </p>
      </div>
    </div>
  )
}
