import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: { currency?: string; notation?: Intl.NumberFormatOptions['notation'] } = {}
) {
  const { currency = 'AUD', notation = 'standard' } = options
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency,
    notation,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(price))
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncate(str: string, length: number): string {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

export function generateOrderNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `ZO-${timestamp}-${random}`
}

export function generateQuoteNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 5).toUpperCase()
  return `Q-${timestamp}-${random}`
}

export function calculateGST(amount: number): { exGST: number; gst: number; incGST: number } {
  const exGST = amount / 1.1
  const gst = amount - exGST
  return { exGST, gst, incGST: amount }
}

export function absoluteUrl(path: string): string {
  return `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}${path}`
}
