'use client'

import { useState } from 'react'
import { Menu, Droplet } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Droplet className="w-5 h-5 text-primary mr-2" />
            <h1 className="text-sm "><span className='font-bold gradient-text'>FlowFix</span> Plumbing</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#portfolio" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

