'use client'

import { useEffect, useRef, useState } from 'react'

interface Point {
  x: number
  y: number
  originX: number
  originY: number
  active: number
  closest: Point[]
  circle?: Circle
}

class Circle {
  pos: { x: number; y: number }
  radius: number
  color: string
  active: number

  constructor(pos: { x: number; y: number }, rad: number, color: string) {
    this.pos = pos || { x: 0, y: 0 }
    this.radius = rad || 2
    this.color = color || 'rgba(255,255,255,0.3)'
    this.active = 0
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.active) return
    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false)
    ctx.fillStyle = `rgba(156,217,249,${this.active})`
    ctx.fill()
  }
}

export default function AnimatedHeader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const pointsRef = useRef<Point[]>([])
  const targetRef = useRef({ x: 0, y: 0 })
  const animateHeaderRef = useRef(true)
  const animationFrameRef = useRef<number>()

  const getDistance = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
  }

  const drawLines = (ctx: CanvasRenderingContext2D, p: Point) => {
    if (!p.active) return
    for (const closestPoint of p.closest) {
      ctx.beginPath()
      ctx.moveTo(p.x, p.y)
      ctx.lineTo(closestPoint.x, closestPoint.y)
      ctx.strokeStyle = `rgba(156,217,249,${p.active})`
      ctx.stroke()
    }
  }

  const shiftPoint = (p: Point) => {
    const duration = 1 + Math.random()
    const startX = p.x
    const startY = p.y
    const targetX = p.originX - 50 + Math.random() * 100
    const targetY = p.originY - 50 + Math.random() * 100

    let startTime: number | null = null

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const elapsed = (currentTime - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)

      // Ease in-out circular
      const ease = progress < 0.5
        ? 0.5 * (1 - Math.sqrt(1 - 4 * progress * progress))
        : 0.5 * (Math.sqrt(-4 * (progress - 1) * (progress - 1) + 1) + 1)

      p.x = startX + (targetX - startX) * ease
      p.y = startY + (targetY - startY) * ease

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        shiftPoint(p)
      }
    }

    requestAnimationFrame(animate)
  }

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight
    setDimensions({ width, height })
    targetRef.current = { x: width / 2, y: height / 2 }

    if (!canvasRef.current || !headerRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = width
    canvas.height = height
    headerRef.current.style.height = `${height}px`

    // Create points
    const points: Point[] = []
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + Math.random() * (width / 20)
        const py = y + Math.random() * (height / 20)
        const p: Point = {
          x: px,
          originX: px,
          y: py,
          originY: py,
          active: 0,
          closest: [],
        }
        points.push(p)
      }
    }

    // For each point find the 5 closest points
    for (let i = 0; i < points.length; i++) {
      const closest: Point[] = []
      const p1 = points[i]
      for (let j = 0; j < points.length; j++) {
        const p2 = points[j]
        if (p1 !== p2) {
          let placed = false
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2
                placed = true
              }
            }
          }

          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2
                placed = true
              }
            }
          }
        }
      }
      p1.closest = closest
    }

    // Assign a circle to each point
    for (const point of points) {
      const c = new Circle(
        { x: point.x, y: point.y },
        2 + Math.random() * 2,
        'rgba(255,255,255,0.3)'
      )
      point.circle = c
    }

    pointsRef.current = points

    // Animation
    const animate = () => {
      if (animateHeaderRef.current && ctx) {
        ctx.clearRect(0, 0, width, height)
        for (const point of pointsRef.current) {
          // Detect points in range
          const distance = getDistance(targetRef.current, point)
          if (Math.abs(distance) < 4000) {
            point.active = 0.3
            if (point.circle) point.circle.active = 0.6
          } else if (Math.abs(distance) < 20000) {
            point.active = 0.1
            if (point.circle) point.circle.active = 0.3
          } else if (Math.abs(distance) < 40000) {
            point.active = 0.02
            if (point.circle) point.circle.active = 0.1
          } else {
            point.active = 0
            if (point.circle) point.circle.active = 0
          }

          drawLines(ctx, point)
          if (point.circle) point.circle.draw(ctx)
        }
      }
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Shift points
    for (const point of points) {
      shiftPoint(point)
    }

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      const posx = e.pageX || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
      const posy = e.pageY || e.clientY + document.body.scrollTop + document.documentElement.scrollTop
      targetRef.current = { x: posx, y: posy }
    }

    const handleScroll = () => {
      if (document.body.scrollTop > height) {
        animateHeaderRef.current = false
      } else {
        animateHeaderRef.current = true
      }
    }

    const handleResize = () => {
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight
      setDimensions({ width: newWidth, height: newHeight })
      if (headerRef.current) {
        headerRef.current.style.height = `${newHeight}px`
      }
      if (canvas) {
        canvas.width = newWidth
        canvas.height = newHeight
      }
    }

    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', handleMouseMove)
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      ref={headerRef}
      id="large-header"
      className="large-header"
      style={{
        position: 'relative',
        width: '100%',
        background: '#333',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        zIndex: 1,
      }}
    >
      <canvas
        ref={canvasRef}
        id="demo-canvas"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}

