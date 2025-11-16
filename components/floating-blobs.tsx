"use client"

export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-dark blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-brand-navy to-brand-gold blur-3xl opacity-15 animate-blob-delayed"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-gradient-to-br from-brand-gold-dark to-brand-navy blur-3xl opacity-10 animate-blob-slow"></div>

      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-brand-gold/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  )
}
