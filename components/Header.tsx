'use client'

import { useState } from 'react'
import { Droplet, Menu, X} from 'lucide-react'

const navigationLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/boiler-service', label: 'Boiler Service' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#contact', label: 'Contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Droplet className="w-5 h-5 text-primary mr-2" />
            <h1 className="text-sm"><span className='font-bold gradient-text'>FlowFix</span> Plumbing</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground relative w-6 h-6"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${isMenuOpen ? 'rotate-90' : 'rotate-0'} transition-transform duration-300`} />
              ) : (
                <Menu className={`w-6 h-6 ${isMenuOpen ? 'rotate-90' : 'rotate-0'} transition-transform duration-300`} />
              )}
            </div>
          </button>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-4">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

