import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-100 px-4">
      <div className="text-center max-w-md">
        <div className="font-display text-8xl font-bold text-sage-400 mb-4">404</div>
        <h1 className="heading-lg text-charcoal-900 mb-4">Page Not Found</h1>
        <p className="text-charcoal-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/products" className="btn-secondary">Browse Products</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
