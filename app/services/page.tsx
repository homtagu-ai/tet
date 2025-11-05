import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  BarChart3, Users, Target, Globe2, FileText, Lightbulb, 
  TrendingUp, Shield, CheckCircle2, ArrowRight 
} from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | PaymentScope Analytics',
  description: 'Comprehensive payment intelligence solutions including market research, strategy consulting, competitive analysis, and custom research for the global payments industry.',
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive payment intelligence solutions designed to drive your business forward 
              with actionable insights and strategic guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions to meet your payment intelligence needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Market Research & Analysis</CardTitle>
                <CardDescription>
                  In-depth analysis of payment method adoption and market trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Payment method share analysis by region and segment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Consumer behavior and preference studies
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    E-commerce and point-of-sale trend analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Market sizing and growth forecasts
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Strategy Consulting</CardTitle>
                <CardDescription>
                  Expert guidance for payment strategy and market expansion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Payment method optimization strategies
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Market entry planning and roadmaps
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Partnership and vendor selection support
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Payment infrastructure assessment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Competitive Intelligence</CardTitle>
                <CardDescription>
                  Detailed analysis of competitors and market positioning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Competitor payment strategy analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Market share and positioning studies
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Benchmarking against industry leaders
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Emerging competitor identification
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Regional Market Analysis</CardTitle>
                <CardDescription>
                  Deep-dive analysis into specific geographic markets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Country-specific payment landscape reports
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Local payment method preferences
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Regulatory environment assessment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Cultural and behavioral insights
                  </li>
                </ul>
                <Button variant="link" asChild className="px-0">
                  <Link href="/contact">Learn more <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Custom Research</CardTitle>
                <CardDescription>
                  Tailored research projects to address your specific needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Bespoke market studies and surveys
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Customer payment journey mapping
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Payment provider evaluations
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Industry-specific payment analysis
                  </li>
                </ul>
                <Button variant="link" asChild className="px-0">
                  <Link href="/contact">Learn more <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Innovation Advisory</CardTitle>
                <CardDescription>
                  Guidance on emerging payment technologies and trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Emerging payment method assessment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Technology trend analysis and impact
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Digital transformation roadmaps
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Innovation pipeline development
                  </li>
                </ul>
                <Button variant="link" asChild className="px-0">
                  <Link href="/contact">Learn more <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Offerings */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized Offerings
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Payment Optimization Audits</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive review of your current payment infrastructure, methods, and performance. 
                  We identify opportunities to reduce costs, improve authorization rates, and enhance 
                  customer experience through optimized payment strategies.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Payment method mix analysis</li>
                  <li>• Authorization and conversion rate optimization</li>
                  <li>• Cost structure and fee analysis</li>
                  <li>• User experience assessment</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Regulatory Compliance Support</h3>
                <p className="text-muted-foreground mb-4">
                  Navigate complex payment regulations across different jurisdictions. We help you 
                  understand regulatory requirements, assess compliance gaps, and develop strategies 
                  to meet local and international standards.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Regulatory landscape mapping</li>
                  <li>• Compliance requirement analysis</li>
                  <li>• Risk assessment and mitigation</li>
                  <li>• Regulatory change monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers actionable results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Scoping',
                  description: 'We begin by understanding your business objectives, challenges, and specific intelligence needs. This ensures our research is precisely targeted to deliver maximum value.'
                },
                {
                  step: '02',
                  title: 'Data Collection & Analysis',
                  description: 'Our team leverages proprietary data sources, industry databases, and primary research to gather comprehensive market intelligence. We apply rigorous analytical frameworks to extract meaningful insights.'
                },
                {
                  step: '03',
                  title: 'Insight Generation',
                  description: 'We transform raw data into strategic insights, identifying patterns, opportunities, and risks. Our analysis goes beyond surface trends to uncover the underlying dynamics shaping markets.'
                },
                {
                  step: '04',
                  title: 'Recommendation Development',
                  description: 'We translate insights into clear, actionable recommendations tailored to your organization. Every recommendation is practical, prioritized, and aligned with your strategic goals.'
                },
                {
                  step: '05',
                  title: 'Delivery & Implementation Support',
                  description: 'We present findings through comprehensive reports, executive briefings, and interactive workshops. We remain available to support implementation and answer questions as you execute on recommendations.'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90">
              Contact us to discuss your payment intelligence needs and learn how we can help 
              your organization succeed in the evolving payments landscape.
            </p>
            <Button size="lg" variant="secondary" asChild className="mt-6">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

