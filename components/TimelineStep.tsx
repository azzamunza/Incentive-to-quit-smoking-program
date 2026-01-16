'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface TimelineStepProps {
  number: number
  title: string
  description: string
  children: ReactNode
  isLast?: boolean
}

export default function TimelineStep({
  number,
  title,
  description,
  children,
  isLast = false,
}: TimelineStepProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="relative">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <motion.div
          className="flex-shrink-0 w-full md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-deep-teal text-white flex items-center justify-center font-bold text-xl">
              {number}
            </div>
            <div className="h-px flex-grow bg-eucalyptus-green hidden md:block" aria-hidden="true"></div>
          </div>
          <h3 className="text-2xl font-bold text-deep-teal mb-3">{title}</h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </motion.div>

        <motion.div
          className="flex-grow w-full md:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200 shadow-md">
            {children}
          </div>
        </motion.div>
      </div>

      {!isLast && (
        <div className="flex justify-center my-8 md:my-12">
          <div className="w-1 h-16 bg-gradient-to-b from-eucalyptus-green to-deep-teal rounded-full" aria-hidden="true"></div>
        </div>
      )}
    </div>
  )
}
