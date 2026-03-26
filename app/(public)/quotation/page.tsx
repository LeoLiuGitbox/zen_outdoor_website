import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Request a Quote',
  description: 'Request a custom quote from Zen Outdoor AU for composite decking, pergolas, synthetic turf, wall cladding, and outdoor blinds.',
}

const products = [
  'Composite Decking',
  'Wall Cladding',
  'Synthetic Turf',
  'Pergola',
  'Outdoor Roller Blinds',
  'Multiple Products',
]

export default function QuotationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">B2B & Residential</span>
          <h1 className="heading-xl text-charcoal-900 mt-2 mb-4">Request a Custom Quote</h1>
          <p className="text-charcoal-500 text-lg max-w-xl mx-auto">
            Fill in the form and our team will respond with a detailed, fixed-price quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="heading-sm text-charcoal-900 mb-6">Why Request a Quote?</h2>
              <ul className="space-y-4">
                {[
                  'Fixed-price, no-surprise quotes',
                  'Responded to within 24 hours',
                  'Trade & volume discounts available',
                  'We come to your site if needed',
                  'No obligation to proceed',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal-600">
                    <CheckCircle2 className="h-5 w-5 text-sage-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-5 bg-cream-100 rounded-xl">
                <FileText className="h-6 w-6 text-sage-400 mb-3" />
                <h3 className="font-semibold text-charcoal-900 text-sm mb-2">Are you a tradesperson?</h3>
                <p className="text-charcoal-500 text-xs mb-3">
                  Apply for a trade account and access wholesale pricing, priority quoting, and dedicated support.
                </p>
                <Link href="/contact" className="text-sage-500 text-xs font-medium hover:text-sage-600">
                  Apply for Trade Account →
                </Link>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">First Name <span className="text-red-500">*</span></label>
                    <input type="text" required className="input-base" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Last Name <span className="text-red-500">*</span></label>
                    <input type="text" required className="input-base" placeholder="Smith" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Email <span className="text-red-500">*</span></label>
                    <input type="email" required className="input-base" placeholder="john@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Phone <span className="text-red-500">*</span></label>
                    <input type="tel" required className="input-base" placeholder="+61 4XX XXX XXX" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Company (optional)</label>
                    <input type="text" className="input-base" placeholder="Company Pty Ltd" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Delivery Postcode <span className="text-red-500">*</span></label>
                    <input type="text" required className="input-base" placeholder="2000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Product(s) Required <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {products.map((product) => (
                      <label key={product} className="flex items-center gap-2 p-3 border border-border rounded-md cursor-pointer hover:border-sage-300 has-[:checked]:border-sage-400 has-[:checked]:bg-sage-50 transition-colors">
                        <input type="checkbox" className="text-sage-400 rounded" />
                        <span className="text-sm text-charcoal-700">{product}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Project Details <span className="text-red-500">*</span></label>
                  <textarea
                    required
                    rows={5}
                    className="input-base resize-none"
                    placeholder="Please describe your project — dimensions, area size, specific requirements, timeline, etc."
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto px-10 py-3 text-base">
                  Submit Quote Request
                </button>
                <p className="text-xs text-charcoal-400">
                  By submitting this form you agree to our{' '}
                  <Link href="/privacy" className="text-sage-500 hover:underline">Privacy Policy</Link>.
                  We will never share your data.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
