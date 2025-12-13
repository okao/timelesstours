import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';

export default function Terms() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <WhatsAppButton />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Terms of Service
            </h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                By accessing and using Timeless Tours' website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Booking and Payment Terms</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Booking Process</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                All bookings are subject to availability and confirmation by Timeless Tours. A booking is only confirmed when you receive written confirmation from us.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Payment</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>A deposit is required at the time of booking</li>
                <li>Full payment is due 60 days before departure</li>
                <li>We accept major credit cards and bank transfers</li>
                <li>All prices are in USD unless otherwise specified</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Cancellation and Refund Policy</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Cancellation by Customer</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>More than 90 days before departure: Full refund minus $200 processing fee</li>
                <li>60-89 days before departure: 75% refund</li>
                <li>30-59 days before departure: 50% refund</li>
                <li>Less than 30 days before departure: No refund</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Cancellation by Timeless Tours</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We reserve the right to cancel any tour due to insufficient bookings, safety concerns, or circumstances beyond our control. In such cases, you will receive a full refund or the option to transfer to another tour.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Travel Requirements</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Documentation</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You are responsible for ensuring you have valid travel documents, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Valid passport (with at least 6 months validity)</li>
                <li>Required visas</li>
                <li>Health certificates or vaccinations as required</li>
                <li>Travel insurance (strongly recommended)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Health and Fitness</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Some tours require a reasonable level of fitness. You must inform us of any medical conditions that may affect your ability to participate in tour activities.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Liability and Insurance</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Limitation of Liability</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Timeless Tours acts as an agent for various service providers and is not liable for their acts or omissions. Our liability is limited to the cost of the tour. We strongly recommend comprehensive travel insurance.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Force Majeure</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are not liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, war, terrorism, or government actions.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Conduct and Behavior</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We expect all travelers to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Respect local customs and traditions</li>
                <li>Follow the instructions of tour guides</li>
                <li>Not engage in illegal activities</li>
                <li>Treat fellow travelers and staff with respect</li>
              </ul>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We reserve the right to remove any traveler whose behavior is deemed inappropriate or disruptive.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                All content on our website, including text, graphics, logos, and images, is the property of Timeless Tours and is protected by copyright laws. You may not reproduce or distribute any content without our written permission.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Privacy</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Dispute Resolution</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Any disputes arising from these terms or your use of our services will be resolved through binding arbitration in accordance with the laws of the jurisdiction where Timeless Tours is incorporated.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-stone-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@thetimelesstours.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href="https://wa.me/9609404623" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">+960 9404623</a></p>
                <p className="text-gray-700"><strong>Address:</strong> Fulidhoo, Vaavu Atoll, Maldives</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}