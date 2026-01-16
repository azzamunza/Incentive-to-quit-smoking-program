'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Economic Impact', href: '#economic-impact' },
    { label: 'Get Started', href: '#get-started' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-deep-teal rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg" aria-hidden="true">CA</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-deep-teal">Clean Air Rewards</h1>
              <p className="text-xs text-gray-600">Proposed for Australian Government</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-deep-teal transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-700 hover:text-deep-teal transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          className="md:hidden bg-white border-t border-gray-200"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-deep-teal transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
