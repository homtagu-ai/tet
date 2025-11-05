import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Calendar, TrendingUp } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment Insights & Research | PaymentScope Analytics',
  description: 'Expert insights, research reports, and analysis on global payment methods, digital wallets, e-commerce trends, and payment industry developments.',
}

const insights = [
  {
    slug: 'north-america-payment-methods-2024',
    title: 'North America Payment Methods Landscape 2024',
    date: 'November 1, 2024',
    category: 'Regional Analysis',
    excerpt: 'Digital wallets are projected to capture 41% of e-commerce transactions by 2026 in North America, surpassing traditional card payments for the first time.',
    readTime: '8 min read',
    tags: ['North America', 'Digital Wallets', 'E-commerce', 'Market Trends']
  },
  {
    slug: 'digital-wallet-adoption-global-trends',
    title: 'The Global Rise of Digital Wallets: 2024 Analysis',
    date: 'October 28, 2024',
    category: 'Payment Methods',
    excerpt: 'Digital wallets are transforming the global payments landscape, with adoption rates varying significantly across regions. Apple Pay and Google Pay lead in North America.',
    readTime: '10 min read',
    tags: ['Digital Wallets', 'Global Trends', 'Mobile Payments']
  },
  {
    slug: 'buy-now-pay-later-market-overview',
    title: 'Buy Now Pay Later: Market Dynamics and Future Outlook',
    date: 'October 15, 2024',
    category: 'Alternative Payments',
    excerpt: 'Despite regulatory scrutiny, BNPL solutions continue to grow, particularly among younger demographics. Affirm and Klarna report strong quarterly returns.',
    readTime: '12 min read',
    tags: ['BNPL', 'Affirm', 'Klarna', 'Fintech']
  },
  {
    slug: 'real-time-payments-fednow-impact',
    title: 'FedNow and the Future of Real-Time Payments in the US',
    date: 'October 5, 2024',
    category: 'Infrastructure',
    excerpt: 'The launch of FedNow marks a significant milestone for US payments. While consumer impact is limited initially, B2B applications show strong potential.',
    readTime: '9 min read',
    tags: ['FedNow', 'Real-Time Payments', 'B2B Payments', 'United States']
  },
  {
    slug: 'e-commerce-payment-optimization-strategies',
    title: 'E-commerce Payment Optimization: Best Practices for 2024',
    date: 'September 28, 2024',
    category: 'Strategy',
    excerpt: 'Optimizing payment methods can significantly improve conversion rates and reduce cart abandonment. Key strategies for online merchants.',
    readTime: '11 min read',
    tags: ['E-commerce', 'Optimization', 'Conversion', 'Best Practices']
  },
  {
    slug: 'european-payment-landscape-analysis',
    title: 'European Payment Landscape: Regional Preferences and Trends',
    date: 'September 20, 2024',
    category: 'Regional Analysis',
    excerpt: 'Europe diverse payment ecosystem features strong local preferences, with open banking driving significant innovation in account-to-account payments.',
    readTime: '10 min read',
    tags: ['Europe', 'Open Banking', 'A2A Payments', 'Regional Trends']
  },
  {
    slug: 'asia-pacific-payment-innovation',
    title: 'Asia-Pacific: Leading Global Payment Innovation',
    date: 'September 12, 2024',
    category: 'Regional Analysis',
    excerpt: 'Asia-Pacific continues to lead in payment innovation, with QR code payments, super-apps, and mobile-first solutions achieving unprecedented adoption.',
    readTime: '13 min read',
    tags: ['Asia-Pacific', 'QR Payments', 'Super Apps', 'Innovation']
  },
  {
    slug: 'latin-america-payment-revolution',
    title: 'Latin America Payment Revolution: From Cash to Digital',
    date: 'September 5, 2024',
    category: 'Regional Analysis',
    excerpt: 'Latin America is experiencing rapid digital payment growth, with real-time payment systems and fintech innovations addressing historically underbanked populations.',
    readTime: '12 min read',
    tags: ['Latin America', 'Financial Inclusion', 'Fintech', 'Digital Payments']
  },
  {
    slug: 'contactless-payments-pos-trends',
    title: 'Contactless Payments: Transforming Point-of-Sale Experience',
    date: 'August 29, 2024',
    category: 'Payment Methods',
    excerpt: 'Contactless payment adoption accelerated dramatically, fundamentally changing consumer expectations for in-store payment experiences.',
    readTime: '8 min read',
    tags: ['Contactless', 'POS', 'NFC', 'Physical Retail']
  },
  {
    slug: 'payment-security-fraud-prevention',
    title: 'Payment Security and Fraud Prevention: 2024 Update',
    date: 'August 15, 2024',
    category: 'Security',
    excerpt: 'As payment methods evolve, so do security challenges. Latest trends in fraud prevention, authentication, and secure payment processing.',
    readTime: '11 min read',
    tags: ['Security', 'Fraud Prevention', '3D Secure', 'Authentication']
  },
  {
    slug: 'open-banking-payment-future',
    title: 'Open Banking: Shaping the Future of Payments',
    date: 'August 1, 2024',
    category: 'Innovation',
    excerpt: 'Open banking initiatives are enabling new payment experiences and business models, particularly in Europe and select emerging markets.',
    readTime: '10 min read',
    tags: ['Open Banking', 'APIs', 'Account Access', 'Regulation']
  },
  {
    slug: 'cross-border-payments-analysis',
    title: 'Cross-Border Payments: Challenges and Opportunities',
    date: 'July 25, 2024',
    category: 'Global Payments',
    excerpt: 'International payments remain complex, but new technologies and partnerships are making cross-border transactions faster and more affordable.',
    readTime: '12 min read',
    tags: ['Cross-Border', 'International', 'Remittances', 'FX']
  }
]

export default function InsightsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Payment Insights & Research
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert analysis, market research, and strategic insights on global payment methods, 
              e-commerce trends, and the evolving payments landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-12 border-b">
        <div className="container">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 md:p-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Featured
                </span>
                <span className="text-sm text-muted-foreground">{insights[0].category}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {insights[0].title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {insights[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {insights[0].date}
                </div>
                <div>{insights[0].readTime}</div>
              </div>
              <Button asChild size="lg">
                <Link href={`/insights/${insights[0].slug}`}>
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Insights */}
      <section className="py-20" id="latest-insights">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Latest Insights</h2>
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="h-5 w-5" />
              <span>{insights.length} Articles</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary">
                      {insight.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {insight.readTime}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2">
                    {insight.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {insight.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    {insight.date}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {insight.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-muted text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground">
              Explore insights organized by topic and region
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Regional Analysis', count: 4 },
              { name: 'Payment Methods', count: 3 },
              { name: 'Alternative Payments', count: 2 },
              { name: 'Infrastructure', count: 2 },
              { name: 'Strategy', count: 1 },
              { name: 'Security', count: 1 },
              { name: 'Innovation', count: 1 },
              { name: 'Global Payments', count: 1 }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{category.name}</h3>
                    <span className="text-sm text-muted-foreground">
                      {category.count} {category.count === 1 ? 'article' : 'articles'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Need Custom Research?
            </h2>
            <p className="text-lg opacity-90">
              Our team can develop tailored research and analysis specific to your business needs 
              and market questions.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

