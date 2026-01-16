'use client'

import { motion } from 'framer-motion'
import { Heart, TrendingDown, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-teal to-eucalyptus-green text-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0wIDMwaC0yVjQwaDJ2MjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Clean Air Rewards
          </h1>
          <p className="text-xl sm:text-2xl mb-4 text-balance">
            A Proposed Smoking Cessation Programme for Australia
          </p>
          <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto opacity-90 text-balance">
            A data-driven, incentive-based proposal designed to integrate with My Health Record
            and pharmacy networks to support Australians on their journey to quit smoking.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Heart className="w-12 h-12 mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-2">Health First</h2>
            <p className="text-sm opacity-90">
              Biological verification through GP gateway ensures genuine progress
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <TrendingDown className="w-12 h-12 mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-2">Proven Results</h2>
            <p className="text-sm opacity-90">
              Economic analysis shows health savings overtake costs within 3 years
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Award className="w-12 h-12 mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-2">Recognition</h2>
            <p className="text-sm opacity-90">
              Earn official non-smoker status and celebrate your achievement
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#how-it-works"
            className="inline-block bg-white text-deep-teal px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Learn how Clean Air Rewards works"
          >
            Learn How It Works
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  )
}
