'use client'

import { motion } from 'framer-motion'
import { Stethoscope, Database } from 'lucide-react'

export default function Stage1GPGateway() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <Stethoscope className="w-8 h-8 text-deep-teal" aria-hidden="true" />
        <h4 className="text-xl font-semibold text-deep-teal">GP Gateway</h4>
      </div>

      <div className="bg-white rounded-lg p-6">
        <motion.div
          className="relative w-full h-48 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <svg
            viewBox="0 0 200 100"
            className="w-full h-full"
            aria-labelledby="dna-animation-title"
          >
            <title id="dna-animation-title">DNA biological verification animation</title>
            <motion.path
              d="M 20 50 Q 50 20, 80 50 T 140 50 T 200 50"
              stroke="#00698f"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 20 50 Q 50 80, 80 50 T 140 50 T 200 50"
              stroke="#2e7d32"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
            />
            {[30, 50, 70, 90, 110, 130, 150, 170].map((x, i) => (
              <motion.line
                key={i}
                x1={x}
                y1="30"
                x2={x}
                y2="70"
                stroke="#00698f"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              />
            ))}
          </svg>
        </motion.div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-eucalyptus-green" aria-hidden="true" />
            <p className="text-sm text-gray-700">
              <strong>Biological Verification:</strong> Cotinine testing through your GP
            </p>
          </div>
          <p className="text-sm text-gray-600 pl-7">
            Your general practitioner initiates the programme with a baseline health assessment
            and biological marker testing to establish your starting point.
          </p>
        </div>
      </div>

      <div className="bg-eucalyptus-green/10 border-l-4 border-eucalyptus-green rounded p-4">
        <p className="text-sm text-gray-800">
          <strong>Integration:</strong> Seamlessly connects with My Health Record for secure
          data management and ongoing monitoring.
        </p>
      </div>
    </div>
  )
}
