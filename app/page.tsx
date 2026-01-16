'use client'

import StickyHeader from '@/components/StickyHeader'
import Hero from '@/components/Hero'
import TimelineStep from '@/components/TimelineStep'
import Stage1GPGateway from '@/components/Stage1GPGateway'
import Stage2ChemistRoutine from '@/components/Stage2ChemistRoutine'
import Stage3Rewards from '@/components/Stage3Rewards'
import Stage4Recognition from '@/components/Stage4Recognition'
import EconomicAnalysis from '@/components/EconomicAnalysis'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <StickyHeader />
      
      <Hero />

      <section
        id="how-it-works"
        className="py-20 bg-white"
        aria-labelledby="how-it-works-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-bold text-deep-teal mb-4">
              How Clean Air Rewards Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Follow our four-stage programme designed to support your journey
              to becoming smoke-free with verification, routine testing, rewards, and recognition.
            </p>
          </div>

          <div className="space-y-8">
            <TimelineStep
              number={1}
              title="GP Gateway"
              description="Begin your journey with professional medical support and biological verification through your trusted general practitioner."
            >
              <Stage1GPGateway />
            </TimelineStep>

            <TimelineStep
              number={2}
              title="Chemist Routine"
              description="Regular testing at your local pharmacy ensures ongoing verification and provides convenient support throughout your cessation journey."
            >
              <Stage2ChemistRoutine />
            </TimelineStep>

            <TimelineStep
              number={3}
              title="Rewards Programme"
              description="Earn recognition and financial incentives as you progress through three achievement tiers, providing motivation at every milestone."
            >
              <Stage3Rewards />
            </TimelineStep>

            <TimelineStep
              number={4}
              title="Official Recognition"
              description="Celebrate your success with official Australian Government recognition and enjoy the long-term benefits of your smoke-free lifestyle."
              isLast={true}
            >
              <Stage4Recognition />
            </TimelineStep>
          </div>
        </div>
      </section>

      <EconomicAnalysis />

      <section id="get-started" className="py-20 bg-gradient-to-br from-deep-teal to-eucalyptus-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Talk to your GP today about joining the Clean Air Rewards programme
            and take the first step towards a healthier, smoke-free future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#overview"
              className="inline-block bg-white text-deep-teal px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Learn More
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
                An Australian Government initiative supporting smoking cessation through
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
              &copy; 2026 Australian Government. This is a proposal demonstration website.
              All information is for illustrative purposes.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
