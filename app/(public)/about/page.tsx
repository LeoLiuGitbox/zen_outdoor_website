import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Award, Users, MapPin, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Zen Outdoor AU — Australia\'s trusted outdoor living specialists since 2015. Our story, mission, and expert team.',
}

const values = [
  { icon: Award, title: 'Uncompromising Quality', body: 'Every product is rigorously tested for Australian conditions — UV, salt, humidity, and extreme heat.' },
  { icon: Users, title: 'Customer First', body: 'From first consultation to final installation, your satisfaction is our only measure of success.' },
  { icon: MapPin, title: 'Proudly Australian', body: 'Australian-owned, staffed, and operated. We understand the Aussie lifestyle and what your home needs.' },
  { icon: Calendar, title: 'Long-Term Thinking', body: 'We design outdoor spaces built to last 20+ years, not just look good on the day of installation.' },
]

const team = [
  { name: 'Michael Chen', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
  { name: 'Sarah Williams', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { name: 'David Park', role: 'Lead Installer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Emma Johnson', role: 'Customer Success', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-charcoal-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&q=80"
            alt="About Zen Outdoor"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 to-charcoal-900/60" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <span className="text-sage-300 text-sm font-medium uppercase tracking-wider">Our Story</span>
          <h1 className="heading-xl text-white mt-2 mb-4">About Zen Outdoor AU</h1>
          <p className="text-charcoal-200 text-lg max-w-2xl mx-auto">
            Since 2015, we&apos;ve been helping Australian families transform their outdoor spaces into
            beautiful, functional extensions of their homes.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Our work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">Our Mission</span>
              <h2 className="heading-lg text-charcoal-900 mt-2 mb-6">
                We Bring Your Outdoor Vision to Life
              </h2>
              <p className="text-charcoal-500 leading-relaxed mb-6">
                Zen Outdoor was founded on a simple belief: every Australian home deserves an outdoor
                space that is as beautiful, comfortable, and functional as the indoors.
              </p>
              <p className="text-charcoal-500 leading-relaxed mb-8">
                We started as a small team of passionate outdoor living specialists and have grown into
                one of Australia&apos;s most trusted providers of composite decking, cladding, synthetic
                turf, pergolas, and outdoor blinds — completing over 2,500 projects across NSW, VIC, QLD,
                WA, and SA.
              </p>
              <ul className="space-y-3">
                {['Licensed builders and contractors', 'All products come with manufacturer warranty', 'Full project management from design to completion', 'Post-installation support and care guides'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-charcoal-600">
                    <CheckCircle2 className="h-5 w-5 text-sage-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-cream-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">What We Stand For</span>
            <h2 className="heading-lg text-charcoal-900 mt-2">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card-base p-6 text-center">
                <div className="w-12 h-12 bg-sage-400/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-sage-500" />
                </div>
                <h3 className="font-semibold text-charcoal-900 mb-2">{title}</h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sage-500 text-sm font-medium uppercase tracking-wider">The People Behind the Work</span>
            <h2 className="heading-lg text-charcoal-900 mt-2">Meet Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card-base overflow-hidden group">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-charcoal-900">{member.name}</h3>
                  <p className="text-sage-500 text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-charcoal-900 text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h2 className="heading-lg text-white mb-4">Ready to Work Together?</h2>
          <p className="text-charcoal-300 mb-8">
            Book a free design consultation and let our experts help you plan your perfect outdoor space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="btn-primary px-8 py-4">Book Free Consultation</Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal-900 px-8 py-4">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
