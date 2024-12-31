'use client'

import ScrollReveal from './ScrollReveal'

const PricingEstimates = () => {
  return (
    <section id="pricing" className="py-32 bg-background section-wrapper">
      <div className="grid-background" />
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <span className="text-sm uppercase tracking-wider mb-4 block text-muted-foreground">
            Pricing
          </span>
        </ScrollReveal>
        <div className="relative">
          <div className="large-number">03</div>
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-16 relative z-10 gradient-text">
              Transparent Pricing
            </h2>
          </ScrollReveal>
        </div>

        {/* Pricing Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal>
            <div className="bg-secondary p-8 rounded-lg hover:bg-secondary/60 transition-colors duration-300 h-full border border-gradient-end/20">
              <h3 className="text-xl font-semibold mb-4">Basic Service</h3>
              <p className="text-3xl font-bold mb-6 gradient-text">£45</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Leak repair
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Inspection
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Basic maintenance
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal className="delay-100">
            <div className="bg-secondary p-8 rounded-lg hover:bg-secondary/60 transition-colors duration-300 h-full border border-gradient-end/20">
              <h3 className="text-xl font-semibold mb-4">Standard Package</h3>
              <p className="text-3xl font-bold mb-6 gradient-text">£120</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Boiler servicing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Pipe replacement
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Gas safety checks
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal className="delay-200">
            <div className="bg-secondary p-8 rounded-lg hover:bg-secondary/60 transition-colors duration-300 h-full border border-gradient-end/20">
              <h3 className="text-xl font-semibold mb-4">Premium Service</h3>
              <p className="text-3xl font-bold mb-6 gradient-text">£250</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Emergency call-outs
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Full system diagnostics
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Priority support
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PricingEstimates;
