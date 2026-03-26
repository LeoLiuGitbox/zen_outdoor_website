import type { Metadata } from 'next'
import Link from 'next/link'
import {
  TrendingUp,
  ShoppingCart,
  Users,
  FileText,
  AlertTriangle,
  CalendarDays,
  ArrowUpRight,
  ArrowDownRight,
  Package,
} from 'lucide-react'

export const metadata: Metadata = { title: 'Dashboard' }

const stats = [
  { label: 'Revenue (This Month)', value: '$48,320', change: '+12.4%', up: true, icon: TrendingUp, color: 'text-sage-500 bg-sage-50' },
  { label: 'Orders', value: '38', change: '+5.6%', up: true, icon: ShoppingCart, color: 'text-blue-500 bg-blue-50' },
  { label: 'New Customers', value: '24', change: '-2.1%', up: false, icon: Users, color: 'text-purple-500 bg-purple-50' },
  { label: 'Pending Quotes', value: '7', change: '+3', up: true, icon: FileText, color: 'text-amber-500 bg-amber-50' },
]

const recentOrders = [
  { id: 'ZO-ABC123', customer: 'James K.', product: 'Composite Decking 40m²', amount: '$3,560', status: 'Processing' },
  { id: 'ZO-DEF456', customer: 'Lisa T.', product: 'Synthetic Turf 25m²', amount: '$1,875', status: 'Shipped' },
  { id: 'ZO-GHI789', customer: 'Sarah M.', product: 'Pergola 4x5m', amount: '$8,200', status: 'Pending' },
  { id: 'ZO-JKL012', customer: 'Mark R.', product: 'Outdoor Blinds x3', amount: '$2,490', status: 'Delivered' },
  { id: 'ZO-MNO345', customer: 'Emma D.', product: 'Wall Cladding 18m²', amount: '$2,160', status: 'Processing' },
]

const alerts = [
  { type: 'stock', message: 'Composite Decking — Slate Grey 6m: 3 units left (below threshold)', href: '/admin/inventory' },
  { type: 'stock', message: 'Synthetic Turf — 40mm Pile: 2 rolls remaining', href: '/admin/inventory' },
  { type: 'quote', message: '3 quote requests pending review for more than 48 hours', href: '/admin/quotations' },
  { type: 'booking', message: '2 bookings confirmed for tomorrow — check calendar', href: '/admin/bookings' },
]

const upcomingBookings = [
  { time: '9:00 AM', name: 'David Park', type: 'Design Consultation', location: 'Bondi, NSW' },
  { time: '11:30 AM', name: 'Karen Lim', type: 'Site Visit / Quote', location: 'Chatswood, NSW' },
  { time: '2:00 PM', name: 'Tom Walsh', type: 'Installation Assessment', location: 'Parramatta, NSW' },
]

const statusColor: Record<string, string> = {
  Pending: 'badge bg-amber-100 text-amber-700',
  Processing: 'badge bg-blue-100 text-blue-700',
  Shipped: 'badge bg-purple-100 text-purple-700',
  Delivered: 'badge bg-sage-100 text-sage-700',
  Cancelled: 'badge bg-red-100 text-red-700',
}

export default function DashboardPage() {
  const today = new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-charcoal-900 font-display">Dashboard</h1>
        <p className="text-charcoal-400 text-sm mt-1">{today}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(({ label, value, change, up, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-xl border border-border p-5 flex items-start gap-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-charcoal-400 font-medium mb-1">{label}</div>
              <div className="text-2xl font-bold text-charcoal-900 font-display">{value}</div>
              <div className={`text-xs mt-1 flex items-center gap-0.5 ${up ? 'text-sage-500' : 'text-red-500'}`}>
                {up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {change} vs last month
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-border">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h2 className="font-semibold text-charcoal-900">Recent Orders</h2>
            <Link href="/admin/orders" className="text-sage-500 text-xs hover:text-sage-600 font-medium">View All →</Link>
          </div>
          <div className="divide-y divide-border">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center gap-4 px-5 py-3.5 hover:bg-cream-50 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-charcoal-900 truncate">{order.customer}</div>
                  <div className="text-xs text-charcoal-400 truncate">{order.id} · {order.product}</div>
                </div>
                <div className="text-sm font-semibold text-charcoal-900 shrink-0">{order.amount}</div>
                <span className={statusColor[order.status] || 'badge bg-charcoal-100 text-charcoal-700'}>{order.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {/* Alerts */}
          <div className="bg-white rounded-xl border border-border">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <h2 className="font-semibold text-charcoal-900 text-sm">Alerts</h2>
            </div>
            <div className="divide-y divide-border">
              {alerts.map((alert) => (
                <Link key={alert.message} href={alert.href} className="block px-5 py-3 hover:bg-cream-50 transition-colors">
                  <p className="text-xs text-charcoal-600 leading-relaxed">{alert.message}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Upcoming Bookings */}
          <div className="bg-white rounded-xl border border-border">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-sage-400" />
                <h2 className="font-semibold text-charcoal-900 text-sm">Today&apos;s Bookings</h2>
              </div>
              <Link href="/admin/bookings" className="text-sage-500 text-xs hover:text-sage-600">View All →</Link>
            </div>
            <div className="divide-y divide-border">
              {upcomingBookings.map((b) => (
                <div key={b.name} className="px-5 py-3">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-semibold text-sage-500">{b.time}</span>
                    <span className="text-xs text-charcoal-900 font-medium">{b.name}</span>
                  </div>
                  <div className="text-xs text-charcoal-400">{b.type} · {b.location}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-border p-5">
        <h2 className="font-semibold text-charcoal-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Add Product', href: '/admin/products/new', icon: Package },
            { label: 'View Quotes', href: '/admin/quotations', icon: FileText },
            { label: 'New Promotion', href: '/admin/promotions/new', icon: TrendingUp },
            { label: 'New Blog Post', href: '/admin/blog/new', icon: Users },
          ].map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border hover:border-sage-300 hover:bg-sage-50 transition-colors text-center group"
            >
              <Icon className="h-5 w-5 text-charcoal-400 group-hover:text-sage-500 transition-colors" />
              <span className="text-xs font-medium text-charcoal-600 group-hover:text-sage-600">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
