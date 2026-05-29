import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Terms & Conditions",
  "ADIF Organization's terms and conditions for using our website and services.",
  "/terms-conditions"
);

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terms & Conditions"
        title="Website terms of use."
        description="Please read these terms and conditions carefully before using our website and services."
      />
      
      <section className="py-24">
        <div className="container max-w-3xl space-y-12">
          <div className="prose prose-navy max-w-none">
            <h2 className="text-2xl font-black text-navy">1. Acceptance of Terms</h2>
            <p className="mt-4 leading-7 text-slateText">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">2. Use License</h2>
            <p className="mt-4 leading-7 text-slateText">
              Permission is granted to temporarily download one copy of the materials (information or software) on ADIF Organization&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="mt-4 space-y-2 leading-7 text-slateText">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>

            <h2 className="mt-12 text-2xl font-black text-navy">3. Disclaimer</h2>
            <p className="mt-4 leading-7 text-slateText">
              The materials on ADIF Organization&apos;s website are provided on an &apos;as is&apos; basis. ADIF Organization makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">4. Limitations</h2>
            <p className="mt-4 leading-7 text-slateText">
              In no event shall ADIF Organization or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ADIF Organization&apos;s website, even if ADIF Organization or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">5. Accuracy of Materials</h2>
            <p className="mt-4 leading-7 text-slateText">
              The materials appearing on ADIF Organization&apos;s website could include technical, typographical, or photographic errors. ADIF Organization does not warrant that any of the materials on its website are accurate, complete, or current. ADIF Organization may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">6. Materials on Website</h2>
            <p className="mt-4 leading-7 text-slateText">
              ADIF Organization has not reviewed all of the information, including information provided by third parties, available through linked websites and is not responsible for the accuracy, legality, or appropriateness of external materials. Links to external websites are provided for convenience only and do not constitute an endorsement.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">7. Modifications</h2>
            <p className="mt-4 leading-7 text-slateText">
              ADIF Organization may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">8. Governing Law</h2>
            <p className="mt-4 leading-7 text-slateText">
              These terms and conditions are governed by and construed in accordance with the laws of Uganda, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">9. User Conduct</h2>
            <p className="mt-4 leading-7 text-slateText">
              Users agree not to:
            </p>
            <ul className="mt-4 space-y-2 leading-7 text-slateText">
              <li>Upload, post, email, or otherwise transmit any unlawful, threatening, abusive, defamatory, obscene, or otherwise objectionable material</li>
              <li>Disrupt the normal flow of dialogue within our website or servers</li>
              <li>Attempt to gain unauthorized access to any portions of the website</li>
              <li>Interfere with any other user&apos;s use and enjoyment of the website</li>
              <li>Transmit any viruses, worms, or other malicious code</li>
              <li>Engage in any form of harassment or abuse of other users</li>
            </ul>

            <h2 className="mt-12 text-2xl font-black text-navy">10. Intellectual Property Rights</h2>
            <p className="mt-4 leading-7 text-slateText">
              All content on this website, including text, graphics, logos, images, and software, is the property of ADIF Organization or its content suppliers and is protected by international copyright laws. Unauthorized use of any materials is prohibited.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">11. Contact Forms and Communications</h2>
            <p className="mt-4 leading-7 text-slateText">
              By submitting a contact form or sending communications through our website, you grant ADIF Organization permission to use the information you provide to respond to your inquiry and for other legitimate business purposes.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">12. Third-Party Links</h2>
            <p className="mt-4 leading-7 text-slateText">
              This website may contain links to other websites. ADIF Organization is not responsible for the content, accuracy, or practices of external websites. Your use of third-party websites is at your own risk and subject to their terms and conditions.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">13. Donation and Payment Terms</h2>
            <p className="mt-4 leading-7 text-slateText">
              If you make a donation through our website:
            </p>
            <ul className="mt-4 space-y-2 leading-7 text-slateText">
              <li>All donations are voluntary and non-refundable unless otherwise stated</li>
              <li>ADIF Organization will use donations for the purposes stated and in accordance with applicable laws</li>
              <li>We maintain the right to refuse donations that we determine may be inappropriate</li>
              <li>Tax deductibility of donations depends on the donor&apos;s jurisdiction and tax status</li>
            </ul>

            <h2 className="mt-12 text-2xl font-black text-navy">14. Limitation of Liability</h2>
            <p className="mt-4 leading-7 text-slateText">
              Under no circumstances shall ADIF Organization be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of or inability to use the website or services, even if advised of the possibility of such damages.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">15. Severability</h2>
            <p className="mt-4 leading-7 text-slateText">
              If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">16. Entire Agreement</h2>
            <p className="mt-4 leading-7 text-slateText">
              These terms and conditions, together with any other policies or notices on our website, constitute the entire agreement between you and ADIF Organization regarding the use of the website.
            </p>

            <h2 className="mt-12 text-2xl font-black text-navy">17. Contact Information</h2>
            <p className="mt-4 leading-7 text-slateText">
              If you have any questions about these terms and conditions, please contact us at:
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
