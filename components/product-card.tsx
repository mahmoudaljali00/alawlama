"use client"

export default function ProductCard({ product }: any) {
  return (
    <div className="group h-full rounded-lg border border-brand-gold/20 bg-brand-gold/5 hover:bg-brand-gold/10 overflow-hidden transition-all duration-300 hover:border-brand-gold/50 hover:shadow-lg hover:shadow-brand-gold/20 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-brand-gold/20 to-brand-navy/20">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-semibold uppercase tracking-wider border border-brand-gold/40">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-gold transition-colors duration-300">
          {product.title}
        </h3>
        <p className="text-brand-text/70 text-sm mb-4 flex-grow">{product.description}</p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-brand-gold/20">
          <span className="text-2xl font-bold text-brand-gold">{product.price}</span>
          <button className="px-4 py-2 rounded-full bg-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-brand-navy font-semibold text-xs uppercase tracking-wider transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-gold/30">
            View
          </button>
        </div>
      </div>
    </div>
  )
}
