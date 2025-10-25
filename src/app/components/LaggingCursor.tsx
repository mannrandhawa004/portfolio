"use client"
import { useEffect, useRef } from "react"

const LaggingCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const posRef = useRef({ x: 0, y: 0 })
  const scaleRef = useRef(1) // Track scale for size change
  const easing = 0.1 // Easing for smooth position
  const scaleEasing = 0.15 // Easing for smooth size change
  const initialScale = 1 // Initial size
  const maxScale = 4// Size when moving

  useEffect(() => {
    let lastMouseX = 0
    let lastMouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const animate = () => {
      // Calculate movement speed (distance between last and current mouse position)
      const dx = mouseRef.current.x - lastMouseX
      const dy = mouseRef.current.y - lastMouseY
      const speed = Math.sqrt(dx * dx + dy * dy)

      // Update last mouse position
      lastMouseX = mouseRef.current.x
      lastMouseY = mouseRef.current.y

      // Adjust scale based on movement
      const targetScale = speed > 2 ? maxScale : initialScale // Scale up if moving, else return to initial
      scaleRef.current += (targetScale - scaleRef.current) * scaleEasing

      // Update position with easing
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * easing
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * easing

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) scale(${scaleRef.current})`
      }

      requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-indigo-400/60 rounded-full pointer-events-none z-50 shadow-lg"
      style={{ transformOrigin: 'center' }} // Ensure scaling happens from the center
    />
  )
}

export default LaggingCursor