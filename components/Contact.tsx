'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { toast } from 'sonner'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Your form submission logic here
      console.log('Form submitted:', formData)
      setFormData({ name: '', email: '', message: '' })
      
      // Show success toast
      toast.success('Message sent successfully!')
    } catch (error) {
      // Show error toast
      toast.error('Failed to send message. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-32 bg-background section-wrapper">
      <div className="grid-background" />
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <span className="text-sm uppercase tracking-wider mb-4 block text-muted-foreground">
            Contact
          </span>
        </ScrollReveal>
        <div className="relative">
          <div className="large-number">04</div>
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-16 relative z-10 gradient-text">
              Get in Touch
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <div className="bg-secondary p-8 rounded-lg border border-gradient-end/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gradient-start/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gradient-start/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gradient-start/50"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gradient-start to-gradient-end text-white p-4 rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

