import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our full range of premium outdoor products: composite decking, wall cladding, synthetic turf, pergolas, and outdoor roller blinds.',
}

const products = [
  {
    slug: 'composite-decking',
    name: 'Composite Decking',
    tagline: 'The beauty of timber. None of the maintenance.',
    description: 'Our composite decking range combines the natural look of real timber with the durability of advanced composite materials. UV-resistant, slip-resistant, and built to last in the Australian climate — no painting, staining, or sealing required.',
    features: ['UV & fade resistant', 'Slip-resistant surface', 'No painting or staining', '25-year product warranty', 'Available in 12 colours'],
    startingFrom: 89,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    badge: 'Best Seller',
    rating: 4.9,
    reviewCount: 312,
  },
  {
    slug: 'wall-cladding',
    name: 'Composite Wall Cladding',
    tagline: 'Bold exteriors. Timeless interiors.',
    description: 'Transform the look of your home\'s exterior or create stunning feature walls inside with our premium composite cladding. Weather-resistant, pest-proof, and available in a range of textures and finishes.',
    features: ['Weather & pest resistant', 'Interior & exterior use', 'Lightweight installation', '20-year product warranty', 'Multiple textures'],
    startingFrom: 75,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    rating: 4.8,
    reviewCount: 187,
  },
  {
    slug: 'synthetic-turf',
    name: 'Synthetic Turf',
    tagline: 'Lush, green, and effortless — all year round.',
    description: 'Say goodbye to mowing, watering, and brown patches. Our premium synthetic turf looks and feels incredibly natural, is pet-friendly, and requires virtually zero maintenance. Perfect for backyards, balconies, and commercial spaces.',
    features: ['Pet & child friendly', 'Zero water required', 'All-weather performance', '10-year warranty', 'Multiple pile heights'],
    startingFrom: 45,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
    badge: 'Popular',
    rating: 4.9,
    reviewCount: 241,
  },
  {
    slug: 'pergolas',
    name: 'Pergolas',
    tagline: 'Extend your living space into the open air.',
    description: 'Our custom-designed pergolas are engineered to complement your home\'s architecture while creating a beautiful, shaded outdoor living area. Available in louvred, gable, flat, and curved roof styles.',
    features: ['Custom design available', 'Louvre & fixed roof options', 'Powder-coated aluminium', 'Engineering certified', 'Integrated lighting option'],
    startingFrom: 3500,
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    rating: 4.9,
    reviewCount: 156,
  },
  {
    slug: 'outdoor-roller-blinds',
    name: 'Outdoor Roller Blinds',
    tagline: 'Control your environment. Protect your privacy.',
    description: 'Our heavy-duty outdoor roller blinds provide excellent weather protection, privacy, and sun control without sacrificing your view. Motorised options available. Designed for pergolas, patios, balconies, and verandahs.',
    features: ['Motorised option available', '95% UV blockout available', 'Wind & rain resistant', 'Smart home compatible', 'Custom sizing'],
    startingFrom: 290,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    rating: 4.7,
    reviewCount: 98,
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">Our Range</span>
          <h1 className="heading-xl text-charcoal-900 mt-2 mb-4">Premium Outdoor Products</h1>
          <p className="text-charcoal-500 text-lg max-w-2xl mx-auto">
            Engineered for Australian conditions, designed for your lifestyle.
            Explore our complete range of outdoor living solutions.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {products.map((product, i) => (
              <div
                key={product.slug}
                id={product.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}
              >
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                  {product.badge && (
                    <span className="absolute top-4 left-4 badge bg-sage-400 text-white font-semibold px-3 py-1 text-xs">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <span className="text-sage-500 text-xs font-semibold uppercase tracking-widest">
                    {product.name}
                  </span>
                  <h2 className="heading-md text-charcoal-900 mt-1 mb-1">{product.tagline}</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`h-3.5 w-3.5 ${j < Math.floor(product.rating) ? 'fill-bamboo-300 text-bamboo-300' : 'text-charcoal-200'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-charcoal-400">{product.rating} ({product.reviewCount} reviews)</span>
                  </div>
                  <p className="text-charcoal-500 leading-relaxed mb-6">{product.description}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-8">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-charcoal-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-sage-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-6 mb-6">
                    <div>
                      <span className="text-xs text-charcoal-400">Starting from</span>
                      <div className="font-display font-bold text-2xl text-charcoal-900">
                        ${product.startingFrom.toLocaleString()}
                        <span className="text-sm font-normal text-charcoal-400">/m²</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href={`/products/${product.slug}`} className="btn-primary gap-2">
                      View Product
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href="/configurator" className="btn-secondary">
                      Configure & Price
                    </Link>
                    <Link href="/quotation" className="btn-outline">
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-sage-400">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="heading-lg text-white mb-4">Not Sure Where to Start?</h2>
          <p className="text-sage-100 mb-8">
            Book a free design consultation. Our experts will walk you through the options,
            visit your site, and give you a detailed quote — no pressure, no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="bg-white text-sage-600 hover:bg-sage-50 px-8 py-4 rounded-md font-medium text-sm transition-colors">
              Book Free Consultation
            </Link>
            <Link href="/configurator" className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-md font-medium text-sm transition-colors">
              Use Configurator
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
