"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechCorp",
    content:
      "Digital Choreography transformed our financial operations. The platform's intuitive design and powerful features have increased our efficiency by 300%.",
    rating: 5,
    avatar: "/professional-woman-diverse.png",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO at FinanceFlow",
    content:
      "The best FinTech solution we've implemented. The real-time analytics and seamless integrations have revolutionized how we handle transactions.",
    rating: 5,
    avatar: "/professional-man.jpg",
  },
  {
    name: "Emily Watson",
    role: "VP of Operations at GlobalPay",
    content:
      "Outstanding platform with exceptional support. The automation features alone have saved us countless hours and significantly reduced errors.",
    rating: 5,
    avatar: "/confident-business-woman.png",
  },
]

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg text-balance">Join thousands of satisfied customers worldwide</p>
        </motion.div>

        <div className="relative h-[400px] md:h-[300px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 glow-border">
                <div className="flex gap-1 mb-6 justify-center">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-center mb-8 text-balance leading-relaxed">
                  "{testimonials[current].content}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[current].avatar || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full border-2 border-purple-500"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-lg">{testimonials[current].name}</div>
                    <div className="text-muted-foreground">{testimonials[current].role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => paginate(-1)}
            className="rounded-full hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1)
                  setCurrent(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? "bg-purple-500 w-8" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => paginate(1)}
            className="rounded-full hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
