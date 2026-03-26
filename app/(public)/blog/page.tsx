import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Tag, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Outdoor living tips, design inspiration, product guides, and expert advice from the Zen Outdoor AU team.',
}

const posts = [
  {
    slug: 'composite-decking-vs-timber',
    title: 'Composite Decking vs Timber: Which Is Right for Your Australian Home?',
    excerpt: 'We break down the pros, cons, costs, and maintenance requirements of composite vs real timber decking to help you make the right choice.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    publishedAt: '2026-03-15',
    tag: 'Decking',
    readTime: '7 min read',
  },
  {
    slug: 'pergola-design-ideas-2026',
    title: '10 Stunning Pergola Design Ideas for Australian Backyards in 2026',
    excerpt: 'From louvred roofs to climbing plants, discover the latest pergola trends that are transforming Australian outdoor spaces this year.',
    coverImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    publishedAt: '2026-03-01',
    tag: 'Pergolas',
    readTime: '5 min read',
  },
  {
    slug: 'synthetic-turf-guide',
    title: 'The Complete Guide to Choosing Synthetic Turf for Your Home',
    excerpt: 'Pile height, infill types, drainage — everything you need to know before buying artificial grass for your garden or balcony.',
    coverImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
    publishedAt: '2026-02-18',
    tag: 'Synthetic Turf',
    readTime: '9 min read',
  },
  {
    slug: 'outdoor-blinds-buyers-guide',
    title: 'Outdoor Roller Blinds: What to Look For and What to Avoid',
    excerpt: 'Wind ratings, blockout vs see-through, motorised vs manual — our buyers guide covers it all so you don\'t get stung.',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    publishedAt: '2026-02-05',
    tag: 'Outdoor Blinds',
    readTime: '6 min read',
  },
  {
    slug: 'small-backyard-ideas',
    title: '7 Clever Ways to Make a Small Backyard Feel Huge',
    excerpt: 'Limited space doesn\'t mean limited style. Our design team shares their favourite tricks for maximising small outdoor areas.',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    publishedAt: '2026-01-22',
    tag: 'Design Tips',
    readTime: '4 min read',
  },
  {
    slug: 'decking-maintenance-tips',
    title: 'How to Care for Your Composite Decking: A Seasonal Maintenance Guide',
    excerpt: 'Even low-maintenance composite decking needs occasional care. Follow our season-by-season guide to keep it looking brand new.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    publishedAt: '2026-01-08',
    tag: 'Maintenance',
    readTime: '5 min read',
  },
]

const tags = ['All', 'Decking', 'Pergolas', 'Synthetic Turf', 'Wall Cladding', 'Outdoor Blinds', 'Design Tips', 'Maintenance']

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">Expert Advice</span>
          <h1 className="heading-xl text-charcoal-900 mt-2 mb-4">Outdoor Living Blog</h1>
          <p className="text-charcoal-500 text-lg max-w-2xl mx-auto">
            Design ideas, product guides, maintenance tips, and industry trends from our team of outdoor living experts.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Tag filter */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-10">
            {tags.map((tag) => (
              <button key={tag} className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                tag === 'All' ? 'bg-sage-400 text-white' : 'bg-cream-100 text-charcoal-600 hover:bg-sage-50 hover:text-sage-600'
              }`}>
                {tag}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`} className="group card-base overflow-hidden flex flex-col lg:flex-row mb-10">
            <div className="relative lg:w-1/2 aspect-[4/3] lg:aspect-auto min-h-[240px]">
              <Image src={featured.coverImage} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-4 left-4 badge bg-sage-400 text-white font-semibold px-3">Featured</span>
            </div>
            <div className="p-8 flex flex-col justify-center lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <span className="badge-sage text-xs">{featured.tag}</span>
                <span className="text-charcoal-400 text-xs flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {formatDate(featured.publishedAt)}
                </span>
                <span className="text-charcoal-400 text-xs">{featured.readTime}</span>
              </div>
              <h2 className="heading-md text-charcoal-900 mb-3 group-hover:text-sage-500 transition-colors">{featured.title}</h2>
              <p className="text-charcoal-500 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sage-500 text-sm font-medium group-hover:gap-2 transition-all">
                Read Article <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group card-base overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge-sage text-xs">{post.tag}</span>
                    <span className="text-charcoal-400 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-charcoal-900 mb-2 line-clamp-2 group-hover:text-sage-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-charcoal-500 text-xs leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                  <span className="text-charcoal-400 text-xs flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {formatDate(post.publishedAt)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
