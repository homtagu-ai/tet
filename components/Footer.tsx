import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">PS</span>
              </div>
              <span className="font-bold text-lg">PaymentScope</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Leading strategy consultancy specializing in global payment methods intelligence and market analysis.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@paymentscope-analytics.com" className="hover:text-primary">
                  contact@paymentscope-analytics.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+12125551234" className="hover:text-primary">
                  +1 (212) 555-1234
                </a>
              </div>
              <div className="flex items-start gap-2 mt-1">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span className="text-xs">
                  350 Fifth Avenue, Suite 7800<br />
                  New York, NY 10118, United States
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-muted-foreground hover:text-primary transition-colors">
                  Insights & Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/insights" className="text-muted-foreground hover:text-primary transition-colors">
                  Research Reports
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-muted-foreground hover:text-primary transition-colors">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-muted-foreground hover:text-primary transition-colors">
                  Industry Trends
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-muted-foreground hover:text-primary transition-colors">
                  Payment Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PaymentScope Analytics. All rights reserved.</p>
          <p>A leading payments intelligence consultancy</p>
        </div>
      </div>
    </footer>
  )
}

