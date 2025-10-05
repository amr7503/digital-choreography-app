"use client"

import { useEffect, useState } from "react"

export function MagneticCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "BUTTON" || target.tagName === "A" || target.closest("button") || target.closest("a")

      setIsHovering(!!isInteractive)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div className="w-4 h-4 bg-white rounded-full" />
      </div>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference transition-all duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
        }}
      >
        <div className="w-8 h-8 border-2 border-white rounded-full" />
      </div>
    </>
  )
}
