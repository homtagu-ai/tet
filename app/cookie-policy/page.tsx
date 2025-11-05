import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | PaymentScope Analytics',
  description: 'Learn about how PaymentScope Analytics uses cookies and similar tracking technologies on our website.',
}

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: November 5, 2024
          </p>
          
          <Separator className="mb-8" />

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="mb-4">
                This Cookie Policy explains how PaymentScope Analytics ("we," "our," or "us") uses cookies and similar 
                tracking technologies on our website. By using our website, you consent to the use of cookies in 
                accordance with this policy.
              </p>
              <p className="mb-4">
                This Cookie Policy should be read in conjunction with our Privacy Policy, which explains how we collect, 
                use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. What Are Cookies?</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you 
                visit a website. Cookies are widely used to make websites work more efficiently and provide information 
                to website owners.
              </p>
              <p className="mb-4">
                Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device after you 
                close your browser and are used by the website to recognize you on return visits. Session cookies are 
                temporary and are deleted when you close your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Cookies</h2>
              <p className="mb-4">
                We use cookies and similar technologies for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Functionality Cookies:</strong> Enable enhanced features and personalization</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold mb-3">4.1 Strictly Necessary Cookies</h3>
              <p className="mb-4">
                These cookies are essential for our website to function properly. They enable core functionality such as 
                security, network management, and accessibility. You cannot opt-out of these cookies as they are necessary 
                for the website to work.
              </p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Examples:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Authentication cookies to identify logged-in users</li>
                  <li>Security cookies to prevent fraudulent use</li>
                  <li>Load balancing cookies to distribute traffic</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">4.2 Analytics and Performance Cookies</h3>
              <p className="mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting 
                information anonymously. This helps us improve our website's performance and user experience.
              </p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Examples:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Google Analytics cookies to track page views and user behavior</li>
                  <li>Performance monitoring cookies to identify technical issues</li>
                  <li>Heatmap cookies to understand user interaction patterns</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">4.3 Functionality Cookies</h3>
              <p className="mb-4">
                These cookies enable our website to provide enhanced functionality and personalization. They may be set 
                by us or by third-party providers whose services we use on our pages.
              </p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Examples:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Cookies that remember your preferences and settings</li>
                  <li>Cookies that enable chat features</li>
                  <li>Cookies that remember your language or region selection</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">4.4 Marketing and Advertising Cookies</h3>
              <p className="mb-4">
                These cookies are used to deliver advertisements that are relevant to you and your interests. They may 
                also be used to limit the number of times you see an advertisement and help measure the effectiveness of 
                advertising campaigns.
              </p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Examples:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Google Ads cookies to serve relevant advertisements</li>
                  <li>Social media cookies (Facebook, LinkedIn) for targeted advertising</li>
                  <li>Retargeting cookies to show relevant ads on other websites</li>
                  <li>Conversion tracking cookies to measure campaign effectiveness</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Cookies</h2>
              <p className="mb-4">
                In addition to our own cookies, we may use various third-party cookies to report website usage statistics 
                and deliver advertisements on and through our website. These third parties may collect information about 
                your online activities over time and across different websites.
              </p>
              <p className="mb-4">
                Third-party services we may use include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Google Analytics:</strong> To understand website traffic and user behavior</li>
                <li><strong>Google Ads:</strong> To display relevant advertisements and measure campaign performance</li>
                <li><strong>Social Media Platforms:</strong> To enable social sharing and track conversions from social media ads</li>
                <li><strong>Marketing Automation Tools:</strong> To track user engagement and deliver personalized content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Managing Your Cookie Preferences</h2>
              
              <h3 className="text-xl font-semibold mb-3">6.1 Browser Settings</h3>
              <p className="mb-4">
                Most web browsers allow you to control cookies through their settings preferences. You can set your 
                browser to refuse cookies or delete certain cookies. However, please note that if you disable or refuse 
                cookies, some parts of our website may become inaccessible or not function properly.
              </p>
              <p className="mb-4">
                Here's how to manage cookies in popular browsers:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
                <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">6.2 Opt-Out Tools</h3>
              <p className="mb-4">
                For more information about online advertising and how to opt out of having your information used for 
                advertising purposes, you can visit:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Digital Advertising Alliance (DAA): <a href="http://www.aboutads.info" className="text-primary hover:underline">www.aboutads.info</a></li>
                <li>Network Advertising Initiative (NAI): <a href="http://www.networkadvertising.org" className="text-primary hover:underline">www.networkadvertising.org</a></li>
                <li>European Interactive Digital Advertising Alliance (EDAA): <a href="http://www.youronlinechoices.eu" className="text-primary hover:underline">www.youronlinechoices.eu</a></li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">6.3 Google Analytics Opt-Out</h3>
              <p className="mb-4">
                To opt out of being tracked by Google Analytics across all websites, visit: 
                <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline ml-1">
                  Google Analytics Opt-out Browser Add-on
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Do Not Track Signals</h2>
              <p className="mb-4">
                Some web browsers incorporate a "Do Not Track" (DNT) feature that signals to websites you visit that you 
                do not want to have your online activity tracked. Currently, there is no standard for how DNT signals 
                should be interpreted. Our website does not currently respond to DNT signals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Cookie Consent</h2>
              <p className="mb-4">
                When you first visit our website, you may be presented with a cookie consent banner. By continuing to use 
                our website or clicking "Accept," you consent to our use of cookies as described in this policy.
              </p>
              <p className="mb-4">
                You can change your cookie preferences at any time using your browser settings or through our cookie 
                consent management tool (if available).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Mobile Devices</h2>
              <p className="mb-4">
                If you access our website through a mobile device, you may not be able to control tracking technologies 
                through standard settings. Please check your mobile device's settings or contact your mobile service 
                provider for information about how to control cookies and tracking technologies on mobile devices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Updates to This Cookie Policy</h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our use of cookies or for other 
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                updated policy on our website and updating the "Last Updated" date.
              </p>
              <p className="mb-4">
                We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. More Information</h2>
              <p className="mb-4">
                For more information about how we collect, use, and protect your personal information, please refer to 
                our Privacy Policy.
              </p>
              <p className="mb-4">
                If you have questions or concerns about our use of cookies, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="mb-2"><strong>PaymentScope Analytics</strong></p>
                <p className="mb-2">Email: contact@paymentscope-analytics.com</p>
                <p className="mb-2">Phone: +1 (212) 555-1234</p>
                <p>Address: 350 Fifth Avenue, Suite 7800, New York, NY 10118, United States</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Additional Resources</h2>
              <p className="mb-4">
                To learn more about cookies and online privacy, visit:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All About Cookies: <a href="http://www.allaboutcookies.org" className="text-primary hover:underline">www.allaboutcookies.org</a></li>
                <li>International Chamber of Commerce Cookie Guide: <a href="http://www.iccwbo.org" className="text-primary hover:underline">www.iccwbo.org</a></li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

