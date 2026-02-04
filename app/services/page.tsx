import { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ProcessSection } from "@/components/services/process-section"
import { TechStack } from "@/components/services/tech-stack"

export const metadata: Metadata = {
  title: "Services | Stackshift",
  description: "Comprehensive IT and software development services including app development, cloud solutions, AI integration, web applications, digital marketing, and UI/UX design.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <TechStack />
    </>
  )
}
