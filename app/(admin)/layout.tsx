import Link from 'next/link'
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Warehouse,
  Tag,
  FileText,
  Users,
  CalendarDays,
  Newspaper,
  BarChart3,
  Settings,
  LogOut,
  ChevronRight,
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Products', href: '/admin/products', icon: Package },
  { label: 'Orders', href: '/admin/orders', icon: ShoppingCart },
  { label: 'Inventory', href: '/admin/inventory', icon: Warehouse },
  { label: 'Promotions', href: '/admin/promotions', icon: Tag },
  { label: 'Quotations', href: '/admin/quotations', icon: FileText },
  { label: 'Customers', href: '/admin/customers', icon: Users },
  { label: 'Bookings', href: '/admin/bookings', icon: CalendarDays },
  { label: 'Blog / CMS', href: '/admin/blog', icon: Newspaper },
  { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
]

export const metadata = {
  title: { default: 'Admin Portal', template: '%s | Zen Outdoor Admin' },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-charcoal-50 flex">
      {/* Sidebar */}
      <aside className="w-60 bg-charcoal-900 flex flex-col shrink-0 fixed inset-y-0 left-0 z-50">
        <div className="h-16 flex items-center px-5 border-b border-charcoal-800">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-sage-400 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm font-display">Z</span>
            </div>
            <div className="text-white text-sm font-semibold leading-tight">
              Zen Outdoor<br />
              <span className="text-sage-400 text-xs font-normal">Admin Portal</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-charcoal-300 hover:text-white hover:bg-charcoal-800 transition-colors text-sm group"
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
              <ChevronRight className="h-3.5 w-3.5 ml-auto opacity-0 group-hover:opacity-50" />
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-charcoal-800">
          <div className="flex items-center gap-3 px-3 py-2.5 mb-1">
            <div className="w-7 h-7 rounded-full bg-sage-400 flex items-center justify-center text-white text-xs font-semibold">A</div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-xs font-medium truncate">Admin User</div>
              <div className="text-charcoal-400 text-xs truncate">admin@zenoutdoor.com.au</div>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-charcoal-400 hover:text-white hover:bg-charcoal-800 transition-colors text-sm">
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 ml-60">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-border flex items-center px-6 justify-between sticky top-0 z-10">
          <div className="text-sm text-charcoal-500">
            <Link href="/" className="hover:text-sage-500 transition-colors">← View Live Site</Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-charcoal-400">Today: {new Date().toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
