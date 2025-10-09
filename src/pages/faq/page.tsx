import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import Accordion from '../../components/base/Accordion';
import { faqs } from '../../mocks/tours';

export default function FAQ() {
  const faqAccordion = faqs.map(faq => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer
  }));

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Travel%20consultation%20scene%20with%20helpful%20advisor%20answering%20questions%2C%20friendly%20customer%20service%2C%20travel%20planning%20assistance%2C%20professional%20guidance%20atmosphere&width=1920&height=600&seq=faq-hero&orientation=landscape')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Everything you need to know about traveling with us
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to the most frequently asked questions about our tours and services
            </p>
          </div>

          <Accordion items={faqAccordion} allowMultiple={true} />
        </div>
      </section>

      {/* Additional Help */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600">
              Our travel experts are here to help you plan the perfect journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-phone-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our travel experts</p>
              <p className="text-lg font-semibold text-teal-600">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500 mt-2">Mon-Fri: 9AM-6PM EST</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-mail-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">Get detailed answers to your questions</p>
              <p className="text-lg font-semibold text-teal-600">info@timelesstours.com</p>
              <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-chat-3-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-4">Instant support for quick questions</p>
              <button className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors duration-300 whitespace-nowrap cursor-pointer">
                Start Chat
              </button>
              <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Popular Help Topics
            </h2>
            <p className="text-xl text-gray-600">
              Quick access to the information you need most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-stone-50 rounded-lg p-6 hover:bg-stone-100 transition-colors duration-300 cursor-pointer">
              <i className="ri-calendar-line text-2xl text-teal-600 mb-3"></i>
              <h3 className="font-semibold text-slate-800 mb-2">Booking Process</h3>
              <p className="text-gray-600 text-sm">Learn how to book and what to expect</p>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 hover:bg-stone-100 transition-colors duration-300 cursor-pointer">
              <i className="ri-shield-check-line text-2xl text-teal-600 mb-3"></i>
              <h3 className="font-semibold text-slate-800 mb-2">Travel Insurance</h3>
              <p className="text-gray-600 text-sm">Protection options for your journey</p>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 hover:bg-stone-100 transition-colors duration-300 cursor-pointer">
              <i className="ri-file-text-line text-2xl text-teal-600 mb-3"></i>
              <h3 className="font-semibold text-slate-800 mb-2">Travel Documents</h3>
              <p className="text-gray-600 text-sm">Passport, visa, and other requirements</p>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 hover:bg-stone-100 transition-colors duration-300 cursor-pointer">
              <i className="ri-luggage-cart-line text-2xl text-teal-600 mb-3"></i>
              <h3 className="font-semibold text-slate-800 mb-2">Packing Tips</h3>
              <p className="text-gray-600 text-sm">What to bring for your destination</p>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 hover:bg-stone-100 transition-colors duration-300 cursor-pointer">
              <i className="ri-money-dollar-circle-line text-2xl text-teal-600 mb-3"></i>
              <h3 className="font-semibold text-slate-800 mb-2">Payment Options</h3>
              <p className="text-gray-600 text-sm">Flexible payment plans available</p>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 hover:bg-stone-100 transition-colors duration-300 cursor-pointer">
              <i className="ri-group-line text-2xl text-teal-600 mb-3"></i>
              <h3 className="font-semibold text-slate-800 mb-2">Group Travel</h3>
              <p className="text-gray-600 text-sm">Special rates for groups of 8 or more</p>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 hover:bg-stone-100 transition-colors duration-300 cursor-pointer">
              <i className="ri-heart-pulse-line text-2xl text-teal-600 mb-3"></i>
              <h3 className="font-semibold text-slate-800 mb-2">Health & Safety</h3>
              <p className="text-gray-600 text-sm">Our commitment to your wellbeing</p>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 hover:bg-stone-100 transition-colors duration-300 cursor-pointer">
              <i className="ri-customer-service-2-line text-2xl text-teal-600 mb-3"></i>
              <h3 className="font-semibold text-slate-800 mb-2">Customer Support</h3>
              <p className="text-gray-600 text-sm">24/7 assistance during your travels</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}