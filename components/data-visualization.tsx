"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const dataByPeriod = {
  day: [
    { name: "00:00", value: 4000 },
    { name: "04:00", value: 3000 },
    { name: "08:00", value: 6000 },
    { name: "12:00", value: 8000 },
    { name: "16:00", value: 7000 },
    { name: "20:00", value: 5000 },
  ],
  week: [
    { name: "Mon", value: 12000 },
    { name: "Tue", value: 15000 },
    { name: "Wed", value: 18000 },
    { name: "Thu", value: 16000 },
    { name: "Fri", value: 20000 },
    { name: "Sat", value: 14000 },
    { name: "Sun", value: 11000 },
  ],
  month: [
    { name: "Week 1", value: 45000 },
    { name: "Week 2", value: 52000 },
    { name: "Week 3", value: 48000 },
    { name: "Week 4", value: 61000 },
  ],
}

export function DataVisualization() {
  const [period, setPeriod] = useState<"day" | "week" | "month">("week")
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
    <section id="analytics" ref={sectionRef} className="relative z-10 py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in-element opacity-0 transition-all duration-1000 translate-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Real-Time Analytics
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Monitor your performance with live data visualization
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card
            className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 glow-border"
            style={{ transitionDelay: "0.2s" }}
          >
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <CardTitle className="text-2xl text-foreground">Transaction Volume</CardTitle>
                <div className="flex gap-2">
                  {(["day", "week", "month"] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPeriod(p)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                        period === p
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {p.charAt(0).toUpperCase() + p.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dataByPeriod[period]}>
                  <XAxis
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
