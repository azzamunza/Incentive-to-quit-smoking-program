'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Heart } from 'lucide-react'

export default function EconomicAnalysis() {
  const data = [
    { year: 0, cost: 0, savings: 0 },
    { year: 1, cost: 150, savings: 50 },
    { year: 2, cost: 200, savings: 120 },
    { year: 3, cost: 230, savings: 250 },
    { year: 5, cost: 280, savings: 450 },
    { year: 10, cost: 350, savings: 950 },
  ]

  const maxValue = 1000
  const chartHeight = 350

  return (
    <section id="economic-impact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-teal mb-4">
            Projected Economic Impact Analysis
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Projections show that health savings would overtake programme costs within 3 years, delivering long-term
            value for participants and the healthcare system.
          </p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="relative" style={{ height: 450 }}>
            <svg
              viewBox={`0 0 600 ${chartHeight + 60}`}
              className="w-full"
              role="img"
              aria-label="Projected economic analysis chart showing programme costs versus health savings over 10 years"
            >
              <motion.text
                x="50"
                y="20"
                className="text-sm fill-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                $ Million
              </motion.text>

              <line
                x1="80"
                y1="40"
                x2="80"
                y2={chartHeight + 40}
                stroke="#cbd5e1"
                strokeWidth="2"
              />
              <line
                x1="80"
                y1={chartHeight + 40}
                x2="560"
                y2={chartHeight + 40}
                stroke="#cbd5e1"
                strokeWidth="2"
              />

              {[0, 250, 500, 750, 1000].map((val, i) => {
                const y = 40 + (chartHeight * (1 - val / maxValue))
                return (
                  <g key={val}>
                    <line
                      x1="75"
                      y1={y}
                      x2="80"
                      y2={y}
                      stroke="#94a3b8"
                      strokeWidth="2"
                    />
                    <text x="60" y={y + 5} className="text-xs fill-gray-500" textAnchor="end">
                      {val}
                    </text>
                    <line
                      x1="80"
                      y1={y}
                      x2="560"
                      y2={y}
                      stroke="#e2e8f0"
                      strokeWidth="1"
                      strokeDasharray="4"
                    />
                  </g>
                )
              })}

              {data.map((point, i) => {
                if (i === 0) return null
                const prevPoint = data[i - 1]
                const x1 = 80 + (prevPoint.year / 10) * 480
                const x2 = 80 + (point.year / 10) * 480
                const y1Cost = 40 + (chartHeight * (1 - prevPoint.cost / maxValue))
                const y2Cost = 40 + (chartHeight * (1 - point.cost / maxValue))
                const y1Savings = 40 + (chartHeight * (1 - prevPoint.savings / maxValue))
                const y2Savings = 40 + (chartHeight * (1 - point.savings / maxValue))

                return (
                  <g key={i}>
                    <motion.line
                      x1={x1}
                      y1={y1Cost}
                      x2={x2}
                      y2={y2Cost}
                      stroke="#00698f"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                    <motion.line
                      x1={x1}
                      y1={y1Savings}
                      x2={x2}
                      y2={y2Savings}
                      stroke="#2e7d32"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                  </g>
                )
              })}

              {data.map((point, i) => {
                const x = 80 + (point.year / 10) * 480
                const yCost = 40 + (chartHeight * (1 - point.cost / maxValue))
                const ySavings = 40 + (chartHeight * (1 - point.savings / maxValue))

                return (
                  <g key={i}>
                    <motion.circle
                      cx={x}
                      cy={yCost}
                      r="5"
                      fill="#00698f"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 + 0.5 }}
                    />
                    <motion.circle
                      cx={x}
                      cy={ySavings}
                      r="5"
                      fill="#2e7d32"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 + 0.5 }}
                    />
                    <text
                      x={x}
                      y={chartHeight + 60}
                      className="text-xs fill-gray-600"
                      textAnchor="middle"
                    >
                      Year {point.year}
                    </text>
                  </g>
                )
              })}

              <motion.circle
                cx="320"
                cy="100"
                r="30"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="3"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              />
              <motion.text
                x="320"
                y="80"
                className="text-xs fill-gray-700 font-bold"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
              >
                Breakeven Point
              </motion.text>
            </svg>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-deep-teal rounded" aria-hidden="true"></div>
              <span className="text-sm text-gray-700">Programme Costs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-eucalyptus-green rounded" aria-hidden="true"></div>
              <span className="text-sm text-gray-700">Health Savings</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <DollarSign className="w-10 h-10 text-deep-teal mb-3" aria-hidden="true" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Projected Cost Efficiency</h3>
            <p className="text-gray-700 text-sm">
              Programme costs would be offset by reduced healthcare expenditure on smoking-related
              illnesses within 3 years.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Heart className="w-10 h-10 text-eucalyptus-green mb-3" aria-hidden="true" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Projected Health Benefits</h3>
            <p className="text-gray-700 text-sm">
              Reduced hospitalisations, GP visits, and medication costs would create substantial
              savings for the healthcare system.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <TrendingUp className="w-10 h-10 text-deep-teal mb-3" aria-hidden="true" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Projected Long-term Value</h3>
            <p className="text-gray-700 text-sm">
              By year 10, health savings would nearly triple the programme investment, delivering
              exceptional return on investment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
