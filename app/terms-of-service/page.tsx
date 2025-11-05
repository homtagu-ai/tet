import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | PaymentScope Analytics',
  description: 'Terms of Service for PaymentScope Analytics. Please read these terms carefully before using our services.',
}

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col">
      <section className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: November 5, 2024
          </p>
          
          <Separator className="mb-8" />

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                Welcome to PaymentScope Analytics. By accessing or using our website and services, you agree to be 
                bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our 
                services.
              </p>
              <p className="mb-4">
                These Terms constitute a legally binding agreement between you and PaymentScope Analytics ("Company," 
                "we," "our," or "us"). We reserve the right to modify these Terms at any time, and your continued use 
                of our services constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
              <p className="mb-4">
                PaymentScope Analytics provides market intelligence, research, consulting services, and insights related 
                to global payment methods, e-commerce trends, and the payments industry. Our services include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Market research and analysis reports</li>
                <li>Strategy consulting and advisory services</li>
                <li>Competitive intelligence and market assessments</li>
                <li>Custom research projects</li>
                <li>Educational content and insights through our website and publications</li>
              </ul>
              <p className="mb-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without 
                prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Eligibility</h2>
              <p className="mb-4">
                You must be at least 18 years old and have the legal capacity to enter into binding contracts to use 
                our services. By using our services, you represent and warrant that you meet these eligibility requirements.
              </p>
              <p className="mb-4">
                If you are using our services on behalf of an organization, you represent that you have the authority 
                to bind that organization to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. User Accounts and Registration</h2>
              <p className="mb-4">
                Certain features of our services may require you to create an account or provide information. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <p className="mb-4">
                We reserve the right to suspend or terminate accounts that violate these Terms or for any other reason 
                at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold mb-3">5.1 Our Content</h3>
              <p className="mb-4">
                All content on our website and in our services, including text, graphics, logos, images, research reports, 
                data, software, and other materials (collectively, "Content"), is owned by or licensed to PaymentScope 
                Analytics and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mb-4">
                You may not copy, modify, distribute, sell, or lease any part of our Content without our prior written 
                permission. You may not reverse engineer or attempt to extract the source code of our software or services.
              </p>

              <h3 className="text-xl font-semibold mb-3">5.2 Limited License</h3>
              <p className="mb-4">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, 
                revocable license to access and use our services for your internal business purposes. This license does 
                not include the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Resell or commercially exploit our services or Content</li>
                <li>Modify, adapt, or create derivative works from our Content</li>
                <li>Use our services for any unlawful purpose</li>
                <li>Interfere with or disrupt the integrity or performance of our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. User Conduct and Prohibited Activities</h2>
              <p className="mb-4">
                You agree not to engage in any of the following prohibited activities:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Violating any applicable laws or regulations</li>
                <li>Infringing on the intellectual property rights of others</li>
                <li>Transmitting any harmful, offensive, or objectionable content</li>
                <li>Attempting to gain unauthorized access to our systems or networks</li>
                <li>Using automated systems (bots, scrapers) to access our services without permission</li>
                <li>Interfering with other users' enjoyment of our services</li>
                <li>Impersonating any person or entity</li>
                <li>Collecting or storing personal data about other users</li>
                <li>Engaging in any fraudulent or deceptive practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Professional Services and Consulting</h2>
              <p className="mb-4">
                If you engage us for consulting, research, or other professional services, the specific terms of that 
                engagement will be outlined in a separate written agreement. Such agreements will supplement these Terms 
                and, in case of conflict, the terms of the specific engagement agreement will prevail.
              </p>
              <p className="mb-4">
                All deliverables, reports, and work product created under professional services engagements remain our 
                intellectual property unless otherwise specified in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Payment Terms</h2>
              <p className="mb-4">
                For paid services, you agree to pay all fees as specified at the time of purchase or as outlined in your 
                service agreement. Fees are non-refundable except as required by law or as expressly stated in your 
                service agreement.
              </p>
              <p className="mb-4">
                We reserve the right to change our pricing at any time. Price changes will not affect services already 
                purchased but will apply to future purchases or renewals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Disclaimer of Warranties</h2>
              <p className="mb-4 uppercase font-semibold">
                OUR SERVICES AND CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER 
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
                PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="mb-4">
                We do not warrant that:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Our services will be uninterrupted, secure, or error-free</li>
                <li>The information provided through our services will be accurate, complete, or current</li>
                <li>Any errors or defects will be corrected</li>
                <li>Our services will meet your specific requirements</li>
              </ul>
              <p className="mb-4">
                While we strive to provide accurate and reliable information, market conditions change rapidly, and our 
                research and analysis should not be considered as the sole basis for business decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
              <p className="mb-4 uppercase font-semibold">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, PAYMENTSCOPE ANALYTICS SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER 
                INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, 
                RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your access to or use of (or inability to access or use) our services</li>
                <li>Any conduct or content of any third party on our services</li>
                <li>Any content obtained from our services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="mb-4 uppercase font-semibold">
                IN NO EVENT SHALL OUR AGGREGATE LIABILITY EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS 
                PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR ONE HUNDRED DOLLARS ($100) IF NO SUCH PAYMENTS WERE MADE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify, defend, and hold harmless PaymentScope Analytics, its affiliates, officers, 
                directors, employees, agents, and partners from and against any claims, liabilities, damages, losses, 
                costs, or expenses (including reasonable attorneys' fees) arising out of or related to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Any content you submit or transmit through our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Third-Party Links and Services</h2>
              <p className="mb-4">
                Our website may contain links to third-party websites or services that are not owned or controlled by 
                PaymentScope Analytics. We have no control over and assume no responsibility for the content, privacy 
                policies, or practices of any third-party websites or services.
              </p>
              <p className="mb-4">
                You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by 
                your use of any third-party content, goods, or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, 
                for any reason, including if you breach these Terms.
              </p>
              <p className="mb-4">
                Upon termination, your right to use our services will cease immediately. All provisions of these Terms 
                that by their nature should survive termination shall survive, including ownership provisions, warranty 
                disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">14. Governing Law and Dispute Resolution</h2>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of New York, 
                United States, without regard to its conflict of law provisions.
              </p>
              <p className="mb-4">
                Any disputes arising out of or related to these Terms or our services shall be resolved through binding 
                arbitration in accordance with the rules of the American Arbitration Association, conducted in New York, 
                New York. You agree to waive your right to a jury trial or to participate in a class action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">15. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms at any time. If we make material changes, we will notify you 
                by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of 
                our services after such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">16. Severability</h2>
              <p className="mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited 
                or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and 
                effect and enforceable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">17. Entire Agreement</h2>
              <p className="mb-4">
                These Terms, together with our Privacy Policy and any other legal notices or agreements published by us 
                on our website, constitute the entire agreement between you and PaymentScope Analytics regarding our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">18. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="mb-2"><strong>PaymentScope Analytics</strong></p>
                <p className="mb-2">Email: contact@paymentscope-analytics.com</p>
                <p className="mb-2">Phone: +1 (212) 555-1234</p>
                <p>Address: 350 Fifth Avenue, Suite 7800, New York, NY 10118, United States</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

