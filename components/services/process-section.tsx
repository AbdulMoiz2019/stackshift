"use client"

import { useRef, useEffect, useState } from "react"
import { TiltCard } from "@/components/ui/tilt-card"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and challenges to create a strategic foundation.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Our team crafts a comprehensive plan tailored to your specific needs and market requirements.",
  },
  {
    number: "03",
    title: "Design",
    description: "We create intuitive, beautiful designs that align with your brand and delight your users.",
  },
  {
    number: "04",
    title: "Development",
    description: "Our engineers build robust, scalable solutions using cutting-edge technologies and best practices.",
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous quality assurance ensures your product performs flawlessly across all scenarios.",
  },
  {
    number: "06",
    title: "Launch",
    description: "We deploy your solution and provide ongoing support to ensure long-term success.",
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            How We Bring Ideas to Life
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our proven methodology ensures every project is delivered on time, 
            within budget, and exceeds expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div
                className="relative p-8 rounded-xl bg-card border border-border h-full hover:scale-110 transition-all duration-300 hover:bg-gray-800 group"
              >
                <span className="text-6xl font-bold text-primary/10 absolute top-4 right-6 transition-colors duration-300 group-hover:text-black">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-800 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
