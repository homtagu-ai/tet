import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'

// Article data
const articles: Record<string, {
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
}> = {
  'north-america-payment-methods-2024': {
    title: 'North America Payment Methods Landscape 2024',
    date: 'November 1, 2024',
    category: 'Regional Analysis',
    readTime: '8 min read',
    excerpt: 'Digital wallets are projected to capture 41% of e-commerce transactions by 2026 in North America, surpassing traditional card payments for the first time.',
  },
  'digital-wallet-adoption-global-trends': {
    title: 'The Global Rise of Digital Wallets: 2024 Analysis',
    date: 'October 28, 2024',
    category: 'Payment Methods',
    readTime: '10 min read',
    excerpt: 'Digital wallets are transforming the global payments landscape, with adoption rates varying significantly across regions.',
  },
  'buy-now-pay-later-market-overview': {
    title: 'Buy Now Pay Later: Market Dynamics and Future Outlook',
    date: 'October 15, 2024',
    category: 'Alternative Payments',
    readTime: '12 min read',
    excerpt: 'Despite regulatory scrutiny, BNPL solutions continue to grow, particularly among younger demographics.',
  },
  'real-time-payments-fednow-impact': {
    title: 'FedNow and the Future of Real-Time Payments in the US',
    date: 'October 5, 2024',
    category: 'Infrastructure',
    readTime: '9 min read',
    excerpt: 'The launch of FedNow marks a significant milestone for US payments. While consumer impact is limited initially, B2B applications show strong potential.',
  },
  'e-commerce-payment-optimization-strategies': {
    title: 'E-commerce Payment Optimization: Best Practices for 2024',
    date: 'September 28, 2024',
    category: 'Strategy',
    readTime: '11 min read',
    excerpt: 'Optimizing payment methods can significantly improve conversion rates and reduce cart abandonment.',
  },
  'european-payment-landscape-analysis': {
    title: 'European Payment Landscape: Regional Preferences and Trends',
    date: 'September 20, 2024',
    category: 'Regional Analysis',
    readTime: '10 min read',
    excerpt: "Europe's diverse payment ecosystem features strong local preferences, with open banking driving significant innovation.",
  },
  'asia-pacific-payment-innovation': {
    title: 'Asia-Pacific: Leading Global Payment Innovation',
    date: 'September 12, 2024',
    category: 'Regional Analysis',
    readTime: '13 min read',
    excerpt: 'Asia-Pacific continues to lead in payment innovation, with QR code payments and mobile-first solutions achieving unprecedented adoption.',
  },
  'latin-america-payment-revolution': {
    title: 'Latin America Payment Revolution: From Cash to Digital',
    date: 'September 5, 2024',
    category: 'Regional Analysis',
    readTime: '12 min read',
    excerpt: 'Latin America is experiencing rapid digital payment growth, with real-time payment systems addressing historically underbanked populations.',
  },
  'contactless-payments-pos-trends': {
    title: 'Contactless Payments: Transforming Point-of-Sale Experience',
    date: 'August 29, 2024',
    category: 'Payment Methods',
    readTime: '8 min read',
    excerpt: 'Contactless payment adoption accelerated dramatically, fundamentally changing consumer expectations for in-store experiences.',
  },
  'payment-security-fraud-prevention': {
    title: 'Payment Security and Fraud Prevention: 2024 Update',
    date: 'August 15, 2024',
    category: 'Security',
    readTime: '11 min read',
    excerpt: 'As payment methods evolve, so do security challenges. Latest trends in fraud prevention and secure payment processing.',
  },
  'open-banking-payment-future': {
    title: 'Open Banking: Shaping the Future of Payments',
    date: 'August 1, 2024',
    category: 'Innovation',
    readTime: '10 min read',
    excerpt: 'Open banking initiatives are enabling new payment experiences and business models, particularly in Europe and select emerging markets.',
  },
  'cross-border-payments-analysis': {
    title: 'Cross-Border Payments: Challenges and Opportunities',
    date: 'July 25, 2024',
    category: 'Global Payments',
    readTime: '12 min read',
    excerpt: 'International payments remain complex, but new technologies and partnerships are making cross-border transactions faster and more affordable.',
  },
}

// Generate static params for all article slugs
export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata for each article
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles[params.slug] || articles['north-america-payment-methods-2024']
  
  return {
    title: `${article.title} | PaymentScope Analytics`,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug] || articles['north-america-payment-methods-2024']
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="py-6 border-b">
        <div className="container">
          <Button variant="ghost" asChild>
            <Link href="/insights">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 md:py-20">
        <div className="container">
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            <Separator className="mb-8" />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                {article.excerpt}
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">The Digital Wallet Revolution</h2>
              <p className="mb-6">
                According to recent market research, digital wallets accounted for 37% of transaction volume in 2023, 
                and this figure is projected to reach 51% by 2027. This growth is largely driven by the popularity 
                of Apple Pay, Google Pay, and PayPal, which have successfully integrated card credentials while 
                offering enhanced convenience and security features.
              </p>

              <p className="mb-6">
                The rise of digital wallets isn't just about technology adoption—it reflects changing consumer 
                preferences for seamless checkout experiences, enhanced security through tokenization, and the 
                convenience of not needing to enter card details for every transaction.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Traditional Cards Still Relevant</h2>
              <p className="mb-6">
                Despite the growth of digital wallets, credit and debit cards remain a significant force in the 
                payments landscape. In 2023, cards collectively accounted for approximately 71% of consumer spending 
                in the United States. However, an increasing portion of these card transactions are now processed 
                through digital wallet interfaces rather than direct card entry.
              </p>

              <p className="mb-6">
                Physical retail environments continue to show strong card usage, particularly for credit cards. 
                However, even in point-of-sale scenarios, contactless card payments and mobile wallet taps are 
                gaining rapid adoption, with POS digital wallet usage increasing by 36% in 2023 alone.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Buy Now Pay Later Growth</h2>
              <p className="mb-6">
                The Buy Now Pay Later (BNPL) segment continues to defend its market position despite regulatory 
                scrutiny. Leading providers like Affirm and Klarna have reported strong quarterly returns, 
                particularly among younger demographics who value flexible payment options.
              </p>

              <p className="mb-6">
                The Consumer Financial Protection Bureau (CFPB) has expressed concerns about BNPL usage among 
                financially stressed consumers, suggesting that new regulations may be forthcoming. However, 
                this hasn't slowed merchant adoption, with major retailers continuing to integrate BNPL options 
                at checkout to appeal to budget-conscious shoppers.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">FedNow and Real-Time Payments</h2>
              <p className="mb-6">
                The launch of FedNow in 2023 marks a significant milestone for the United States payments 
                infrastructure. While the immediate consumer impact has been limited, the real-time payment 
                system shows strong potential for business-to-business applications. FedNow reduces dependence 
                on legacy ACH and Wire systems, enabling more agile and competitive banking services.
              </p>

              <p className="mb-6">
                As adoption increases, FedNow could reshape the payment landscape, particularly for time-sensitive 
                transactions and scenarios where immediate settlement is valuable. The system's success will depend 
                on bank participation and consumer awareness—both of which are still in early stages.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Regional Differences: US vs Canada</h2>
              <p className="mb-6">
                While the United States is seeing rapid digital wallet growth, Canada maintains stronger reliance 
                on traditional credit and debit cards. Nearly 50% of Canadian payments are made with credit cards, 
                though this share is expected to decline by up to 10 percentage points by 2027.
              </p>

              <p className="mb-6">
                Canada's unique Interac system—a closed, private payment network—continues to show strong growth 
                at 27% annually through 2026. Interac enables person-to-person (P2P) and person-to-merchant (P2M) 
                payments and represents a distinctly Canadian approach to payment innovation.
              </p>

              <p className="mb-6">
                The potential launch of Real Time Rail (RTR), a new real-time payment system promoted by Payments 
                Canada, could significantly alter these dynamics. If successfully implemented, RTR would provide 
                capabilities similar to FedNow in the US or Pix in Brazil.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">E-commerce Growth Projections</h2>
              <p className="mb-6">
                After experiencing 24% annual growth in 2020 during the pandemic, North American e-commerce is 
                projected to moderate to 12% annual growth by 2026. Despite this normalization, the total market 
                is expected to reach $2.5 trillion by 2026, representing an enormous opportunity for merchants and 
                payment providers.
              </p>

              <p className="mb-6">
                Success in this environment requires understanding regional preferences, offering appropriate payment 
                methods, and optimizing the checkout experience. Merchants who fail to offer popular payment options 
                risk losing customers at the final stage of purchase.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Open Banking Developments</h2>
              <p className="mb-6">
                The United States is developing its open banking framework largely through private initiatives like 
                Plaid, positioning it as relatively advanced compared to other countries in the Americas. However, 
                government support and regulatory clarity remain limited.
              </p>

              <p className="mb-6">
                The CFPB has begun discussions on consumer financial data privacy and rights, launching a regulatory 
                proposal in October 2023. If implemented effectively, open banking could enable new payment 
                experiences, particularly for account-to-account transfers that bypass card networks entirely.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Strategic Implications for Businesses</h2>
              <p className="mb-6">
                For merchants and payment service providers, these trends suggest several strategic priorities:
              </p>

              <ul className="mb-6 space-y-2">
                <li>Ensure support for major digital wallets (Apple Pay, Google Pay, PayPal) to meet growing consumer expectations</li>
                <li>Maintain robust card payment capabilities while preparing for increased wallet-based card transactions</li>
                <li>Consider BNPL integration for categories popular with younger demographics</li>
                <li>Monitor real-time payment developments for potential B2B applications</li>
                <li>Stay informed about open banking regulations that could enable new payment flows</li>
              </ul>

              <p className="mb-6">
                The payment landscape is evolving rapidly, but businesses that stay informed and adapt their 
                strategies accordingly will be well-positioned to capitalize on these changes.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Conclusion</h2>
              <p className="mb-6">
                North America's payment landscape is experiencing a fundamental shift as digital wallets rise to 
                dominance in e-commerce while traditional cards maintain strength in physical retail. The emergence 
                of real-time payment systems, continued BNPL growth, and potential open banking developments add 
                additional complexity and opportunity to the market.
              </p>

              <p className="mb-6">
                Success in this environment requires deep market understanding, strategic flexibility, and the 
                ability to offer payment experiences that match consumer preferences. Organizations that invest 
                in payment intelligence and adapt proactively will gain competitive advantages in conversion rates, 
                customer satisfaction, and market reach.
              </p>
            </div>

            <Separator className="my-12" />

            {/* Tags */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['North America', 'Digital Wallets', 'E-commerce', 'Market Trends', 'FedNow', 'BNPL'].map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-muted text-sm rounded-md hover:bg-muted/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Need Deeper Insights?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact our team for custom research and strategic consulting tailored to your specific needs.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </article>
        </div>
      </section>

            {/* Related Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Insights</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Digital Wallet Adoption: Global Trends',
                category: 'Payment Methods',
              },
              {
                title: 'FedNow and Real-Time Payments',
                category: 'Infrastructure',
              },
              {
                title: 'European Payment Landscape Analysis',
                category: 'Regional Analysis',
              }
            ].map((article, index) => (
              <div 
                key={index}
                className="block p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <span className="text-sm text-primary font-medium">
                  {article.category}
                </span>
                <h3 className="font-semibold mt-2 mb-4">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

