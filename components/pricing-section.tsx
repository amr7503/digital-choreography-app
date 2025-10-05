"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: "Perfect for small teams getting started",
    features: ["Up to 10 team members", "5GB storage", "Basic analytics", "Email support", "API access"],
  },
  {
    name: "Professional",
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: "For growing businesses with advanced needs",
    features: [
      "Up to 50 team members",
      "50GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom integrations",
      "Advanced security",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    description: "For large organizations with custom requirements",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 dedicated support",
      "API access",
      "Custom integrations",
      "Advanced security",
      "SLA guarantee",
      "Custom contracts",
    ],
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-20 px-4 relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg mb-8 text-balance">Choose the perfect plan for your business</p>

          <div className="inline-flex items-center gap-4 bg-muted/50 backdrop-blur-sm rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full transition-all ${
                !isYearly ? "bg-purple-500 text-white" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full transition-all ${
                isYearly ? "bg-purple-500 text-white" : "text-muted-foreground"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-teal-500 text-white px-2 py-1 rounded-full">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-b from-purple-500/20 to-blue-500/20 border-2 border-purple-500"
                  : "bg-card/50 backdrop-blur-sm border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <motion.div
                  key={isYearly ? "yearly" : "monthly"}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-baseline gap-2"
                >
                  <span className="text-5xl font-bold">${isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="text-muted-foreground">/{isYearly ? "year" : "month"}</span>
                </motion.div>
              </div>

              <Button
                className={`w-full mb-6 ripple-button ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
