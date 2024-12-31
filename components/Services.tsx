import { Droplet, Wrench, Thermometer, Hammer, Shield, Zap } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    icon: <Droplet className="w-10 h-10" />,
    title: 'Smart Leak Detection',
    description: 'Our AI-powered leak detection system identifies and locates leaks with pinpoint accuracy.'
  },
  {
    icon: <Wrench className="w-10 h-10" />,
    title: 'High-Tech Installation',
    description: 'Advanced tools and techniques for optimal performance and longevity.'
  },
  {
    icon: <Thermometer className="w-10 h-10" />,
    title: 'Eco-Friendly Water Heating',
    description: 'Energy-efficient water heaters with smart temperature control systems.'
  },
  {
    icon: <Hammer className="w-10 h-10" />,
    title: 'Rapid Emergency Repairs',
    description: '24/7 emergency service with our quick-response team.'
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: 'Gas Safety Inspections',
    description: 'Comprehensive gas safety checks and certifications.'
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: 'Boiler Installation',
    description: 'Expert installation of modern, energy-efficient boilers.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-background section-wrapper">
      <div className="grid-background" />
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <span className="text-sm uppercase tracking-wider mb-4 block text-muted-foreground">
            Our Services
          </span>
        </ScrollReveal>
        <div className="relative">
          <div className="large-number">02</div>
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-16 relative z-10 gradient-text">
              Comprehensive Solutions
            </h2>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} className={`delay-${index * 100}`}>
              <div className="bg-secondary p-8 rounded-lg hover:bg-secondary/60 transition-colors duration-300 h-full">
                <div className="mb-6 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

