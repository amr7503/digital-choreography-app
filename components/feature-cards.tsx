"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Lock, Zap, BarChart } from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Process millions of transactions per second with our optimized infrastructure.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "Enterprise security with end-to-end encryption and compliance certifications.",
  },
  {
    icon: Zap,
    title: "Real-Time Analytics",
    description: "Get instant insights with our advanced analytics and reporting dashboard.",
  },
  {
    icon: BarChart,
    title: "Scalable Architecture",
    description: "Grow without limits. Our platform scales seamlessly with your business.",
  },
]

export function FeatureCards() {
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

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in-element opacity-0 transition-all duration-1000 translate-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to build the future of finance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 glow-border hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
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
