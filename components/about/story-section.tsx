"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

export function StorySection() {
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
    <section ref={sectionRef} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div
            className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Image
                    src="/logo3.png"
                    alt="Stackshift Logo"
                    width={128}
                    height={128}
                  />
                  <span className="text-6xl font-bold text-primary">S</span>
                </div>
                <p className="text-muted-foreground">Founded in 2025</p>
              </div> */}
               <Image
                    src="/about-pic.webp"
                    alt="Stackshift Logo"
                    fill
                    priority = {true}
                  />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              One Year of Bold Innovation
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Stack Shift was founded with a clear mission: to transform bold ideas into practical technology solutions that drive measurable impact. What began just twelve months ago as a small, focused team has already evolved into a dynamic organization delivering value to clients across industries.
              </p>
              <p>
                From the very beginning, we embraced innovation as our guiding principle—leveraging modern frameworks, automation, and intelligent design to solve real-world business challenges. Each milestone in our journey reflects not only technical progress but also our commitment to building lasting partnerships and delivering excellence.
              </p>
              <p>
                Today, Stack Shift stands as a young but ambitious player in the digital landscape. In only one year, we have laid the foundation for long-term growth, proving that agility, vision, and dedication can accelerate transformation. Our story is still being written, but our purpose remains constant: to help businesses harness technology to achieve their goals and stay ahead in a rapidly changing world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
