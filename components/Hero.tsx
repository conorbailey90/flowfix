'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      
      // Set display size (css pixels)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      
      // Set actual size in memory (scaled to account for extra pixel density)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      
      // Scale context to ensure correct drawing operations
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const drawGrid = () => {
      if (!ctx) return

      const dpr = window.devicePixelRatio || 1
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)

      const cellSize = 50
      const rows = Math.ceil(canvas.height / dpr / cellSize)
      const cols = Math.ceil(canvas.width / dpr / cellSize)

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 1

      // Align to pixel grid
      for (let i = 0; i <= rows; i++) {
        ctx.beginPath()
        ctx.moveTo(0, Math.round(i * cellSize))
        ctx.lineTo(canvas.width / dpr, Math.round(i * cellSize))
        ctx.stroke()
      }

      for (let i = 0; i <= cols; i++) {
        ctx.beginPath()
        ctx.moveTo(Math.round(i * cellSize), 0)
        ctx.lineTo(Math.round(i * cellSize), canvas.height / dpr)
        ctx.stroke()
      }

      requestAnimationFrame(drawGrid)
    }

    drawGrid()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section className="relative min-h-screen bg-background flex items-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <ScrollReveal>
            <span className="text-sm uppercase tracking-wider mb-4 block text-muted-foreground">
              Welcome to FlowFix
            </span>
          </ScrollReveal>
          <ScrollReveal className="delay-100">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight gradient-text">
              The Future <br /> of Plumbing <br />
              is Here
            </h1>
          </ScrollReveal>
          <ScrollReveal className="delay-200">
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl">
              Experience cutting-edge plumbing solutions with FlowFix. Our advanced technology 
              and expert team ensure efficient, long-lasting results for all your plumbing needs.
            </p>
          </ScrollReveal>
          <ScrollReveal className="delay-300">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-gradient-start to-gradient-end text-white px-8 py-4 rounded-full hover:opacity-90 transition duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-8 py-4 rounded-full hover:bg-secondary/90 transition duration-300 border border-gradient-end/20"
              >
                Our Services
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

