"use client"

import { useEffect, useRef } from "react"

export function ParallaxSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)

      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const translateY = (scrollProgress - 0.5) * 100
        imageRef.current.style.transform = `translateY(${translateY}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[600px] overflow-hidden">
      <div
        ref={imageRef}
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20"
        style={{ height: "120%", top: "-10%" }}
      >
        <div className="absolute inset-0 bg-[url('/abstract-digital-network.png')] bg-cover bg-center opacity-30"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-foreground">Built for the Future</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience the next generation of financial technology with our innovative platform
          </p>
        </div>
      </div>
    </section>
  )
}
