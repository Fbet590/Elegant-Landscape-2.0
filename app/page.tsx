import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { FaqSection } from "@/components/faq-section"
import { TrustBar } from "@/components/trust-bar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PricingSection />
      <AboutSection />
      <TestimonialsSection />
      <ServicesSection />
      <GallerySection />
      <FaqSection />
      <TrustBar />
      <Footer />
    </main>
  )
}
