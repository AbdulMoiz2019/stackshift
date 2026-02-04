"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Typewriter, GradientText, TextScramble } from "@/components/ui/animated-text"

const words = ["Innovation", "Excellence", "Future", "Success", "Growth"]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const elements = [headlineRef.current, subtitleRef.current, ctaRef.current]
    elements.forEach((el, i) => {
      if (el) {
        el.style.opacity = "0"
        el.style.transform = "translateY(30px)"
        setTimeout(() => {
          el.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
        }, 200 + i * 150)
      }
    })

    // Rotate words
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background z-10" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] z-0 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[96px] z-0 animate-pulse [animation-delay:1s]" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-[15%] w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-[20%] w-3 h-3 bg-cyan-400 rounded-full animate-float [animation-delay:0.5s] opacity-40" />
      <div className="absolute bottom-1/3 left-[25%] w-2 h-2 bg-primary rounded-full animate-float [animation-delay:1s] opacity-50" />
      <div className="absolute bottom-1/4 right-[15%] w-4 h-4 border border-primary/30 rounded-full animate-float [animation-delay:1.5s]" />
      
      <div className="container mx-auto px-6 py-32 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8 animate-fade-in-up hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default group">
            <Sparkles className="w-4 h-4 animate-pulse group-hover:animate-spin" />
            <span>
              {mounted ? (
                <Typewriter text="Now integrating AI into every solution" speed={40} cursor={false} />
              ) : (
                "Now integrating AI into every solution"
              )}
            </span>
          </div> */}
          
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 mt-10"
          >
            <span className="text-balance block mb-2">Transform Your Business with</span>
            <span className="relative inline-block">
              <GradientText className="text-primary">
                {mounted ? (
                  <span className="inline-block min-w-70 md:min-w-100">
                    <TextScramble text={words[wordIndex]} />
                  </span>
                ) : (
                  words[0]
                )}
              </GradientText>
            </span>
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
          >
            We craft intelligent software solutions that drive innovation, 
            automate workflows, and accelerate digital transformation for 
            forward-thinking businesses.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-110 group relative overflow-hidden"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-primary to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
            
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/50 hover:bg-linear-to-r hover:from-primary hover:to-cyan-500 px-8 py-6 text-base transition-all duration-300 bg-transparent group relative overflow-hidden hover:scale-110"
              >
                <Link href="#">
                  <span className="relative z-10 flex items-center transition-colors duration-300">
                    <Play className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
                    View Our Work
                  </span>
                </Link>
              </Button>
          </div>
          
          {/* Trust section */}
          <div className="mt-16 pt-16 border-t border-border/50">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "800ms" }}>
                At <span className="text-primary font-semibold">Stackshift</span>, we deliver end-to-end IT solutions that empower businesses to scale, innovate, and lead in their industries. From custom software to AI-powered automation.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2 hover:border-primary/50 transition-colors duration-300 cursor-pointer group">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-scroll-indicator group-hover:bg-primary transition-colors duration-300" />
        </div>
      </div>
    </section>
  )
}
