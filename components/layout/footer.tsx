import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

const productLinks = [
  { label: 'Composite Decking', href: '/products/composite-decking' },
  { label: 'Wall Cladding', href: '/products/wall-cladding' },
  { label: 'Synthetic Turf', href: '/products/synthetic-turf' },
  { label: 'Pergolas', href: '/products/pergolas' },
  { label: 'Outdoor Roller Blinds', href: '/products/outdoor-roller-blinds' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
]

const supportLinks = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Get a Quote', href: '/quotation' },
  { label: 'Book Consultation', href: '/booking' },
  { label: 'Product Configurator', href: '/configurator' },
  { label: 'FAQ', href: '/faq' },
]

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      {/* CTA band */}
      <div className="bg-sage-400 py-10">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-white">
              Ready to transform your outdoor space?
            </h2>
            <p className="text-sage-100 text-sm mt-1">
              Book a free design consultation with our experts today.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/booking" className="bg-white text-sage-600 hover:bg-sage-50 px-6 py-3 rounded-md font-medium text-sm transition-colors">
              Book Consultation
            </Link>
            <Link href="/quotation" className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium text-sm transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sage-400 rounded-md flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">Z</span>
              </div>
              <span className="font-display font-bold text-white text-lg">
                Zen Outdoor <span className="text-sage-400 text-sm font-normal">AU</span>
              </span>
            </Link>
            <p className="text-charcoal-300 text-sm leading-relaxed max-w-xs">
              Australia&apos;s premium outdoor living specialists. We bring your dream outdoor space to life
              with quality materials and expert installation.
            </p>
            <div className="mt-6 space-y-2">
              <a href="tel:+61200000000" className="flex items-center gap-2 text-sm text-charcoal-300 hover:text-sage-300 transition-colors">
                <Phone className="h-4 w-4 text-sage-400" />
                {process.env.NEXT_PUBLIC_COMPANY_PHONE || '+61 2 0000 0000'}
              </a>
              <a href="mailto:info@zenoutdoor.com.au" className="flex items-center gap-2 text-sm text-charcoal-300 hover:text-sage-300 transition-colors">
                <Mail className="h-4 w-4 text-sage-400" />
                info@zenoutdoor.com.au
              </a>
              <span className="flex items-center gap-2 text-sm text-charcoal-300">
                <MapPin className="h-4 w-4 text-sage-400 shrink-0" />
                Sydney, NSW, Australia
              </span>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-md bg-charcoal-800 text-charcoal-300 hover:text-sage-400 hover:bg-charcoal-700 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-md bg-charcoal-800 text-charcoal-300 hover:text-sage-400 hover:bg-charcoal-700 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-md bg-charcoal-800 text-charcoal-300 hover:text-sage-400 hover:bg-charcoal-700 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-charcoal-300 hover:text-sage-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-charcoal-300 hover:text-sage-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-charcoal-300 hover:text-sage-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Newsletter */}
            <div className="mt-8">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-3">Newsletter</h3>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-charcoal-800 border border-charcoal-700 rounded-md px-3 py-2 text-sm text-white placeholder:text-charcoal-400 focus:outline-none focus:ring-1 focus:ring-sage-400"
                />
                <button type="submit" className="bg-sage-400 hover:bg-sage-500 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-800 py-6">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <p>&copy; {new Date().getFullYear()} Zen Outdoor AU Pty Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-sage-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-sage-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-sage-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
