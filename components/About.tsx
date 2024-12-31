import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-16 bg-background section-wrapper">
      <div className="grid-background" />
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="large-number">01</div>
          <ScrollReveal>
            <span className="text-sm uppercase tracking-wider mb-4 block text-muted-foreground">
              About Us
            </span>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-16 relative z-10 gradient-text">
              Excellence in <br />
              Plumbing Since 2003
            </h2>
          </ScrollReveal>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                At FlowFix Plumbing, we're committed to delivering exceptional plumbing services. 
                With over two decades of experience, we've become the trusted choice for 
                homeowners and businesses who value quality and reliability.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team of certified plumbers combines proven expertise with quality workmanship 
                to deliver outstanding results. From routine maintenance to complex installations, 
                we ensure every job is completed to the highest standards.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="delay-100">
            <div className="relative">
              <Image
                src="/images/engineer.jpg"
                alt="FlowFix Plumber at work"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#161616] text-primary-foreground p-4 rounded-lg border-2 border-gradient-start">
                <p className="font-bold text-lg gradient-text">20+ Years</p>
                <p className="gradient-text">of Excellence</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

