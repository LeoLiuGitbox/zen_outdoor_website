import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Star,
  Shield,
  Truck,
  Award,
  Wrench,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react'

const categories = [
  {
    name: 'Composite Decking',
    description: 'Durable, low-maintenance decking that looks and feels like natural timber.',
    href: '/products/composite-decking',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    tag: 'Best Seller',
  },
  {
    name: 'Wall Cladding',
    description: 'Transform exterior and interior walls with premium composite cladding.',
    href: '/products/wall-cladding',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    name: 'Synthetic Turf',
    description: 'Lush, green and year-round perfect — without watering or mowing.',
    href: '/products/synthetic-turf',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80',
  },
  {
    name: 'Pergolas',
    description: 'Custom-designed structures to extend your living space outdoors.',
    href: '/products/pergolas',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
    tag: 'Popular',
  },
  {
    name: 'Outdoor Roller Blinds',
    description: 'Weather protection and privacy without compromising your view.',
    href: '/products/outdoor-roller-blinds',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
]

const whyUs = [
  {
    icon: Award,
    title: 'Premium Quality',
    body: 'We source only the finest materials — UV-resistant, fade-proof, and built to withstand Australian conditions.',
  },
  {
    icon: Wrench,
    title: 'Expert Installation',
    body: 'Our certified installers ensure a flawless finish, every time. 10-year installation warranty included.',
  },
  {
    icon: Shield,
    title: 'Australian Owned',
    body: 'Proudly Australian-owned and operated since 2015. We know what Aussie homes need.',
  },
  {
    icon: Truck,
    title: 'Australia-Wide Delivery',
    body: 'Fast, reliable delivery to all major cities and regional areas. Free shipping on orders over $2,000.',
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Sydney, NSW',
    rating: 5,
    text: 'Zen Outdoor completely transformed our backyard. The composite decking is stunning and has held up perfectly through two summers. The team was professional and the installation was spotless.',
    product: 'Composite Decking',
  },
  {
    name: 'James K.',
    location: 'Melbourne, VIC',
    rating: 5,
    text: 'The pergola is exactly what we envisioned. The design consultation was helpful, and the final result exceeded our expectations. Already recommended to three neighbours.',
    product: 'Pergola',
  },
  {
    name: 'Lisa T.',
    location: 'Brisbane, QLD',
    rating: 5,
    text: 'Our synthetic turf looks incredible — guests always think it\'s real. Zero maintenance and the kids love it. Best investment we\'ve made for our home.',
    product: 'Synthetic Turf',
  },
]

const stats = [
  { value: '2,500+', label: 'Projects Completed' },
  { value: '10yr', label: 'Installation Warranty' },
  { value: '4.9★', label: 'Customer Rating' },
  { value: '15+', label: 'Years Experience' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center bg-charcoal-900 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=85"
            alt="Beautiful outdoor deck with pergola"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-charcoal-900/60 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-2xl">
            <span className="badge-sage text-xs font-semibold tracking-wide uppercase mb-4 inline-block">
              Premium Outdoor Living
            </span>
            <h1 className="heading-xl text-white mb-6 leading-tight">
              Transform Your<br />
              <span className="text-sage-400">Outdoor Space</span><br />
              Into Something Extraordinary
            </h1>
            <p className="text-charcoal-200 text-lg leading-relaxed mb-8 max-w-xl">
              Australia&apos;s trusted specialists in composite decking, wall cladding, synthetic turf,
              pergolas, and outdoor blinds. Quality that lasts a lifetime.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary text-base px-8 py-4 gap-2">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/configurator" className="btn-secondary text-base px-8 py-4 border-white text-white hover:bg-white hover:text-charcoal-900">
                Design Your Space
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-sage-400">{stat.value}</div>
                  <div className="text-xs text-charcoal-300 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Categories ────────────────────────────────── */}
      <section className="section bg-cream-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">Our Range</span>
            <h2 className="heading-lg text-charcoal-900 mt-2">Premium Outdoor Products</h2>
            <p className="text-charcoal-500 mt-3 max-w-xl mx-auto">
              Engineered for Australian conditions. Designed to last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Link
                key={cat.name}
                href={cat.href}
                className={`group card-base overflow-hidden relative ${i === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? 'h-72 lg:h-full lg:min-h-[400px]' : 'h-52'}`}>
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 to-transparent" />
                  {cat.tag && (
                    <span className="absolute top-3 left-3 badge bg-sage-400 text-white text-xs font-semibold px-3">
                      {cat.tag}
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="font-display text-xl font-semibold">{cat.name}</h3>
                    <p className="text-sm text-white/80 mt-1 line-clamp-2">{cat.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sage-300 text-sm font-medium group-hover:gap-2 transition-all">
                      Shop Now <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/products" className="btn-outline">
              View All Products
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Zen Outdoor ───────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
              <h2 className="heading-lg text-charcoal-900 mt-2 mb-6">
                Built for Australian Homes. Built to Last.
              </h2>
              <p className="text-charcoal-500 leading-relaxed mb-8">
                At Zen Outdoor, we believe your outdoor space should be as beautiful, functional, and
                low-maintenance as your indoor living areas. Every product we sell and install is selected
                for its durability in harsh Australian sun, rain, and humidity.
              </p>
              <ul className="space-y-3">
                {[
                  'UV-resistant materials for the Australian climate',
                  'Slip-resistant surfaces — safe for families',
                  'Eco-friendly and sustainable materials available',
                  'Professional design service included',
                  'Finance options available on large projects',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-charcoal-600">
                    <CheckCircle2 className="h-5 w-5 text-sage-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Link href="/about" className="btn-primary">
                  About Us
                </Link>
                <Link href="/booking" className="btn-secondary">
                  Book Consultation
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {whyUs.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-cream-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-sage-400/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-sage-500" />
                  </div>
                  <h3 className="font-semibold text-charcoal-900 text-sm mb-2">{title}</h3>
                  <p className="text-charcoal-500 text-xs leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Configurator CTA ──────────────────────────────────── */}
      <section className="relative py-20 bg-charcoal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_#9caf88_0%,_transparent_60%)]" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="badge bg-sage-400/20 text-sage-300 mb-4 inline-block uppercase text-xs tracking-widest font-semibold px-4 py-1">
            Interactive Tool
          </span>
          <h2 className="heading-lg text-white mb-4">
            Design Your Dream Outdoor Space
          </h2>
          <p className="text-charcoal-300 leading-relaxed mb-8">
            Use our interactive product configurator to choose your materials, colours, and dimensions.
            Get an instant price estimate and then request a quote — all in under 5 minutes.
          </p>
          <Link href="/configurator" className="btn-primary text-base px-8 py-4 gap-2">
            Launch Configurator
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="section bg-cream-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">Reviews</span>
            <h2 className="heading-lg text-charcoal-900 mt-2">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-base p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-bamboo-300 text-bamboo-300" />
                  ))}
                </div>
                <p className="text-charcoal-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-sage-400 flex items-center justify-center text-white font-semibold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal-900 text-sm">{t.name}</div>
                    <div className="text-xs text-charcoal-400">{t.location} · {t.product}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/testimonials" className="text-sage-500 text-sm font-medium hover:text-sage-600 inline-flex items-center gap-1">
              Read More Reviews <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ───────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">Our Work</span>
              <h2 className="heading-lg text-charcoal-900 mt-2">Recent Projects</h2>
            </div>
            <Link href="/gallery" className="text-sage-500 text-sm font-medium hover:text-sage-600 inline-flex items-center gap-1">
              View Full Gallery <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
              'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
              'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
            ].map((img, i) => (
              <Link key={i} href="/gallery" className="group relative aspect-square rounded-lg overflow-hidden">
                <Image src={img} alt={`Project ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">View Project</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────── */}
      <section className="section-sm bg-sage-400">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-white mb-2">
            Get Outdoor Inspiration & Exclusive Offers
          </h2>
          <p className="text-sage-100 text-sm mb-6">
            Join 5,000+ Australians who get our monthly outdoor living tips and special promotions.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md text-sm bg-white text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-sage-200"
            />
            <button
              type="submit"
              className="bg-charcoal-900 hover:bg-charcoal-800 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sage-100/70 text-xs mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  )
}
