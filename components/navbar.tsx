"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-50 h-15 overflow-hidden transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/navbar-logo.webp"
              alt="Stackshift Logo"
              fill
              className="object-contain"
              priority = {true}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors duration-200 relative group py-2",
                  isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                <span 
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )} 
                />
              </Link>
            )
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 transition-all duration-300  hover:scale-110 hover:shadow-lg hover:shadow-primary/25 relative overflow-hidden group"
            >
              <Link href="/contact">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-linear-to-r from-primary to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <span className={cn(
            "absolute transition-all duration-300",
            isMobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          )}>
            <Menu size={24} />
          </span>
          <span className={cn(
            "absolute transition-all duration-300",
            isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          )}>
            <X size={24} />
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-out",
          isMobileMenuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-border px-6 py-6 space-y-2">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-3 px-4 rounded-lg transition-all duration-300 transform",
                  isActive 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  isMobileMenuOpen 
                    ? "translate-x-0 opacity-100" 
                    : "-translate-x-4 opacity-0"
                )}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms"
                }}
              >
                {link.label}
              </Link>
            )
          })}
          <div 
            className={cn(
              "pt-4 transition-all duration-300",
              isMobileMenuOpen 
                ? "translate-x-0 opacity-100" 
                : "-translate-x-4 opacity-0"
            )}
            style={{
              transitionDelay: isMobileMenuOpen ? `${navLinks.length * 50}ms` : "0ms"
            }}
          >
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
