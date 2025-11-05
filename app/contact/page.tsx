import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Metadata } from 'next'
import MapboxMap from '@/components/MapboxMap'

export const metadata: Metadata = {
  title: 'Contact Us | PaymentScope Analytics',
  description: 'Get in touch with PaymentScope Analytics for payment intelligence consulting, market research, and strategy advisory services.',
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to unlock powerful payment intelligence? Contact our team to discuss how 
              we can help your organization thrive in the global payments landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Acme Corporation"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="market-research">Market Research & Analysis</option>
                    <option value="strategy-consulting">Strategy Consulting</option>
                    <option value="competitive-intelligence">Competitive Intelligence</option>
                    <option value="regional-analysis">Regional Market Analysis</option>
                    <option value="custom-research">Custom Research</option>
                    <option value="innovation-advisory">Innovation Advisory</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-sm text-muted-foreground">
                  By submitting this form, you agree to our Privacy Policy and consent to be contacted 
                  regarding your inquiry.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Our team is ready to help you navigate the complex world of global payment methods. 
                  Reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email Us</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          For general inquiries and support
                        </p>
                        <a 
                          href="mailto:contact@paymentscope-analytics.com" 
                          className="text-primary hover:underline"
                        >
                          contact@paymentscope-analytics.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Call Us</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Mon-Fri 9:00 AM - 6:00 PM EST
                        </p>
                        <a 
                          href="tel:+12125551234" 
                          className="text-primary hover:underline"
                        >
                          +1 (212) 555-1234
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Visit Us</h3>
                        <p className="text-sm text-muted-foreground">
                          Global Headquarters<br />
                          350 Fifth Avenue, Suite 7800<br />
                          New York, NY 10118<br />
                          United States
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Offices */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Regional Offices</h3>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">San Francisco Office</p>
                      <p className="text-muted-foreground text-xs">575 Market Street, Suite 2750, San Francisco, CA 94105</p>
                      <p className="text-muted-foreground text-xs">+1 (415) 555-0198</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">London Office</p>
                      <p className="text-muted-foreground text-xs">1 Canada Square, Canary Wharf, London E14 5AA, UK</p>
                      <p className="text-muted-foreground text-xs">+44 20 7946 0958</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Singapore Office</p>
                      <p className="text-muted-foreground text-xs">1 Raffles Place, #40-02, One Raffles Place, Singapore 048616</p>
                      <p className="text-muted-foreground text-xs">+65 6789 1234</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">São Paulo Office</p>
                      <p className="text-muted-foreground text-xs">Av. Paulista, 1374, 5º andar, São Paulo, SP 01310-100, Brazil</p>
                      <p className="text-muted-foreground text-xs">+55 11 3456-7890</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Quick Response Time</h3>
                  <p className="text-sm opacity-90">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call our main line.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Map */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Global Presence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              With offices around the world, we're positioned to serve clients across all time zones 
              and regions
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg border bg-white">
            <MapboxMap />
          </div>

          {/* Old map code - replaced with component
          <div className="rounded-lg overflow-hidden shadow-lg border bg-white">
            <div id="map" style={{ width: '100%', height: '480px' }} />
            <link href='https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css' rel='stylesheet' />
            <script src='https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.js' />
            <script dangerouslySetInnerHTML={{ __html: `
              document.addEventListener('DOMContentLoaded', function() {
                if (typeof mapboxgl === 'undefined') {
                  setTimeout(arguments.callee, 100);
                  return;
                }
                
                mapboxgl.accessToken = 'pk.eyJ1IjoiaHVnaHNpbHZhOTEiLCJhIjoiY21obTQ1azJhMjFkcTJrcjRjZDU0ZGF2YyJ9.FsG9K_psV3D0INZBRYz0yg';
                
                const map = new mapboxgl.Map({
                  container: 'map',
                  style: 'mapbox://styles/mapbox/light-v11',
                  center: [0, 30],
                  zoom: 1.5,
                  projection: 'mercator'
                });

                // Office locations
                const offices = [
                  {
                    name: 'New York - Global HQ',
                    coordinates: [-73.9819, 40.7484],
                    address: '350 Fifth Avenue, Suite 7800, New York, NY 10118',
                    phone: '+1 (212) 555-1234',
                    color: '#3b82f6'
                  },
                  {
                    name: 'San Francisco Office',
                    coordinates: [-122.3988, 37.7897],
                    address: '575 Market Street, Suite 2750, San Francisco, CA 94105',
                    phone: '+1 (415) 555-0198',
                    color: '#3b82f6'
                  },
                  {
                    name: 'London Office',
                    coordinates: [-0.0194, 51.5048],
                    address: '1 Canada Square, Canary Wharf, London E14 5AA, UK',
                    phone: '+44 20 7946 0958',
                    color: '#3b82f6'
                  },
                  {
                    name: 'Singapore Office',
                    coordinates: [103.8501, 1.2847],
                    address: '1 Raffles Place, #40-02, Singapore 048616',
                    phone: '+65 6789 1234',
                    color: '#3b82f6'
                  },
                  {
                    name: 'São Paulo Office',
                    coordinates: [-46.6583, -23.5613],
                    address: 'Av. Paulista, 1374, 5º andar, São Paulo, SP 01310-100',
                    phone: '+55 11 3456-7890',
                    color: '#3b82f6'
                  }
                ];

                map.on('load', () => {
                  offices.forEach(office => {
                    // Create a custom marker element
                    const el = document.createElement('div');
                    el.className = 'custom-marker';
                    el.style.backgroundColor = office.color;
                    el.style.width = '32px';
                    el.style.height = '32px';
                    el.style.borderRadius = '50%';
                    el.style.border = '3px solid white';
                    el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
                    el.style.cursor = 'pointer';
                    el.style.display = 'flex';
                    el.style.alignItems = 'center';
                    el.style.justifyContent = 'center';
                    
                    // Add office icon
                    el.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>';

                    // Create popup
                    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
                      '<div style="padding: 8px;">' +
                      '<h3 style="font-weight: bold; margin-bottom: 8px; color: #1e293b;">' + office.name + '</h3>' +
                      '<p style="margin: 4px 0; font-size: 13px; color: #475569;">' + office.address + '</p>' +
                      '<p style="margin: 4px 0; font-size: 13px; color: #3b82f6;">' + office.phone + '</p>' +
                      '</div>'
                    );

                    // Add marker
                    new mapboxgl.Marker(el)
                      .setLngLat(office.coordinates)
                      .setPopup(popup)
                      .addTo(map);
                  });

                  // Add navigation controls
                  map.addControl(new mapboxgl.NavigationControl(), 'top-right');
                  
                  // Add fullscreen control
                  map.addControl(new mapboxgl.FullscreenControl(), 'top-right');
                });
              });
            ` }} />
          </div>
          */}

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">New York</h3>
                <p className="text-sm text-muted-foreground">North America HQ</p>
                <p className="text-xs text-muted-foreground mt-2">+1 (212) 555-1234</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">London</h3>
                <p className="text-sm text-muted-foreground">Europe Office</p>
                <p className="text-xs text-muted-foreground mt-2">+44 20 7946 0958</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Singapore</h3>
                <p className="text-sm text-muted-foreground">Asia-Pacific Office</p>
                <p className="text-xs text-muted-foreground mt-2">+65 6789 1234</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">São Paulo</h3>
                <p className="text-sm text-muted-foreground">Latin America Office</p>
                <p className="text-xs text-muted-foreground mt-2">+55 11 3456-7890</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

