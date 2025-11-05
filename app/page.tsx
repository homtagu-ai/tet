import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BarChart3, Globe2, TrendingUp, Users, CreditCard, Smartphone, ShoppingCart } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Global Payment Methods Intelligence
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert strategy consultancy specializing in payment methods analysis, e-commerce trends, 
              and market intelligence across North America, Europe, Asia-Pacific, and Latin America.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/insights">View Research</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Countries Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Payment Methods Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Research Reports</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years of Expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Trends Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Global Payment Method Trends
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding the evolving landscape of payment methods across different regions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Digital Wallets Rise</CardTitle>
                <CardDescription>
                  Digital wallets are projected to capture 41% of e-commerce transactions by 2026 in North America
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Apple Pay, Google Pay, and PayPal dominate the digital wallet landscape, 
                  offering seamless checkout experiences and driving the shift away from traditional card payments.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Card Payments Evolving</CardTitle>
                <CardDescription>
                  Traditional card payments remain strong but face competition from alternative methods
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Credit and debit cards continue to hold significant market share, particularly in 
                  point-of-sale transactions, but are increasingly being tokenized within digital wallets.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Buy Now Pay Later</CardTitle>
                <CardDescription>
                  BNPL solutions growing rapidly, especially among younger demographics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Services like Affirm and Klarna are reshaping consumer purchasing behavior, 
                  offering flexible payment options that appeal to budget-conscious shoppers.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Regional Insights */}
          <div className="bg-muted/50 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6">Regional Payment Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-4 rounded-lg bg-background border">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Globe2 className="h-5 w-5 text-primary" />
                  North America
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Digital wallets expected to surpass cards in e-commerce by 2026</li>
                  <li>• Strong credit card penetration, especially in physical retail</li>
                  <li>• Growing adoption of real-time payment systems like FedNow</li>
                  <li>• BNPL gaining traction but facing regulatory scrutiny</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-background border">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Globe2 className="h-5 w-5 text-primary" />
                  Europe
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Diverse payment landscape with strong local preferences</li>
                  <li>• Open banking driving account-to-account payments</li>
                  <li>• High adoption of contactless and mobile payments</li>
                  <li>• Strong regulatory framework shaping innovation</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-background border">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Globe2 className="h-5 w-5 text-primary" />
                  Asia-Pacific
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Leading region for digital wallet adoption and innovation</li>
                  <li>• QR code payments extremely popular in many markets</li>
                  <li>• Super-apps integrating payments with lifestyle services</li>
                  <li>• Leapfrogging traditional banking infrastructure</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-background border">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Globe2 className="h-5 w-5 text-primary" />
                  Latin America
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Rapid growth in real-time payment systems</li>
                  <li>• High cash usage but transitioning to digital</li>
                  <li>• Account-to-account transfers gaining momentum</li>
                  <li>• Strong fintech innovation addressing underbanked populations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive payment intelligence solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Market Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In-depth analysis of payment method adoption, consumer behavior, and market trends 
                  across global regions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Strategy Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert guidance on payment strategy, partner selection, and market entry 
                  for new regions and segments.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShoppingCart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Competitive Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Detailed competitive analysis of payment providers, processors, and market 
                  positioning across territories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* E-commerce Insights */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                E-commerce Payment Intelligence
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The global e-commerce landscape is experiencing unprecedented growth and transformation. 
                Understanding payment preferences is crucial for businesses looking to optimize conversion 
                rates and expand into new markets.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Online Payment Preferences</h4>
                    <p className="text-sm text-muted-foreground">
                      Track evolving consumer preferences for digital wallets, cards, and alternative payment methods
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Point-of-Sale Trends</h4>
                    <p className="text-sm text-muted-foreground">
                      Analysis of in-store payment methods including contactless, mobile wallets, and traditional cards
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Cross-border Payments</h4>
                    <p className="text-sm text-muted-foreground">
                      Insights into international payment flows and preferred methods for global transactions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 h-full flex items-center justify-center">
              <div className="w-full">
                <h3 className="text-xl font-semibold text-center mb-4">North America E-commerce Payment Methods</h3>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Image 
                    src="/images/charts/417133455-3636927237.jpeg"
                    alt="North America payment methods for e-commerce - Digital wallet 37%, Credit card 33%, Debit card 18%"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center mt-3">
                  Source: Worldpay, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Global Payment Method Forecast 2026
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Regional breakdown of e-commerce payment preferences projected for 2026
            </p>
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-lg p-8 shadow-lg mb-12">
            <Image 
              src="/images/charts/417133455-6907577603.jpeg"
              alt="Forecast 2026 Payment methods in five world regions - Market share by region"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
            <p className="text-sm text-muted-foreground text-center mt-4">
              Source: PCMI, 2024. "2024 Payments Megatrends"
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">North America</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Wallets</span>
                    <span className="font-semibold text-primary">41%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cards</span>
                    <span className="font-semibold">39%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A2A</span>
                    <span className="font-semibold">11%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Europe</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Cards</span>
                    <span className="font-semibold text-primary">35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wallets</span>
                    <span className="font-semibold">32%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A2A</span>
                    <span className="font-semibold">19%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Asia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Wallets</span>
                    <span className="font-semibold text-primary">73%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cards</span>
                    <span className="font-semibold">15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A2A</span>
                    <span className="font-semibold">6%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">South America</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Cards</span>
                    <span className="font-semibold text-primary">56%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A2A</span>
                    <span className="font-semibold">24%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wallets</span>
                    <span className="font-semibold">9%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Oceania</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Cards</span>
                    <span className="font-semibold text-primary">43%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wallets</span>
                    <span className="font-semibold">27%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A2A</span>
                    <span className="font-semibold">18%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* US Payment Methods Comparison */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              United States: E-commerce vs Point of Sale
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How payment preferences differ between online and in-store purchases
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-lg p-8 shadow-lg mb-12">
            <Image 
              src="/images/charts/417133455-7873108749.jpeg"
              alt="Payment methods in the United States - E-commerce vs Point of Sale comparison"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            <p className="text-sm text-muted-foreground text-center mt-4">
              Source: Worldpay, 2024. "The Global Payments Report 2024"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  E-commerce Leaders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Digital Wallets</span>
                      <span className="text-primary font-semibold">37%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '37%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Credit Cards</span>
                      <span className="font-semibold">32%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary/70 h-2 rounded-full" style={{width: '32%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Debit Cards</span>
                      <span className="font-semibold">19%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary/50 h-2 rounded-full" style={{width: '19%'}}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Point of Sale Leaders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Credit Cards</span>
                      <span className="text-primary font-semibold">41%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '41%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Debit Cards</span>
                      <span className="font-semibold">28%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary/70 h-2 rounded-full" style={{width: '28%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Digital Wallets</span>
                      <span className="font-semibold">15%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary/50 h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Payment Strategy?
            </h2>
            <p className="text-lg opacity-90">
              Get expert insights and data-driven recommendations to optimize your payment methods 
              and expand into new markets successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Our Team</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/insights">View Latest Research</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

