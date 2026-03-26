import type { Metadata } from 'next'
import Link from 'next/link'
import { Sliders, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Product Configurator',
  description: 'Use the Zen Outdoor AU product configurator to choose materials, colours, dimensions and get an instant price estimate.',
}

const steps = [
  { step: 1, label: 'Choose Product', description: 'Select the type of outdoor product you want.' },
  { step: 2, label: 'Dimensions', description: 'Enter the area size or dimensions of your space.' },
  { step: 3, label: 'Colour & Material', description: 'Pick your preferred colour, texture, and material grade.' },
  { step: 4, label: 'Instant Estimate', description: 'See your estimated price and add to cart or request a quote.' },
]

export default function ConfiguratorPage() {
  return (
    <>
      <section className="bg-cream-100 py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Sliders className="h-12 w-12 text-sage-400 mx-auto mb-4" />
          <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">Interactive Tool</span>
          <h1 className="heading-xl text-charcoal-900 mt-2 mb-4">Product Configurator</h1>
          <p className="text-charcoal-500 text-lg max-w-xl mx-auto">
            Design your outdoor space and get an instant price estimate in under 5 minutes.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="heading-md text-charcoal-900 mb-4">How the Configurator Works</h2>
            <div className="grid sm:grid-cols-4 gap-6 mt-8">
              {steps.map(({ step, label, description }) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 bg-sage-400 rounded-2xl flex items-center justify-center mx-auto mb-3 text-white font-bold font-display text-lg">
                    {step}
                  </div>
                  <h3 className="font-semibold text-charcoal-900 text-sm mb-1">{label}</h3>
                  <p className="text-charcoal-500 text-xs">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-cream-100 rounded-2xl p-8 text-center border border-border">
            <div className="w-16 h-16 bg-sage-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sliders className="h-8 w-8 text-sage-400" />
            </div>
            <h3 className="heading-sm text-charcoal-900 mb-3">Configurator Coming Soon</h3>
            <p className="text-charcoal-500 text-sm mb-6 max-w-sm mx-auto">
              Our interactive configurator is currently in development. In the meantime, request a free
              quote and our team will provide a personalised estimate within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/quotation" className="btn-primary gap-2">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/booking" className="btn-secondary">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
