import React, { useState } from 'react'

function MouseMoveEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY })
  }

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      <h1
        className="text"
        style={{ position: 'fixed', top: position.y, left: position.x }}
      >
        {/* Move your mouse! */}
      </h1>
    </div>
  )
}

export default MouseMoveEffect
