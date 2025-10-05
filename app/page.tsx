"use client"

import { useState, useEffect } from "react"
import { Preloader } from "@/components/preloader"
import { HeroSection } from "@/components/hero-section"
import { ClientTicker } from "@/components/client-ticker"
import { FeatureCards } from "@/components/feature-cards"
import { ServiceTabs } from "@/components/service-tabs"
import { ProductCarousel } from "@/components/product-carousel"
import { DataVisualization } from "@/components/data-visualization"
import { ParallaxSection } from "@/components/parallax-section"
import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatedStats } from "@/components/animated-stats"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { BentoGrid } from "@/components/bento-grid"
import { PricingSection } from "@/components/pricing-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { MagneticCursor } from "@/components/magnetic-cursor"

export default function Page() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader />
  }

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <MagneticCursor />
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <ClientTicker />
      <AnimatedStats />
      <FeatureCards />
      <BentoGrid />
      <ServiceTabs />
      <ParallaxSection />
      <ProductCarousel />
      <DataVisualization />
      <TestimonialsCarousel />
      <PricingSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
