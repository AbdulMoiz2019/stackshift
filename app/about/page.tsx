import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { StorySection } from "@/components/about/story-section"
import { ValuesSection } from "@/components/about/values-section"
// import { TeamSection } from "@/components/about/team-section"

export const metadata: Metadata = {
  title: "About Us | Stackshift",
  description: "Learn about Stackshift's mission, values, and the team behind our innovative IT and software solutions.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      {/* <TeamSection /> */}
    </>
  )
}
