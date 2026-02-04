"use client"

import { useRef, useEffect, useState } from "react"
import { Linkedin, Twitter } from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"

const team = [
  {
    name: "Alex Morgan",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in tech",
    initials: "AM",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "AI and cloud architecture expert",
    initials: "SC",
  },
  {
    name: "James Wilson",
    role: "VP of Engineering",
    bio: "Full-stack development specialist",
    initials: "JW",
  },
  {
    name: "Maya Patel",
    role: "Head of Design",
    bio: "Award-winning UX/UI designer",
    initials: "MP",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    bio: "Backend and DevOps specialist",
    initials: "DK",
  },
  {
    name: "Emily Zhang",
    role: "Product Manager",
    bio: "Strategic product visionary",
    initials: "EZ",
  },
]

export function TeamSection() {
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Meet the Experts Behind Stackshift
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A diverse team of talented individuals united by a passion for 
            technology and innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 75}ms` : "0ms",
              }}
            >
              <TiltCard 
                className="p-6 rounded-2xl bg-card border border-border text-center h-full"
                glareEnable
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300">
                  <span className="text-2xl font-bold text-primary">{member.initials}</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={14} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter size={14} />
                  </a>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
