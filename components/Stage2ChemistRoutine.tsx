'use client'

import { motion } from 'framer-motion'
import { FlaskConical, CheckCircle2 } from 'lucide-react'

export default function Stage2ChemistRoutine() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <FlaskConical className="w-8 h-8 text-deep-teal" aria-hidden="true" />
        <h4 className="text-xl font-semibold text-deep-teal">Chemist Routine</h4>
      </div>

      <div className="bg-white rounded-lg p-6">
        <motion.div
          className="relative w-full h-48 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-32 h-40" aria-label="Test strip transitioning from orange to green">
            <motion.div
              className="absolute inset-0 rounded-lg border-4 border-gray-300 bg-gradient-to-b from-gray-100 to-gray-200"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-24 rounded">
                <motion.div
                  className="w-full h-full rounded"
                  initial={{ background: 'linear-gradient(to bottom, #ff9800, #f57c00)' }}
                  animate={{ background: 'linear-gradient(to bottom, #4caf50, #2e7d32)' }}
                  transition={{ duration: 2, delay: 0.5 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.5 }}
                    >
                      <CheckCircle2 className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <motion.p
                  className="text-xs font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  VERIFIED
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-700">
            <strong>Regular Testing:</strong> Convenient pharmacy-based verification
          </p>
          <p className="text-sm text-gray-600">
            Visit your local participating pharmacy for quick, non-invasive testing.
            Watch as the test strip transitions from orange (detecting nicotine) to green
            (verified clean), confirming your progress.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <p className="font-semibold text-deep-teal mb-1">Weekly Testing</p>
          <p className="text-xs text-gray-600">First 4 weeks</p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <p className="font-semibold text-deep-teal mb-1">Fortnightly Testing</p>
          <p className="text-xs text-gray-600">Weeks 5-12</p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <p className="font-semibold text-deep-teal mb-1">Monthly Testing</p>
          <p className="text-xs text-gray-600">Months 4-12</p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <p className="font-semibold text-deep-teal mb-1">Quarterly Testing</p>
          <p className="text-xs text-gray-600">After 12 months</p>
        </div>
      </div>
    </div>
  )
}
