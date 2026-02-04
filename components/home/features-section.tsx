"use client"

import { useRef, useEffect, useState } from "react"
import { Zap, Shield, Rocket, Users } from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Agile methodologies ensure rapid development cycles without compromising quality.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols protect your data and intellectual property.",
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    description: "Future-proof solutions that grow seamlessly with your business needs.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "24/7 expert assistance and ongoing maintenance for peace of mind.",
  },
]

export function FeaturesSection() {
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
    <section ref={sectionRef} className="bg-secondary">
      <div className="container mx-auto p-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Building the Future of Digital Innovation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Stackshift, we combine technical excellence with creative thinking 
              to deliver solutions that not only meet expectations but exceed them. 
              Our team of experts is committed to your success.
            </p>
            
            {/* <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/20">
              <Users className="w-5 h-5 text-primary" />
              <p className="text-sm">
                <span className="text-foreground font-semibold">50+ experts</span>
                <span className="text-muted-foreground"> ready to help</span>
              </p>
            </div> */}
          </div>

          {/* Right features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`transition-all duration-300 p-6 rounded-2xl hover:scale-110 bg-card border border-border hover:text-blue-800 hover:bg-gray-800 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                // style={{
                //   transitionDelay: isVisible ? `${index * 100 + 200}ms` : "0ms",
                // }}
              >
                {/* <TiltCard className="h-full p-6 rounded-xl bg-card border border-border hover:text-blue-800 hover:bg-gray-800" glareEnabled> */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                {/* </TiltCard> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
