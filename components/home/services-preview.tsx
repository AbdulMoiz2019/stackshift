"use client"

import Link from "next/link"
import { Smartphone, Cloud, Brain, Globe, Megaphone, Palette, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"
import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal"
import { WordReveal } from "@/components/ui/animated-text"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  color: string
  iconColor: string
}

const services: Service[] = [
  {
    icon: Smartphone,
    title: "App Development",
    description: "We build seamless, high-performance apps using Flutter, MAUI.NET, and React Native.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "We design and deploy secure, scalable cloud applications using Azure, AWS, Docker, and .NET Core.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Intelligent automation and machine learning solutions to transform your operations.",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Modern, responsive websites and web apps built using Angular, React, Next.js, Node.js, ASP.NET, and .NET MVC.",
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: Megaphone,
    title: "Graphic Design",
    description: "Stunning visuals crafted with Illustrator, Photoshop, and Canva — perfect for your brand identity.",
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "We create intuitive, user-friendly interfaces designed in Figma and Adobe XD to enhance user experience.",
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon
  
  return (
    <TiltCard className="h-full" maxTilt={10}>
      <div className="group relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500">
        {/* Background gradient on hover */}
        <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Animated corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-primary/10 to-transparent transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
        </div>
        
        <div className="relative z-10">
          {/* Icon with animated ring */}
          <div className="relative w-14 h-14 mb-6">
            <div className="absolute inset-0 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
            <div className="absolute inset-0 rounded-xl border border-primary/20 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300" />
            <div className="relative w-full h-full flex items-center justify-center">
              <Icon className={`w-7 h-7 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`} />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            {service.description}
          </p>
          
          {/* Animated learn more link */}
          <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <Link href="/services" className="hover:underline">
              <span>Learn more</span>
            </Link>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
        
        {/* Number indicator */}
        <div className="absolute bottom-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-300 select-none">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
    </TiltCard>
  )
}

export function ServicesPreview() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,127,255,0.03)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px] translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal variant="fade-up">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Services
            </span>
          </ScrollReveal>
          
          <ScrollReveal variant="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <WordReveal text="Comprehensive Solutions for the Digital Age" />
            </h2>
          </ScrollReveal>
          
          <ScrollReveal variant="fade-up" delay={200}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From concept to deployment, we deliver end-to-end technology services 
              that empower businesses to thrive in an ever-evolving digital landscape.
            </p>
          </ScrollReveal>
        </div>

        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variant="fade-up"
          staggerDelay={100}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </StaggerReveal>

        <ScrollReveal variant="fade-up" delay={700} className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-all duration-300 group"
          >
            <span className="relative">
              Explore all services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
