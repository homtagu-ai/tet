import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Target, Eye, Award, Globe2, TrendingUp, Users, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | PaymentScope Analytics',
  description: 'Learn about PaymentScope Analytics, a leading strategy consultancy specializing in global payment methods intelligence and market analysis.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              About PaymentScope Analytics
            </h1>
            <p className="text-xl text-muted-foreground">
              We are a leading strategy consultancy specializing in the global payments industry, 
              providing unparalleled market intelligence and actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To empower businesses with comprehensive payment intelligence that drives informed 
                      decision-making, accelerates market expansion, and optimizes payment strategies across 
                      global markets. We strive to be the most trusted advisor in the payments ecosystem.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the global standard for payment methods intelligence, enabling businesses worldwide 
                      to navigate the complex payments landscape with confidence. We envision a future where 
                      every organization has access to the insights needed to thrive in the digital economy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded by payment industry veterans with decades of combined experience, PaymentScope Analytics 
                emerged from a recognition that businesses needed better intelligence to navigate the rapidly 
                evolving payments landscape. What started as a small consulting practice has grown into a 
                comprehensive intelligence platform serving clients across six continents.
              </p>
              <p>
                Our team combines deep expertise in payment systems, financial technology, market research, 
                and strategic consulting. We've worked with leading payment processors, financial institutions, 
                merchants, and technology providers to help them understand market dynamics, identify opportunities, 
                and make data-driven decisions.
              </p>
              <p>
                Today, PaymentScope Analytics is recognized as a trusted source of payment intelligence, 
                delivering insights that shape industry strategy and drive innovation. Our research is cited 
                by industry publications, referenced in strategic planning sessions, and relied upon by 
                decision-makers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our unique approach combines rigorous data analysis with deep industry expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <Globe2 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Global Coverage</h3>
                <p className="text-muted-foreground">
                  We track payment methods across 150+ countries, providing unmatched geographic breadth 
                  and depth. Our global network of researchers ensures local market expertise combined 
                  with international perspective.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                <p className="text-muted-foreground">
                  We don't just report on current trends—we forecast future market developments. 
                  Our proprietary models help clients stay ahead of market shifts and prepare for 
                  emerging payment innovations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Actionable Insights</h3>
                <p className="text-muted-foreground">
                  Data without context is just numbers. We translate complex market dynamics into 
                  clear, actionable recommendations that drive business results and competitive advantage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Areas of Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {[
              'Digital Wallet Analysis',
              'Card Payment Trends',
              'Real-Time Payment Systems',
              'Buy Now Pay Later Markets',
              'Account-to-Account Transfers',
              'Cross-Border Payments',
              'E-commerce Payment Optimization',
              'Point-of-Sale Innovation',
              'Open Banking & Finance',
              'Payment Security & Fraud',
              'Regulatory Compliance',
              'Consumer Payment Behavior'
            ].map((area, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Users className="h-16 w-16 mx-auto opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Team Philosophy
            </h2>
            <p className="text-lg opacity-90">
              We believe that the best insights come from diverse perspectives and rigorous methodology. 
              Our team combines quantitative analysts, payment industry specialists, regional experts, 
              and strategic consultants who share a passion for understanding how payments shape commerce 
              and society.
            </p>
            <p className="text-lg opacity-90">
              Every team member brings unique expertise, but we're united by a commitment to accuracy, 
              objectivity, and delivering value to our clients. We invest continuously in our capabilities, 
              staying at the forefront of payment innovation and market dynamics.
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Global Presence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              With offices and research partners around the world, we maintain a pulse on local 
              market dynamics while providing global perspective
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'North America', 'Europe', 'Asia-Pacific', 'Latin America',
              'Middle East', 'Africa', 'Caribbean', 'Oceania'
            ].map((region, index) => (
              <div key={index} className="text-center p-6 rounded-lg border bg-card">
                <Globe2 className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">{region}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

