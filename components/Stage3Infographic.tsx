'use client'

import { motion } from 'framer-motion'
import { Trophy, Star, Crown, TrendingUp, Barcode } from 'lucide-react'

export default function Stage3Infographic() {
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
            <h3 className="text-xl font-bold">STAGE 3: THE APP & REWARDS</h3>
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
            {/* Landscape with houses and trees */}
            <div className="relative bg-gradient-to-b from-sky-300 to-green-300 rounded-2xl p-8 shadow-2xl border-4 border-white overflow-hidden"
              style={{ 
                transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Sky background */}
              <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-green-200 opacity-50"></div>

              {/* Houses */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                <div className="w-12 h-12 bg-yellow-200 border-2 border-yellow-400 rounded shadow-lg"></div>
                <div className="w-10 h-10 bg-blue-200 border-2 border-blue-400 rounded shadow-lg"></div>
                <div className="w-14 h-14 bg-red-200 border-2 border-red-400 rounded shadow-lg"></div>
              </div>

              {/* Trees */}
              <div className="absolute bottom-0 right-4 flex gap-1">
                <span className="text-4xl">🌳</span>
                <span className="text-3xl">🌲</span>
                <span className="text-4xl">🌳</span>
              </div>

              {/* 3D Pyramid - Tier System */}
              <div className="relative z-10 mb-6">
                <motion.div 
                  className="relative mx-auto"
                  style={{ width: '280px', height: '200px' }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* LEVEL UP Text */}
                  <motion.div 
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-bold text-xl shadow-2xl z-20"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⬆️ LEVEL UP
                  </motion.div>

                  {/* Tier 3: Platinum */}
                  <motion.div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded shadow-2xl flex items-center justify-center border-2 border-white"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{ 
                      transform: 'perspective(1000px) rotateX(45deg) translateX(-50%)',
                      transformOrigin: 'center',
                      zIndex: 13
                    }}
                  >
                    <Crown className="w-6 h-6 text-yellow-300 mr-2" />
                    <span className="text-white font-bold text-sm">PLATINUM</span>
                  </motion.div>

                  {/* Tier 2: Transitional */}
                  <motion.div 
                    className="absolute top-16 left-1/2 transform -translate-x-1/2 w-48 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded shadow-2xl flex items-center justify-center border-2 border-white"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ 
                      transform: 'perspective(1000px) rotateX(45deg) translateX(-50%)',
                      transformOrigin: 'center',
                      zIndex: 12
                    }}
                  >
                    <Trophy className="w-7 h-7 text-white mr-2" />
                    <span className="text-white font-bold">TRANSITIONAL</span>
                  </motion.div>

                  {/* Tier 1: Reducer */}
                  <motion.div 
                    className="absolute top-36 left-1/2 transform -translate-x-1/2 w-64 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded shadow-2xl flex items-center justify-center border-2 border-white"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ 
                      transform: 'perspective(1000px) rotateX(45deg) translateX(-50%)',
                      transformOrigin: 'center',
                      zIndex: 11
                    }}
                  >
                    <Star className="w-8 h-8 text-white mr-2" />
                    <span className="text-white font-bold text-lg">REDUCER</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Phone showing reward barcode */}
              <motion.div 
                className="relative bg-gray-900 rounded-2xl p-3 shadow-2xl mx-auto max-w-xs mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="bg-white rounded-xl p-4">
                  <h5 className="text-center font-bold text-sm mb-2 text-gray-900">INCENTIVE DELIVERY</h5>
                  <div className="bg-gray-50 p-3 rounded-lg mb-2">
                    <Barcode className="w-full h-16 text-gray-900" />
                  </div>
                  <p className="text-xs text-center text-gray-600">
                    Milestones unlock retail rewards. Scan at checkout!
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Information Panel */}
        <div className="w-full lg:flex-1 bg-white rounded-2xl shadow-xl p-6 border-l-8 border-purple-500">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-500" />
                Progress Tracking
              </h4>
              <p className="text-sm text-gray-700">
                Dedicated app with &ldquo;Level Up&rdquo; bar filling. Track your journey in real-time with gamified milestones.
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-4 border-l-4 border-amber-500">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-5 h-5 text-amber-600" />
                <h5 className="font-bold text-gray-900">Tier 1: Reducer</h5>
              </div>
              <p className="text-xs text-gray-700 mb-1">4 weeks smoke-free</p>
              <p className="text-xs text-gray-600">Reward: $100 wellness voucher</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-5 h-5 text-blue-600" />
                <h5 className="font-bold text-gray-900">Tier 2: Transitional</h5>
              </div>
              <p className="text-xs text-gray-700 mb-1">3 months smoke-free</p>
              <p className="text-xs text-gray-600">Reward: $250 health reward</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-500">
              <div className="flex items-center gap-2 mb-1">
                <Crown className="w-5 h-5 text-purple-600" />
                <h5 className="font-bold text-gray-900">Tier 3: Platinum</h5>
              </div>
              <p className="text-xs text-gray-700 mb-1">12 months smoke-free</p>
              <p className="text-xs text-gray-600">Reward: $500 achievement bonus</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Barcode className="w-5 h-5 text-eucalyptus-green" />
                Incentive Delivery
              </h4>
              <p className="text-sm text-gray-700">
                Milestones unlock retail rewards. Present barcode for immediate retail rewards at participating stores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
