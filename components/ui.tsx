import type { CSSProperties } from 'react'

export function StarShape({
  size = 20,
  color,
  className = '',
}: {
  size?: number
  color: string
  className?: string
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M12 2 L14.5 9 L22 9 L16 13.5 L18 21 L12 16.5 L6 21 L8 13.5 L2 9 L9.5 9 Z" fill={color} />
    </svg>
  )
}

export function Blob({
  color,
  className = '',
  style = {},
}: {
  color: string
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{ background: color, ...style }}
    />
  )
}
