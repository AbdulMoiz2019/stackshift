"use client"

import { useRef, useEffect, useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@stackshift.io",
    link: "mailto:hello@stackshift.io",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+92 334 858 1555",
    link: "tel:+923348581555",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Main Service West Road, D-12/2, Islamabad, Pakistan",
    link: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
    link: null,
  },
]

export function ContactInfo() {
  const containerRef = useRef<HTMLDivElement>(null)
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

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: "200ms" }}
    >
      <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
      <p className="text-muted-foreground mb-8">
        Have a question or want to work together? Reach out through any of the 
        channels below.
      </p>

      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <div
            key={detail.title}
            className={`transition-all duration-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 100 + 300}ms` : "0ms",
            }}
          >
            <div
              className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <detail.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">{detail.title}</h3>
                {detail.link ? (
                  <a
                    href={detail.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{detail.value}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div
          className="p-6 rounded-xl bg-primary/5 border border-primary/20"
        >
          <h3 className="font-semibold mb-2">Looking for urgent support?</h3>
          <p className="text-muted-foreground text-sm mb-4">
            For existing clients with urgent technical issues, please use our 
            dedicated support line for priority assistance.
          </p>
          <a
            href="tel:+923435110191"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            <Phone className="w-4 h-4 mr-2" />
            +92 343 511 0191
          </a>
        </div>
      </div>
    </div>
  )
}
