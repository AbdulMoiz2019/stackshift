import { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
// import { MapSection } from "@/components/contact/map-section"

export const metadata: Metadata = {
  title: "Contact Us | Stackshift",
  description: "Get in touch with Stackshift. Let's discuss how we can help transform your business with innovative technology solutions.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      {/* <MapSection /> */}
    </>
  )
}
