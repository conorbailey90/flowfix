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
              Revolutionizing <br />
              Plumbing Since 2003
            </h2>
          </ScrollReveal>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                At FlowFix Plumbing, we're not just fixing pipes – we're redefining the plumbing industry. 
                With over two decades of experience and a commitment to innovation, we've become the go-to 
                plumbing service for homeowners and businesses who demand excellence.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team of certified plumbers combines traditional expertise with cutting-edge technology 
                to deliver unparalleled service. From smart leak detection systems to eco-friendly water 
                solutions, we're at the forefront of plumbing advancements.
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
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg">
                <p className="font-bold text-lg">20+ Years</p>
                <p>of Excellence</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

