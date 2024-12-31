import ScrollReveal from '@/components/ScrollReveal'
import { Wrench, Shield, Clock, Thermometer, Zap, Gauge } from 'lucide-react'

const features = [
  {
    icon: <Thermometer className="w-10 h-10" />,
    title: 'Efficiency Check',
    description: `Comprehensive analysis of your boiler's performance and energy efficiency.`
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: 'Safety Inspection',
    description: 'Thorough examination of all safety features and controls.'
  },
  {
    icon: <Wrench className="w-10 h-10" />,
    title: 'Component Testing',
    description: 'Detailed testing of all major components and connections.'
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: 'Annual Service',
    description: 'Regular maintenance to prevent breakdowns and extend boiler life.'
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: 'Performance Boost',
    description: 'Optimization of settings for maximum efficiency and performance.'
  },
  {
    icon: <Gauge className="w-10 h-10" />,
    title: 'Pressure Check',
    description: 'Verification and adjustment of system pressure levels.'
  }
]

export default function BoilerService() {
  return (
    <main className="pt-32 bg-background min-h-screen">
      <section className="py-16 bg-background section-wrapper">
        <div className="grid-background" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <span className="text-sm uppercase tracking-wider mb-4 block text-muted-foreground">
              Boiler Service
            </span>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 relative z-10 gradient-text">
              Expert Boiler <br />Maintenance
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-xl mb-16 text-muted-foreground max-w-2xl">
              Keep your boiler running efficiently and safely with our comprehensive servicing. 
              Our expert technicians ensure optimal performance and longevity for your heating system.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <ScrollReveal key={index} className={`delay-${index * 100}`}>
                <div className="bg-secondary p-8 rounded-lg hover:bg-secondary/60 transition-colors duration-300 h-full border border-gradient-end/20">
                  <div className="mb-6 text-primary">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-secondary p-8 rounded-lg border border-gradient-end/20">
              <h2 className="text-2xl font-semibold mb-6 gradient-text">Why Choose Our Boiler Service?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Regular boiler servicing is essential for maintaining the efficiency and safety of your heating system. 
                  Our comprehensive service includes a thorough inspection, cleaning, and testing of all vital components.
                </p>
                <p>
                  Our Gas Safe registered engineers have extensive experience with all major boiler brands and models. 
                  We provide detailed reports and recommendations to ensure your system operates at peak performance.
                </p>
                <p>
                  Book your annual service today to prevent costly breakdowns and ensure your home stays warm and comfortable 
                  all year round.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
} 