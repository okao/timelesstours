import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <WhatsAppButton />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Timeless Tours, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Register for our services or create an account</li>
                <li>Make a booking or purchase</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us with inquiries</li>
                <li>Participate in surveys or promotions</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When you visit our website, we may automatically collect certain information about your device and usage patterns, including IP address, browser type, operating system, referring URLs, and pages visited.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing bookings and transactions</li>
                <li>Communicating with you about your bookings</li>
                <li>Sending promotional materials and newsletters</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Service providers who assist us in operating our business</li>
                <li>Legal requirements or to protect our rights</li>
                <li>Business transfers or mergers</li>
                <li>With your explicit consent</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-stone-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@timelesstours.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Travel Street, Adventure City, AC 12345, United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}