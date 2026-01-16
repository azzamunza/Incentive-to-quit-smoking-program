'use client'

import StickyHeader from '@/components/StickyHeader'
import Hero from '@/components/Hero'
import InfographicJourney from '@/components/InfographicJourney'
import EconomicAnalysis from '@/components/EconomicAnalysis'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <StickyHeader />
      
      <Hero />

      {/* Main Infographic Journey - Replaces the old timeline sections */}
      <InfographicJourney />

      <EconomicAnalysis />

      <section id="get-started" className="py-20 bg-gradient-to-br from-deep-teal to-eucalyptus-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Support This Proposal
          </h2>
          <p className="text-xl mb-8 opacity-90">
            This programme is proposed for consideration by the Australian Government.
            If you support this initiative, learn more about existing smoking cessation resources
            and share your feedback with health authorities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#overview"
              className="inline-block bg-white text-deep-teal px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Learn More About the Proposal
            </a>
            <a
              href="https://www.healthdirect.gov.au/smoking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-eucalyptus-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-eucalyptus-green/90 transition-colors shadow-lg border-2 border-white"
            >
              Find Support Resources
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Clean Air Rewards</h3>
              <p className="text-gray-400 text-sm">
                A proposed programme for the Australian Government supporting smoking cessation through
                data-driven incentives and professional health integration.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#overview" className="text-gray-400 hover:text-white transition-colors">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#economic-impact" className="text-gray-400 hover:text-white transition-colors">
                    Economic Impact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.quitnow.gov.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Quitline: 13 7848
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.healthdirect.gov.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Health Direct
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2026 Clean Air Rewards Proposal. This is a proposal website submitted for
              Australian Government consideration. This programme is not currently available.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
