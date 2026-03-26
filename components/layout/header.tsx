'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ShoppingCart, User, Phone, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Products', href: '/products', children: [
    { label: 'Composite Decking', href: '/products/composite-decking' },
    { label: 'Wall Cladding', href: '/products/wall-cladding' },
    { label: 'Synthetic Turf', href: '/products/synthetic-turf' },
    { label: 'Pergolas', href: '/products/pergolas' },
    { label: 'Outdoor Roller Blinds', href: '/products/outdoor-roller-blinds' },
    { label: 'View All Products', href: '/products' },
  ]},
  { label: 'Configurator', href: '/configurator' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-border'
          : 'bg-white/80 backdrop-blur-sm'
      )}
    >
      {/* Top bar */}
      <div className="bg-charcoal-900 text-white py-1.5 px-4 text-center text-xs hidden md:block">
        <span>Free delivery on orders over $2,000 &nbsp;|&nbsp;</span>
        <a href="tel:+61200000000" className="hover:text-sage-300 transition-colors inline-flex items-center gap-1">
          <Phone className="h-3 w-3" />
          {process.env.NEXT_PUBLIC_COMPANY_PHONE || '+61 2 0000 0000'}
        </a>
        <span>&nbsp;|&nbsp;</span>
        <a href="/booking" className="hover:text-sage-300 transition-colors">Book Free Consultation</a>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-sage-400 rounded-md flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">Z</span>
          </div>
          <span className="font-display font-bold text-charcoal-900 text-lg">
            Zen Outdoor
            <span className="text-sage-400 ml-1 text-sm font-normal">AU</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              {link.children ? (
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                      pathname.startsWith(link.href)
                        ? 'text-sage-500 bg-sage-50'
                        : 'text-charcoal-700 hover:text-sage-500 hover:bg-sage-50'
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-border py-1 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-charcoal-700 hover:bg-sage-50 hover:text-sage-600 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    pathname === link.href
                      ? 'text-sage-500 bg-sage-50'
                      : 'text-charcoal-700 hover:text-sage-500 hover:bg-sage-50'
                  )}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/account"
            className="hidden lg:flex p-2 rounded-md text-charcoal-600 hover:text-sage-500 hover:bg-sage-50 transition-colors"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </Link>
          <Link
            href="/cart"
            className="relative p-2 rounded-md text-charcoal-600 hover:text-sage-500 hover:bg-sage-50 transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {/* Cart badge — populated via client state */}
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-sage-400 text-white text-[10px] font-bold rounded-full flex items-center justify-center hidden">
              0
            </span>
          </Link>
          <Link href="/quotation" className="hidden lg:block btn-primary text-xs px-4 py-2">
            Get a Quote
          </Link>
          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-charcoal-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'block px-4 py-3 rounded-md text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-sage-500 bg-sage-50'
                      : 'text-charcoal-700 hover:text-sage-500 hover:bg-sage-50'
                  )}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.children.slice(0, -1).map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 rounded-md text-xs text-charcoal-500 hover:text-sage-500 hover:bg-sage-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Link href="/account" className="btn-secondary text-center text-sm">
                My Account
              </Link>
              <Link href="/quotation" className="btn-primary text-center text-sm">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
