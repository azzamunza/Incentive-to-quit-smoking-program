'use client'

import { motion } from 'framer-motion'
import { Trophy, Star, Crown } from 'lucide-react'

export default function Stage3Rewards() {
  const tiers = [
    {
      name: 'Reducer',
      icon: Star,
      colour: 'from-amber-500 to-amber-600',
      borderColour: 'border-amber-500',
      achievement: '4 weeks smoke-free',
      reward: '$100 wellness voucher',
    },
    {
      name: 'Transitional',
      icon: Trophy,
      colour: 'from-blue-500 to-blue-600',
      borderColour: 'border-blue-500',
      achievement: '3 months smoke-free',
      reward: '$250 health reward',
    },
    {
      name: 'Platinum',
      icon: Crown,
      colour: 'from-purple-500 to-purple-700',
      borderColour: 'border-purple-500',
      achievement: '12 months smoke-free',
      reward: '$500 achievement bonus',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <Trophy className="w-8 h-8 text-deep-teal" aria-hidden="true" />
        <h4 className="text-xl font-semibold text-deep-teal">Rewards Programme</h4>
      </div>

      <p className="text-gray-700 mb-6">
        Progress through three tiers of recognition and rewards as you achieve smoke-free milestones.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => {
          const Icon = tier.icon
          return (
            <motion.div
              key={tier.name}
              className={`bg-white rounded-lg p-6 border-2 ${tier.borderColour} shadow-lg`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tier.colour} flex items-center justify-center`}
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 360 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
              >
                <Icon className="w-8 h-8 text-white" aria-hidden="true" />
              </motion.div>

              <h5 className="text-xl font-bold text-center mb-2 text-gray-900">
                {tier.name}
              </h5>

              <div className="space-y-3 text-center">
                <div className="bg-gray-50 rounded p-3">
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                    Achievement
                  </p>
                  <p className="font-semibold text-deep-teal">{tier.achievement}</p>
                </div>

                <div className="bg-eucalyptus-green/10 rounded p-3">
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                    Reward
                  </p>
                  <p className="font-semibold text-eucalyptus-green">{tier.reward}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="bg-deep-teal/10 border-l-4 border-deep-teal rounded p-4 mt-6">
        <p className="text-sm text-gray-800">
          <strong>Gamification Design:</strong> Each tier unlocks progressively greater rewards,
          providing continuous motivation throughout your cessation journey. Rewards can be used
          for health and wellness services, gym memberships, or healthy lifestyle products.
        </p>
      </div>
    </div>
  )
}
