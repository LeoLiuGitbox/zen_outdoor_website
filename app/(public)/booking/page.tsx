import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description: 'Book a free design consultation or installation assessment with Zen Outdoor AU.',
}

const bookingTypes = [
  { value: 'DESIGN_CONSULTATION', label: 'Design Consultation', description: 'In-home visit to discuss your project and create a design plan.' },
  { value: 'INSTALLATION_ASSESSMENT', label: 'Installation Assessment', description: 'Site visit to assess your space and confirm installation requirements.' },
  { value: 'PRODUCT_DEMO', label: 'Product Demo', description: 'See and feel our materials in person — we bring samples to you.' },
  { value: 'SITE_VISIT', label: 'Site Visit / Quote', description: 'Combined site visit with a detailed fixed-price quote on the day.' },
]

const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">Free Consultation</span>
          <h1 className="heading-xl text-charcoal-900 mt-2 mb-4">Book Your Free Consultation</h1>
          <p className="text-charcoal-500 text-lg max-w-xl mx-auto">
            Our outdoor living experts will come to you — no charge, no obligation.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info */}
            <div>
              <h2 className="heading-sm text-charcoal-900 mb-6">What to Expect</h2>
              <ul className="space-y-4 mb-8">
                {[
                  'Expert visits your home or site',
                  'We measure and assess your space',
                  'Material samples and design options presented',
                  'Detailed quote provided (same day or within 24hr)',
                  'No pressure to commit',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal-600">
                    <CheckCircle2 className="h-5 w-5 text-sage-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-charcoal-600">
                  <Clock className="h-4 w-4 text-sage-400" /> Duration: 45–60 minutes
                </div>
                <div className="flex items-center gap-3 text-charcoal-600">
                  <MapPin className="h-4 w-4 text-sage-400" /> At your home or site
                </div>
                <div className="flex items-center gap-3 text-charcoal-600">
                  <Calendar className="h-4 w-4 text-sage-400" /> Mon–Sat, 8am–4pm
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <form className="space-y-6">
                {/* Type */}
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Consultation Type <span className="text-red-500">*</span></label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {bookingTypes.map((type) => (
                      <label key={type.value} className="flex gap-3 p-4 border border-border rounded-xl cursor-pointer hover:border-sage-300 has-[:checked]:border-sage-400 has-[:checked]:bg-sage-50 transition-colors">
                        <input type="radio" name="bookingType" value={type.value} className="mt-0.5 text-sage-400" />
                        <div>
                          <div className="text-sm font-medium text-charcoal-900">{type.label}</div>
                          <div className="text-xs text-charcoal-500 mt-0.5">{type.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">First Name <span className="text-red-500">*</span></label>
                    <input type="text" required className="input-base" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Last Name <span className="text-red-500">*</span></label>
                    <input type="text" required className="input-base" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Phone <span className="text-red-500">*</span></label>
                    <input type="tel" required className="input-base" placeholder="+61 4XX XXX XXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Email <span className="text-red-500">*</span></label>
                    <input type="email" required className="input-base" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Postcode / Suburb <span className="text-red-500">*</span></label>
                  <input type="text" required className="input-base max-w-xs" placeholder="e.g. 2000 or Bondi" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Preferred Date <span className="text-red-500">*</span></label>
                    <input type="date" required className="input-base" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Preferred Time <span className="text-red-500">*</span></label>
                    <select required className="input-base">
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Notes (optional)</label>
                  <textarea rows={3} className="input-base resize-none" placeholder="Anything specific you'd like to discuss or show us?" />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto px-10 py-3 text-base">
                  Confirm Booking Request
                </button>
                <p className="text-xs text-charcoal-400">
                  We will confirm your booking within 2 business hours by phone or email.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
