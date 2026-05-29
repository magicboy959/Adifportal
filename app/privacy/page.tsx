import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Privacy Policy",
  "ADIF Organization's privacy policy and how we protect your personal information.",
  "/privacy"
);

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy Policy"
        title="Your privacy matters to us."
        description="Learn how ADIF Organization collects, uses, and protects your personal information."
      />
      
      <section className="py-24">
        <div className="container max-w-3xl space-y-12">
          <div className="prose prose-navy max-w-none">
            <h2 className="text-2xl font-black text-navy">1. Introduction</h2>
            <p className="mt-4 leading-7 text-slateText">
              ADIF Organization (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your personal information.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">2. Information We Collect</h2>
            <p className="mt-4 leading-7 text-slateText">
              We may collect personal information from you in the following ways:
            </p>
            <ul className="mt-4 space-y-2 leading-7 text-slateText">
              <li><strong>Contact Forms:</strong> When you submit inquiries through our contact form, we collect your name, email, organization, and message.</li>
              <li><strong>Donations:</strong> If you make a donation, we collect payment and contact information necessary to process your contribution.</li>
              <li><strong>Subscriptions:</strong> When you subscribe to our newsletters or updates, we collect your email address and preferences.</li>
              <li><strong>Website Usage:</strong> We automatically collect information about your device, browser type, IP address, and pages visited using cookies and similar technologies.</li>
              <li><strong>Partnership Inquiries:</strong> Information you provide when expressing interest in partnering with us.</li>
            </ul>

            <h2 className="mt-12 text-2xl font-black text-navy">3. How We Use Your Information</h2>
            <p className="mt-4 leading-7 text-slateText">
              We use the information we collect for the following purposes:
            </p>
            <ul className="mt-4 space-y-2 leading-7 text-slateText">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To process donations and send receipts</li>
              <li>To send newsletters, updates, and promotional materials (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To analyze usage patterns and trends</li>
              <li>To comply with legal and regulatory requirements</li>
              <li>To prevent fraud and enhance security</li>
            </ul>

            <h2 className="mt-12 text-2xl font-black text-navy">4. Legal Basis for Processing</h2>
            <p className="mt-4 leading-7 text-slateText">
              We process your personal information based on the following legal grounds:
            </p>
            <ul className="mt-4 space-y-2 leading-7 text-slateText">
              <li>Your explicit consent</li>
              <li>Performance of contractual obligations</li>
              <li>Compliance with legal obligations</li>
              <li>Protection of vital interests</li>
              <li>Legitimate interests pursued by us or third parties</li>
            </ul>

            <h2 className="mt-12 text-2xl font-black text-navy">5. Information Sharing</h2>
            <p className="mt-4 leading-7 text-slateText">
              We do not sell, trade, or transfer your personal information to third parties except:
            </p>
            <ul className="mt-4 space-y-2 leading-7 text-slateText">
              <li>To service providers who assist in our operations (under confidentiality agreements)</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>With your explicit consent</li>
            </ul>

            <h2 className="mt-12 text-2xl font-black text-navy">6. Data Security</h2>
            <p className="mt-4 leading-7 text-slateText">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">7. Your Rights</h2>
            <p className="mt-4 leading-7 text-slateText">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="mt-4 space-y-2 leading-7 text-slateText">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to request deletion of your data</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>

            <h2 className="mt-12 text-2xl font-black text-navy">8. Cookies and Tracking</h2>
            <p className="mt-4 leading-7 text-slateText">
              Our website uses cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">9. Children&apos;s Privacy</h2>
            <p className="mt-4 leading-7 text-slateText">
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete such information.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">10. Data Retention</h2>
            <p className="mt-4 leading-7 text-slateText">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. When information is no longer needed, we securely delete or anonymize it.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">11. International Data Transfers</h2>
            <p className="mt-4 leading-7 text-slateText">
              If you are located outside our jurisdiction and provide information to us, please note that your information may be transferred to and processed in countries that may not have the same data protection laws as your country of origin. By providing your information, you consent to such transfers.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">12. Third-Party Links</h2>
            <p className="mt-4 leading-7 text-slateText">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">13. Policy Changes</h2>
            <p className="mt-4 leading-7 text-slateText">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the effective date below.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">14. Contact Us</h2>
            <p className="mt-4 leading-7 text-slateText">
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-6 space-y-2 text-slateText">
              <p><strong>ADIF Organization</strong></p>
              <p>Email: info@adiforganization.org</p>
              <p>Address: Uganda - Kampala - Arua Park Plaza - C3-490</p>
              <p>Phone: +256794844444 / +256761610000</p>
            </div>

            <p className="mt-12 text-sm text-slateText">
              <strong>Effective Date:</strong> January 1, 2025
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
