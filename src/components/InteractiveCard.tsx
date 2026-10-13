'use client'

import { ReactNode, useState } from 'react'

export default function InteractiveCard({ children }: { children: ReactNode }) {
  const [hovered, setHovered] = useState(false)

  const className = hovered
    ? 'shadow-2xl rounded-lg bg-neutral-200'
    : 'shadow-lg rounded-lg bg-white'

  return (
    <div
      className={className}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {children}
    </div>
  )
}