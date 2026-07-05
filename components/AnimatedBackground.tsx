'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  connections: Node[]
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const animationFrameRef = useRef<number | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNodes()
    }

    const initNodes = () => {
      const nodes: Node[] = []
      const nodeCount = Math.floor((canvas.width * canvas.height) / 20000)

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 2 + Math.random() * 2,
          connections: [],
        })
      }

      // Find connections for each node
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        const closest: Node[] = []
        
        for (let j = 0; j < nodes.length; j++) {
          if (i !== j) {
            const dx = node.x - nodes[j].x
            const dy = node.y - nodes[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < 200) {
              if (closest.length < 5) {
                closest.push(nodes[j])
              } else {
                // Replace if closer
                for (let k = 0; k < closest.length; k++) {
                  const d2 = Math.sqrt(
                    Math.pow(node.x - closest[k].x, 2) + 
                    Math.pow(node.y - closest[k].y, 2)
                  )
                  if (distance < d2) {
                    closest[k] = nodes[j]
                    break
                  }
                }
              }
            }
          }
        }
        node.connections = closest
      }

      nodesRef.current = nodes
    }

    const drawNode = (node: Node, mouseDistance?: number) => {
      const baseOpacity = mouseDistance ? Math.max(0.6, 1 - mouseDistance / 300) : 0.7
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(156, 217, 249, ${baseOpacity})`
      ctx.fill()
      
      // Glow effect near mouse
      if (mouseDistance && mouseDistance < 200) {
        ctx.shadowBlur = 15
        ctx.shadowColor = 'rgba(156, 217, 249, 1)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(156, 217, 249, ${(1 - mouseDistance / 200) * 0.6})`
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    const drawConnection = (node1: Node, node2: Node, mouseDistance?: number) => {
      const dx = node1.x - node2.x
      const dy = node1.y - node2.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < 200) {
        const opacity = (1 - distance / 200) * 0.7
        const mouseOpacity = mouseDistance ? Math.max(0.4, 1 - mouseDistance / 400) : 1
        const finalOpacity = opacity * mouseOpacity
        
        ctx.beginPath()
        ctx.moveTo(node1.x, node1.y)
        ctx.lineTo(node2.x, node2.y)
        ctx.strokeStyle = `rgba(156, 217, 249, ${finalOpacity})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const nodes = nodesRef.current
      const mouse = mouseRef.current

      // Update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))
      }

      // Draw connections first (so nodes appear on top)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        const mouseDx = node.x - mouse.x
        const mouseDy = node.y - mouse.y
        const nodeMouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)

        // Draw connections to nearby nodes
        for (const connectedNode of node.connections) {
          const dx = node.x - connectedNode.x
          const dy = node.y - connectedNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Calculate average mouse distance for connection
          const connectedMouseDx = connectedNode.x - mouse.x
          const connectedMouseDy = connectedNode.y - mouse.y
          const connectedMouseDistance = Math.sqrt(connectedMouseDx * connectedMouseDx + connectedMouseDy * connectedMouseDy)
          const avgMouseDistance = (nodeMouseDistance + connectedMouseDistance) / 2
          
          if (distance < 200) {
            drawConnection(node, connectedNode, avgMouseDistance)
          }
        }

        // Draw connection to mouse if close
        if (nodeMouseDistance < 300) {
          const opacity = (1 - nodeMouseDistance / 300) * 0.9
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(156, 217, 249, ${opacity})`
          ctx.lineWidth = 2
          ctx.stroke()
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        const mouseDx = node.x - mouse.x
        const mouseDy = node.y - mouse.y
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)
        
        drawNode(node, mouseDistance)
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    const handleResize = () => {
      resizeCanvas()
    }

    // Initialize
    resizeCanvas()
    animate()

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none" 
      style={{ 
        zIndex: -1,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'transparent',
        }}
      />
    </div>
  )
}

