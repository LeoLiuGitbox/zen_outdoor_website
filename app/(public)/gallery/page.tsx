import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Project Gallery',
  description: 'Browse Zen Outdoor AU project gallery — real transformations across composite decking, pergolas, synthetic turf, cladding, and outdoor blinds installations.',
}

const projects = [
  {
    title: 'North Shore Backyard Transformation',
    location: 'Sydney, NSW',
    category: 'Composite Decking + Pergola',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    title: 'Contemporary Poolside Deck',
    location: 'Melbourne, VIC',
    category: 'Composite Decking',
    before: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
  },
  {
    title: 'Entertainer\'s Alfresco',
    location: 'Brisbane, QLD',
    category: 'Pergola + Outdoor Blinds',
    before: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    title: 'Modern Feature Wall',
    location: 'Perth, WA',
    category: 'Wall Cladding',
    before: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    title: 'Family Backyard Makeover',
    location: 'Adelaide, SA',
    category: 'Synthetic Turf',
    before: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
  },
  {
    title: 'Rooftop Deck & Louvre Pergola',
    location: 'Sydney, NSW',
    category: 'Composite Decking + Pergola',
    before: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
]

const categories = ['All', 'Composite Decking', 'Pergola', 'Synthetic Turf', 'Wall Cladding', 'Outdoor Blinds']

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">Our Work</span>
          <h1 className="heading-xl text-charcoal-900 mt-2 mb-4">Project Gallery</h1>
          <p className="text-charcoal-500 text-lg max-w-2xl mx-auto">
            Real Australian homes. Real transformations. Browse our completed projects and get inspired
            for your own outdoor upgrade.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-white border-b border-border sticky top-[104px] z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-sage-400 text-white'
                    : 'bg-cream-100 text-charcoal-600 hover:bg-sage-50 hover:text-sage-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="card-base overflow-hidden group">
                {/* Before / After */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.after}
                    alt={`${project.title} — after`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
                  <span className="absolute top-3 right-3 badge bg-sage-400 text-white text-xs font-semibold px-2.5">
                    After
                  </span>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="badge bg-white/20 backdrop-blur-sm text-white text-xs">{project.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-charcoal-900 mb-1">{project.title}</h3>
                  <p className="text-charcoal-400 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-sage-400 text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-xl">
          <h2 className="heading-lg text-white mb-4">Love What You See?</h2>
          <p className="text-sage-100 mb-8">Let&apos;s build something beautiful for your home. Book a free consultation today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="bg-white text-sage-600 hover:bg-sage-50 px-8 py-4 rounded-md font-medium text-sm transition-colors">
              Book Free Consultation
            </Link>
            <Link href="/quotation" className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-md font-medium text-sm transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
