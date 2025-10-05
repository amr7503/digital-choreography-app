"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    id: "payments",
    label: "Payments",
    title: "Seamless Payment Processing",
    description:
      "Accept payments from anywhere in the world with our unified payment gateway. Support for 150+ currencies, instant settlements, and fraud detection powered by machine learning.",
  },
  {
    id: "analytics",
    label: "Analytics",
    title: "Advanced Analytics Suite",
    description:
      "Transform data into actionable insights with real-time dashboards, predictive analytics, and custom reporting. Make data-driven decisions with confidence.",
  },
  {
    id: "security",
    label: "Security",
    title: "Enterprise Security",
    description:
      "Protect your business with military-grade encryption, multi-factor authentication, and continuous security monitoring. Compliant with SOC 2, PCI DSS, and GDPR.",
  },
  {
    id: "api",
    label: "API",
    title: "Developer-First API",
    description:
      "Build custom integrations with our RESTful API. Comprehensive documentation, SDKs in 10+ languages, and dedicated developer support.",
  },
]

export function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("payments")
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

  const activeService = services.find((s) => s.id === activeTab)

  return (
    <section id="services" ref={sectionRef} className="relative z-10 py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in-element opacity-0 transition-all duration-1000 translate-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive solutions for modern financial operations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="flex flex-wrap justify-center gap-2 mb-8 p-2 bg-card rounded-lg border border-border">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === service.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {service.label}
                </button>
              ))}
            </div>
          </div>

          <Card
            className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 glow-border-purple"
            style={{ transitionDelay: "0.4s" }}
          >
            <CardContent className="p-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">{activeService?.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{activeService?.description}</p>
              </div>
            </CardContent>
          </Card>
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
