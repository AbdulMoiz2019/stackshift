"use client"

import { useRef, useEffect, useState } from "react"
import { 
  Smartphone, 
  Cloud, 
  Brain, 
  Globe, 
  Megaphone, 
  Palette, 
  Layers,
  CheckCircle 
} from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"

const services = [
  {
    id: "app-development",
    icon: Smartphone,
    title: "App Development",
    description: "We build powerful, intuitive mobile applications for iOS and Android platforms. Our apps are designed for performance, scalability, and exceptional user experience.",
    features: [
      "Native iOS & Android Development",
      "Cross-Platform Solutions (React Native, Flutter)",
      "App Store Optimization",
      "Ongoing Maintenance & Updates",
    ],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud App Development",
    description: "Leverage the power of cloud computing with our enterprise-grade solutions. We design and deploy scalable cloud infrastructure that grows with your business.",
    features: [
      "AWS, Azure & GCP Expertise",
      "Cloud Migration Services",
      "Serverless Architecture",
      "DevOps & CI/CD Implementation",
    ],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Integration & Automation",
    description: "Transform your operations with intelligent automation. We integrate cutting-edge AI and machine learning solutions to optimize processes and drive innovation.",
    features: [
      "Custom AI Model Development",
      "Natural Language Processing",
      "Predictive Analytics",
      "Process Automation",
    ],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: "web",
    icon: Globe,
    title: "Web Applications",
    description: "High-performance web applications built with modern technologies. From simple websites to complex enterprise platforms, we deliver solutions that drive results.",
    features: [
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Enterprise Portals",
      "API Development & Integration",
    ],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "design",
    icon: Palette,
    title: "Graphic Design",
    description: "Visual storytelling that captures attention and communicates your brand message. Our designers create compelling visuals that leave lasting impressions.",
    features: [
      "Brand Identity Design",
      "Marketing Collateral",
      "Motion Graphics",
      "Print & Digital Design",
    ],
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    id: "ux",
    icon: Layers,
    title: "UI/UX Design",
    description: "Human-centered design that delights users. We create intuitive interfaces and seamless experiences that drive engagement and conversions.",
    features: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Design Systems",
    ],
    color: "from-pink-500/20 to-rose-500/20",
  },
]

export function ServicesList() {
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
    <section ref={sectionRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 75}ms` : "0ms",
              }}
            >
              <TiltCard 
                className={`p-8 md:p-12 rounded-2xl bg-card border border-border hover:bg-linear-to-br ${service.color} hover:shadow-lg transition-all duration-500`}
                // tiltMaxAngleX={5}
                // tiltMaxAngleY={5}
                glareEnabled
                maxTilt={5}
                // glareMaxOpacity={0.1}
              >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center transition-colors duration-300 ">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                      What we offer
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
