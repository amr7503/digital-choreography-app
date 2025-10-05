"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Dashboard Pro",
    description: "Complete financial overview with real-time metrics and insights",
    image: "/modern-financial-dashboard.png",
  },
  {
    id: 2,
    name: "Analytics Suite",
    description: "Advanced data visualization and predictive analytics",
    image: "/analytics-charts-graphs.jpg",
  },
  {
    id: 3,
    name: "Payment Gateway",
    description: "Seamless payment processing with global reach",
    image: "/payment-processing-interface.jpg",
  },
]

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section id="products" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in-element opacity-0 transition-all duration-1000 translate-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our suite of powerful financial tools
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className="relative fade-in-element opacity-0 transition-all duration-1000 translate-y-8"
            style={{ transitionDelay: "0.2s" }}
          >
            <Card className="glow-border overflow-hidden">
              <div className="relative h-[400px] bg-secondary/50">
                <img
                  src={products[currentIndex].image || "/placeholder.svg"}
                  alt={products[currentIndex].name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold mb-2 text-foreground">{products[currentIndex].name}</h3>
                  <p className="text-lg text-muted-foreground">{products[currentIndex].description}</p>
                </div>
              </div>
            </Card>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-primary/50 hover:bg-primary/10 bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-primary/50 hover:bg-primary/10 bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
