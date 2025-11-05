import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | PaymentScope Analytics',
  description: 'Important disclaimer and limitations regarding the use of PaymentScope Analytics services and information.',
}

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Disclaimer</h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: November 5, 2024
          </p>
          
          <Separator className="mb-8" />

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. General Information</h2>
              <p className="mb-4">
                The information provided by PaymentScope Analytics ("Company," "we," "our," or "us") on our website and 
                through our services is for general informational purposes only. All information is provided in good faith; 
                however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, 
                adequacy, validity, reliability, availability, or completeness of any information.
              </p>
              <p className="mb-4">
                <strong>UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND 
                INCURRED AS A RESULT OF THE USE OF THE INFORMATION PROVIDED OR RELIANCE ON ANY INFORMATION PROVIDED. 
                YOUR USE OF THE INFORMATION AND YOUR RELIANCE ON ANY INFORMATION IS SOLELY AT YOUR OWN RISK.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Not Professional Advice</h2>
              <p className="mb-4">
                The content on our website and in our general publications is provided for informational and educational 
                purposes only. It is not intended to be and does not constitute:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Financial advice</li>
                <li>Investment advice</li>
                <li>Legal advice</li>
                <li>Tax advice</li>
                <li>Accounting advice</li>
                <li>Professional consulting advice for your specific situation</li>
              </ul>
              <p className="mb-4">
                You should not take any action or make any decision based solely on the information provided without 
                consulting appropriate professional advisors. We are not liable for any actions you take or decisions you 
                make based on information from our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Market Research and Analysis</h2>
              <p className="mb-4">
                Our market research, analysis, forecasts, and insights are based on information available at the time of 
                publication and our professional judgment. Market conditions, payment methods, consumer behavior, 
                regulatory environments, and industry dynamics change rapidly and unpredictably.
              </p>
              <p className="mb-4">
                We do not guarantee that:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Our forecasts or projections will prove accurate</li>
                <li>Market conditions will develop as predicted</li>
                <li>Our analysis reflects all relevant factors or the most current information</li>
                <li>Strategies or recommendations will achieve desired results</li>
              </ul>
              <p className="mb-4">
                Past trends and historical data do not guarantee future performance or results. All forward-looking 
                statements are subject to risks, uncertainties, and assumptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Third-Party Content and Links</h2>
              <p className="mb-4">
                Our website may contain links to third-party websites, services, or resources that are not owned or 
                controlled by PaymentScope Analytics. We provide these links for your convenience only.
              </p>
              <p className="mb-4">
                We have no control over and assume no responsibility for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The content, privacy policies, or practices of third-party websites</li>
                <li>The accuracy or reliability of third-party information</li>
                <li>Any products, services, or content available through third-party links</li>
              </ul>
              <p className="mb-4">
                The inclusion of any link does not imply our endorsement, sponsorship, or recommendation of the third 
                party or its content. You acknowledge and agree that we shall not be responsible for any damage or loss 
                caused by your use of or reliance on any third-party content or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. No Endorsement of Payment Methods or Providers</h2>
              <p className="mb-4">
                Any mention of specific payment methods, payment service providers, financial institutions, technology 
                platforms, or companies in our content is for informational and analytical purposes only. Such mentions 
                do not constitute:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Endorsement or recommendation of any specific provider or solution</li>
                <li>Advice to use or avoid any particular payment method or service</li>
                <li>Guarantee of the quality, reliability, or suitability of any provider</li>
                <li>Financial advice or investment recommendation</li>
              </ul>
              <p className="mb-4">
                You should conduct your own due diligence and seek appropriate professional advice before selecting 
                payment methods, providers, or partners for your business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Accuracy and Currency of Information</h2>
              <p className="mb-4">
                While we make every effort to ensure that information on our website is accurate and up-to-date, the 
                payments industry evolves rapidly. Information that was accurate at the time of publication may become 
                outdated or superseded by new developments.
              </p>
              <p className="mb-4">
                We do not guarantee that:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All information is current, complete, or error-free</li>
                <li>The website is free from technical inaccuracies or typographical errors</li>
                <li>Defects will be corrected promptly</li>
                <li>Information will be updated in real-time</li>
              </ul>
              <p className="mb-4">
                We reserve the right to make changes to our website content at any time without notice. Information 
                should be independently verified before being relied upon for business decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Regional and Regulatory Variations</h2>
              <p className="mb-4">
                Payment regulations, compliance requirements, and industry practices vary significantly by country, 
                region, and jurisdiction. Information provided on our website may not be applicable or accurate for all 
                geographic locations.
              </p>
              <p className="mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Understanding and complying with applicable laws and regulations in your jurisdiction</li>
                <li>Determining whether information is relevant to your specific geographic location</li>
                <li>Seeking local legal, regulatory, and compliance advice</li>
                <li>Verifying that payment methods and solutions comply with local requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Technology and Security</h2>
              <p className="mb-4">
                While we implement reasonable security measures to protect our website and your information, we cannot 
                guarantee absolute security. Internet transmission and electronic storage are not completely secure, and 
                we cannot ensure the security of information transmitted to or stored on our systems.
              </p>
              <p className="mb-4">
                We do not warrant that:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Our website will be available at all times or free from interruptions</li>
                <li>Our services will be error-free or free from viruses or other harmful components</li>
                <li>Communication to or from our website will be secure or not intercepted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Consulting Services Disclaimer</h2>
              <p className="mb-4">
                For custom consulting engagements, the scope, deliverables, limitations, and disclaimers specific to 
                that engagement will be outlined in a separate written agreement. Nothing in this general website 
                disclaimer should be construed as creating a consulting relationship or professional services agreement.
              </p>
              <p className="mb-4">
                Professional consulting advice is tailored to the specific facts and circumstances of each client 
                engagement. General information on our website should not be considered as specific advice for your 
                organization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by applicable law, PaymentScope Analytics and its affiliates, officers, 
                directors, employees, agents, and partners shall not be liable for any direct, indirect, incidental, 
                special, consequential, or punitive damages arising from:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your use of or inability to use our website or services</li>
                <li>Any errors, omissions, or inaccuracies in our content</li>
                <li>Any actions taken based on information from our website</li>
                <li>Any unauthorized access to or use of our servers or your information</li>
                <li>Any interruption or cessation of transmission to or from our website</li>
                <li>Any bugs, viruses, or other harmful code transmitted through our website</li>
              </ul>
              <p className="mb-4">
                This limitation applies regardless of the legal theory on which the claim is based, whether in contract, 
                tort, negligence, strict liability, or otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Changes to This Disclaimer</h2>
              <p className="mb-4">
                We reserve the right to modify this Disclaimer at any time. Changes will be effective immediately upon 
                posting to our website. Your continued use of our website after changes are posted constitutes your 
                acceptance of the revised Disclaimer.
              </p>
              <p className="mb-4">
                We encourage you to review this Disclaimer periodically to stay informed about any updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Jurisdiction-Specific Disclaimers</h2>
              <p className="mb-4">
                Some jurisdictions do not allow certain disclaimers or limitations of liability. If you are located in 
                such a jurisdiction, some of the above disclaimers or limitations may not apply to you, and you may have 
                additional rights under local law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about this Disclaimer, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="mb-2"><strong>PaymentScope Analytics</strong></p>
                <p className="mb-2">Email: contact@paymentscope-analytics.com</p>
                <p className="mb-2">Phone: +1 (212) 555-1234</p>
                <p>Address: 350 Fifth Avenue, Suite 7800, New York, NY 10118, United States</p>
              </div>
            </section>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8">
              <p className="font-semibold mb-2">Important Notice</p>
              <p className="text-sm">
                This Disclaimer is provided to clarify the limitations of the information and services we provide. 
                By using our website and services, you acknowledge that you have read, understood, and agree to be 
                bound by this Disclaimer. If you do not agree with any part of this Disclaimer, please do not use 
                our website or services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

