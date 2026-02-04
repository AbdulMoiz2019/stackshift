"use client"

import { useEffect, useRef } from "react"

export function ServicesHero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const elements = [titleRef.current, descRef.current]
    elements.forEach((el, i) => {
      if (el) {
        el.style.opacity = "0"
        el.style.transform = "translateY(20px)"
        setTimeout(() => {
          el.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
        }, 100 + i * 100)
      }
    })
  }, [])

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
          >
            End-to-End Solutions for Digital Excellence
          </h1>
          <p
            ref={descRef}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            From ideation to deployment, we provide comprehensive technology services 
            that transform businesses and drive sustainable growth in the digital era.
          </p>
        </div>
      </div>
    </section>
  )
}
