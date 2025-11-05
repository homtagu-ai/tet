import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | PaymentScope Analytics',
  description: 'Privacy Policy for PaymentScope Analytics. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: November 5, 2024
          </p>
          
          <Separator className="mb-8" />

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="mb-4">
                PaymentScope Analytics ("we," "our," or "us") respects your privacy and is committed to protecting 
                your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website or use our services.
              </p>
              <p className="mb-4">
                Please read this Privacy Policy carefully. By accessing or using our website, you acknowledge that 
                you have read, understood, and agree to be bound by the terms of this Privacy Policy. If you do not 
                agree with the terms of this Privacy Policy, please do not access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
              <p className="mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Fill out contact forms or inquiry forms on our website</li>
                <li>Subscribe to our newsletters or research reports</li>
                <li>Request information about our services</li>
                <li>Engage with us through email, phone, or other communication channels</li>
                <li>Participate in surveys or research studies</li>
              </ul>
              <p className="mb-4">
                This personal information may include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Company name and job title</li>
                <li>Professional information and industry details</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
              <p className="mb-4">
                When you visit our website, we may automatically collect certain information about your device and 
                browsing actions, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>IP address and geographic location</li>
                <li>Browser type and version</li>
                <li>Operating system and device information</li>
                <li>Pages visited, time spent on pages, and navigation patterns</li>
                <li>Referring website addresses</li>
                <li>Date and time of visits</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.3 Cookies and Tracking Technologies</h3>
              <p className="mb-4">
                We use cookies and similar tracking technologies to collect information about your browsing 
                activities. For detailed information about our use of cookies, please refer to our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Providing, maintaining, and improving our services</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Sending you information about our services, research reports, and industry insights</li>
                <li>Communicating with you about updates, newsletters, and marketing materials</li>
                <li>Conducting market research and analysis</li>
                <li>Personalizing your experience on our website</li>
                <li>Analyzing website usage and trends to improve our offerings</li>
                <li>Detecting, preventing, and addressing technical issues or security threats</li>
                <li>Complying with legal obligations and enforcing our terms and policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p className="mb-4">
                If you are located in the European Economic Area (EEA), our legal basis for collecting and using 
                your personal information depends on the information concerned and the context in which we collect it:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>You have given us consent to process your personal data</li>
                <li>Processing is necessary for the performance of a contract with you</li>
                <li>Processing is necessary for compliance with a legal obligation</li>
                <li>Processing is necessary for our legitimate interests (such as improving our services, 
                    marketing, and business development)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. How We Share Your Information</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold mb-3">5.1 Service Providers</h3>
              <p className="mb-4">
                We may share your information with trusted third-party service providers who assist us in operating 
                our website, conducting our business, or providing services to you. These service providers include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Website hosting and infrastructure providers</li>
                <li>Email and communication service providers</li>
                <li>Analytics and data analysis providers</li>
                <li>Customer relationship management (CRM) platforms</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">5.2 Legal Requirements</h3>
              <p className="mb-4">
                We may disclose your information if required to do so by law or in response to valid requests by 
                public authorities (e.g., court orders, government agencies, or law enforcement).
              </p>

              <h3 className="text-xl font-semibold mb-3">5.3 Business Transfers</h3>
              <p className="mb-4">
                In the event of a merger, acquisition, reorganization, or sale of assets, your information may be 
                transferred as part of that transaction. We will notify you of any such change in ownership or use 
                of your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection and security</li>
              </ul>
              <p className="mb-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we 
                strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
              <p className="mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes for which 
                it was collected, including to satisfy legal, accounting, or reporting requirements. The retention 
                period depends on the nature of the information and the purposes for which it is processed.
              </p>
              <p className="mb-4">
                When we no longer need your personal information, we will securely delete or anonymize it in 
                accordance with our data retention policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Your Rights and Choices</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Access:</strong> You can request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> You can request deletion of your personal information</li>
                <li><strong>Restriction:</strong> You can request restriction of processing of your personal information</li>
                <li><strong>Portability:</strong> You can request transfer of your personal information to another party</li>
                <li><strong>Objection:</strong> You can object to processing of your personal information</li>
                <li><strong>Withdraw Consent:</strong> Where we rely on consent, you can withdraw it at any time</li>
              </ul>
              <p className="mb-4">
                To exercise any of these rights, please contact us at info@paymentscope.com. We will respond to your 
                request within a reasonable timeframe and in accordance with applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. International Data Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. 
                These countries may have data protection laws that are different from the laws of your country.
              </p>
              <p className="mb-4">
                When we transfer personal information internationally, we implement appropriate safeguards to ensure 
                your data is protected in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
              <p className="mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                information from children. If we become aware that we have collected personal information from a child 
                without parental consent, we will take steps to delete that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Third-Party Links</h2>
              <p className="mb-4">
                Our website may contain links to third-party websites, services, or applications. We are not 
                responsible for the privacy practices or content of these third parties. We encourage you to review 
                the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
                legal requirements, or other factors. We will notify you of any material changes by posting the updated 
                Privacy Policy on our website and updating the "Last Updated" date.
              </p>
              <p className="mb-4">
                Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="mb-2"><strong>PaymentScope Analytics</strong></p>
                <p className="mb-2">Email: contact@paymentscope-analytics.com</p>
                <p className="mb-2">Phone: +1 (212) 555-1234</p>
                <p>Address: 350 Fifth Avenue, Suite 7800, New York, NY 10118, United States</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">14. California Privacy Rights (CCPA)</h2>
              <p className="mb-4">
                If you are a California resident, you have specific rights under the California Consumer Privacy Act 
                (CCPA), including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The right to know what personal information we collect, use, and disclose</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt-out of the sale of your personal information (we do not sell personal information)</li>
                <li>The right to non-discrimination for exercising your CCPA rights</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us at info@paymentscope.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">15. European Union Users</h2>
              <p className="mb-4">
                If you are located in the European Union, you have rights under the General Data Protection Regulation 
                (GDPR), including the rights listed in Section 8 above. You also have the right to lodge a complaint 
                with a supervisory authority if you believe our processing of your personal data violates applicable law.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

