import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Zen Outdoor AU. Call, email, or fill in our contact form. Free design consultations available.',
}

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+61 2 0000 0000', href: 'tel:+61200000000' },
  { icon: Mail, label: 'Email', value: 'info@zenoutdoor.com.au', href: 'mailto:info@zenoutdoor.com.au' },
  { icon: MapPin, label: 'Location', value: 'Sydney, NSW, Australia', href: null },
  { icon: Clock, label: 'Business Hours', value: 'Mon–Fri 8am–5pm, Sat 9am–2pm', href: null },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">Get in Touch</span>
          <h1 className="heading-xl text-charcoal-900 mt-2 mb-4">Contact Zen Outdoor AU</h1>
          <p className="text-charcoal-500 text-lg max-w-xl mx-auto">
            Have a question? Ready to start your project? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="heading-sm text-charcoal-900 mb-6">Get in Touch</h2>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sage-400/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-sage-500" />
                    </div>
                    <div>
                      <div className="text-xs text-charcoal-400 uppercase tracking-wide font-medium mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} className="text-charcoal-700 hover:text-sage-500 transition-colors text-sm">{value}</a>
                      ) : (
                        <span className="text-charcoal-700 text-sm">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-cream-100 rounded-xl">
                <MessageSquare className="h-6 w-6 text-sage-400 mb-3" />
                <h3 className="font-semibold text-charcoal-900 mb-2">Prefer a Consultation?</h3>
                <p className="text-charcoal-500 text-sm mb-4">
                  Book a free design consultation and we&apos;ll come to you.
                </p>
                <a href="/booking" className="btn-primary text-sm w-full text-center">
                  Book Now
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="heading-sm text-charcoal-900 mb-6">Send Us a Message</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" required placeholder="Your full name" className="input-base" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input type="email" required placeholder="your@email.com" className="input-base" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Phone</label>
                    <input type="tel" placeholder="+61 4XX XXX XXX" className="input-base" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select required className="input-base">
                      <option value="">Select a subject</option>
                      <option>Product Enquiry</option>
                      <option>Quote Request</option>
                      <option>Installation Question</option>
                      <option>Warranty / Support</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project or question..."
                    className="input-base resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto px-10 py-3">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
