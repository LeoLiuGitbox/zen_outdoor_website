import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Ruler, Hammer, Palette, Wrench, FileCheck, HeartHandshake } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Zen Outdoor AU provides end-to-end outdoor living services — design consultation, supply, professional installation, and aftercare.',
}

const services = [
  {
    icon: Palette,
    title: 'Design Consultation',
    description: 'Our expert designers visit your property, understand your vision, and create a tailored design plan complete with 3D renders, materials specification, and a detailed quote.',
    details: ['Free in-home consultation', 'Professional 3D renders', 'Material samples provided', 'No-obligation quote'],
  },
  {
    icon: Ruler,
    title: 'Supply Only',
    description: 'Already have your own installer? We supply premium products direct to you or your tradesperson. We offer trade pricing and technical support for professional installers.',
    details: ['Australia-wide delivery', 'Trade pricing available', 'Technical documentation', 'Product training support'],
  },
  {
    icon: Hammer,
    title: 'Professional Installation',
    description: 'Our certified installation teams ensure every project is completed to the highest standard. All work is engineering-certified where required and backed by a 10-year workmanship warranty.',
    details: ['Licensed installers', '10-year installation warranty', 'Engineering certified', 'Clean & tidy worksite'],
  },
  {
    icon: FileCheck,
    title: 'Permits & Council Approvals',
    description: 'Navigating building permits can be complex. Our team manages the entire DA and CDC process for you, ensuring your project meets all local council requirements.',
    details: ['DA & CDC management', 'Council liaison', 'Compliance documentation', 'Engineer\'s reports'],
  },
  {
    icon: Wrench,
    title: 'Repairs & Maintenance',
    description: 'Existing outdoor products showing their age? Our team handles repairs, replacements, and maintenance for composite decking, cladding, turf, pergolas, and blinds.',
    details: ['All brands serviced', 'Emergency repairs available', 'Maintenance programmes', 'Part replacement'],
  },
  {
    icon: HeartHandshake,
    title: 'Aftercare & Support',
    description: 'Our relationship with you doesn\'t end at installation. We provide ongoing aftercare advice, annual check-ins, and a dedicated support line for all warranty matters.',
    details: ['Dedicated support line', 'Care & maintenance guides', 'Annual inspection option', 'Warranty claims support'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">Full Service</span>
          <h1 className="heading-xl text-charcoal-900 mt-2 mb-4">End-to-End Outdoor Solutions</h1>
          <p className="text-charcoal-500 text-lg max-w-2xl mx-auto">
            From first concept to finished project, we handle every step. Design, supply, installation,
            permits, and aftercare — all under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, details }) => (
              <div key={title} className="card-base p-6 flex flex-col">
                <div className="w-12 h-12 bg-sage-400/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-sage-500" />
                </div>
                <h3 className="heading-sm text-charcoal-900 mb-3">{title}</h3>
                <p className="text-charcoal-500 text-sm leading-relaxed mb-5 flex-1">{description}</p>
                <ul className="space-y-1.5">
                  {details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-charcoal-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-cream-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">How It Works</span>
            <h2 className="heading-lg text-charcoal-900 mt-2">Your Project Journey</h2>
          </div>
          <div className="relative grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Book Consultation', body: 'Schedule your free in-home design consultation online.' },
              { step: '02', title: 'Design & Quote', body: 'We design your space and provide a detailed, fixed-price quote.' },
              { step: '03', title: 'We Build It', body: 'Our certified team installs your project on time and on budget.' },
              { step: '04', title: 'Enjoy & Relax', body: 'Your new outdoor space is ready. We provide full aftercare support.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="relative text-center">
                <div className="w-14 h-14 bg-sage-400 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-display font-bold text-lg">
                  {step}
                </div>
                <h3 className="font-semibold text-charcoal-900 mb-2">{title}</h3>
                <p className="text-charcoal-500 text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-charcoal-900 text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-xl">
          <h2 className="heading-lg text-white mb-4">Ready to Get Started?</h2>
          <p className="text-charcoal-300 mb-8">Book your free consultation today — no obligation, no pressure.</p>
          <Link href="/booking" className="btn-primary px-10 py-4 text-base">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
