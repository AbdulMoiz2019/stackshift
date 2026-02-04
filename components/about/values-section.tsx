"use client"

import { useRef, useEffect, useState } from "react"
import { Target, Lightbulb, Users, Sparkles } from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries, exploring new technologies and methodologies to deliver solutions that are ahead of the curve.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We believe in building lasting relationships with our clients, becoming an extension of their team rather than just a vendor.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "We are committed to the highest standards of quality in everything we do, from code architecture to client communication.",
  },
]

export function ValuesSection() {
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
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            What Drives Us Forward
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our core values shape every decision we make and every solution we deliver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
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
                className="p-8 rounded-2xl bg-card border border-border h-full hover:bg-gray-800 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 ">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-800 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
