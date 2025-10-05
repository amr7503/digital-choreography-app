"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, Zap, Shield, BarChart3 } from "lucide-react"

export function HeroSection() {
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
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background"></div>

      {/* Floating data widgets */}
      <div className="absolute inset-0 pointer-events-none">
        <Card
          className="absolute top-32 left-[10%] p-4 glow-border animate-float hidden lg:block"
          style={{ animationDelay: "0s" }}
        >
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-primary" />
            <div>
              <div className="text-2xl font-bold text-foreground">+247%</div>
              <div className="text-xs text-muted-foreground">Growth Rate</div>
            </div>
          </div>
        </Card>

        <Card
          className="absolute top-48 right-[15%] p-4 glow-border-purple animate-float hidden lg:block"
          style={{ animationDelay: "1s" }}
        >
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-accent" />
            <div>
              <div className="text-2xl font-bold text-foreground">0.3ms</div>
              <div className="text-xs text-muted-foreground">Latency</div>
            </div>
          </div>
        </Card>

        <Card
          className="absolute bottom-32 left-[15%] p-4 glow-border animate-float hidden lg:block"
          style={{ animationDelay: "2s" }}
        >
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            <div>
              <div className="text-2xl font-bold text-foreground">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
          </div>
        </Card>

        <Card
          className="absolute bottom-48 right-[10%] p-4 glow-border-purple animate-float hidden lg:block"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-accent" />
            <div>
              <div className="text-2xl font-bold text-foreground">$2.4M</div>
              <div className="text-xs text-muted-foreground">Revenue</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
              Next-Generation FinTech Platform
            </div>
          </div>

          <h1
            className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 text-5xl md:text-7xl lg:text-8xl font-bold text-balance"
            style={{ transitionDelay: "0.2s" }}
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Transform Finance
            </span>
            <br />
            <span className="text-foreground">With Digital Precision</span>
          </h1>

          <p
            className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
            style={{ transitionDelay: "0.4s" }}
          >
            Empower your organization with cutting-edge financial technology. Real-time analytics, seamless
            transactions, and enterprise-grade security—all choreographed to perfection.
          </p>

          <div
            className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ transitionDelay: "0.6s" }}
          >
            <Button size="lg" className="ripple-button relative overflow-hidden text-lg px-8 py-6">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
