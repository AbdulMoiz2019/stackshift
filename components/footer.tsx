"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Github, Instagram, ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/#" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "App Development", href: "/services#app-development" },
    { label: "Cloud Solutions", href: "/services#cloud" },
    { label: "AI Integration", href: "/services#ai" },
    { label: "Web Applications", href: "/services#web" },
    { label: "UI/UX Design", href: "/services#ux" },
    // { label: "Graphic Design", href: "/services#design" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[96px] translate-y-1/2" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <ScrollReveal variant="fade-right" className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-50 h-15 overflow-hidden transition-transform duration-300 group-hover:scale-110 ">
                <Image
                  src="/navbar-logo.webp"
                  alt="Stackshift Logo"
                  fill
                  className="object-contain"
                  priority = {true}
                />
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Transforming businesses through innovative technology solutions. 
              We build the future, one line of code at a time.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Company Links */}
          <ScrollReveal variant="fade-up" delay={100}>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Services Links */}
          <ScrollReveal variant="fade-up" delay={200}>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Support Links */}
          <ScrollReveal variant="fade-up" delay={300}>
            <h4 className="font-semibold mb-4 text-foreground">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                    </span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <ScrollReveal variant="fade-up" delay={400}>
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Stackshift. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
