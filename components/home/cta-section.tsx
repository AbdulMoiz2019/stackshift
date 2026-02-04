"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TiltCard } from "@/components/ui/tilt-card"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-[128px]" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-3xl p-12 md:p-16 rounded-3xl bg-card/80 border border-border backdrop-blur-sm">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {"Let's"} discuss how Stackshift can help you achieve your digital goals. 
              Our team is ready to bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
              >
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:scale-110 px-8 py-6 text-base transition-all duration-300 bg-transparent"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
      </div>
    </section>
  )
}
