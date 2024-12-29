import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: '/placeholder.svg',
    quote: 'FlowFix\'s smart leak detection system saved us from a potentially disastrous water damage situation. Their quick response and cutting-edge solution were truly impressive!'
  },
  {
    name: 'Mike Thompson',
    role: 'Business Owner',
    image: '/placeholder.svg',
    quote: 'We\'ve been using FlowFix for all our commercial plumbing needs. Their eco-friendly water heating solutions have significantly reduced our energy costs. Highly recommended!'
  },
  {
    name: 'Emily Chen',
    role: 'Architect',
    image: '/placeholder.svg',
    quote: 'As an architect, I appreciate FlowFix\'s innovative approach to plumbing. Their high-tech installation methods seamlessly integrate with our modern building designs.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 futuristic-border">
              <div className="flex items-center mb-4">

                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

