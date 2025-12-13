
import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import SEO from '../../components/base/SEO';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { usePageTransition } from '../../hooks/usePageTransition';

export default function Contact() {
  usePageTransition();

  // Structured data for contact page
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Timeless Tours Maldives",
    "description": "Get in touch with Timeless Tours to plan your perfect Maldivian adventure",
    "mainEntity": {
      "@type": "Organization",
      "name": "Timeless Tours Maldives",
      "telephone": "+960-9404623",
      "email": "info@thetimelesstours.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fulidhoo",
        "addressRegion": "Vaavu Atoll",
        "addressCountry": "MV"
      }
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourInterest: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Contact page texts - using static values
  const contactHeroTitle = 'Get In Touch';
  const contactHeroSubtitle = 'Ready to plan your perfect Maldivian adventure?';
  const contactFormTitle = 'Plan Your Adventure';
  const contactFormNameLabel = 'Full Name';
  const contactFormNamePlaceholder = 'Your full name';
  const contactFormEmailLabel = 'Email Address';
  const contactFormEmailPlaceholder = 'your.email@example.com';
  const contactFormPhoneLabel = 'Phone Number';
  const contactFormPhonePlaceholder = '+960 9404623';
  const contactFormTourLabel = 'Tour of Interest';
  const contactFormTourPlaceholder = 'Select a tour';
  const contactFormMessageLabel = 'Message';
  const contactFormMessagePlaceholder = 'Tell us about your dream Maldives experience...';
  const contactFormSubmit = 'Send Message';
  const contactFormSuccessTitle = 'Thank You!';
  const contactFormSuccessMessage = 'We\'ve received your message and will get back to you within 24 hours.';
  const contactInfoTitle = 'Contact Information';
  const contactInfoPhoneTitle = 'Phone';
  const contactInfoPhoneNumber = '+960 9404623';
  const contactInfoPhoneDesc = 'Available 24/7 for emergencies';
  const contactInfoEmailTitle = 'Email';
  const contactInfoEmailAddress = 'info@thetimelesstours.com';
  const contactInfoEmailDesc = 'We respond within 24 hours';
  const contactInfoWhatsappTitle = 'WhatsApp';
  const contactInfoWhatsappNumber = '+960 9404623';
  const contactInfoWhatsappDesc = 'Quick responses and booking';
  const contactInfoLocationTitle = 'Location';
  const contactInfoLocationAddress = 'Fulidhoo, Vaavu Atoll, Maldives';
  const contactInfoLocationDesc = 'Visit us on the beautiful island of Fulidhoo';

  const heroRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const formRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const infoRef = useScrollReveal() as React.RefObject<HTMLDivElement>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Show success message without API call
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      tourInterest: '',
      message: '',
    });

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-32 text-white text-center scroll-reveal parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&h=600&fit=crop&q=80')`,
        }}
      >
        <div className="animate-ocean-wave max-w-4xl mx-auto px-4">
          <h1
            className="hero-title text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {contactHeroTitle}
          </h1>
          <p className="hero-subtitle text-xl text-gray-200">
            {contactHeroSubtitle}
          </p>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div ref={formRef} className="scroll-reveal">
              <div className="bg-white rounded-lg shadow-lg p-8 hover-lift">
                <h2
                  className="text-3xl font-bold text-slate-800 mb-6"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {contactFormTitle}
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-8 animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-check-line text-2xl text-green-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {contactFormSuccessTitle}
                    </h3>
                    <p className="text-slate-600">
                      {contactFormSuccessMessage}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                        {contactFormNameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/50 transition-all duration-300 group-hover:bg-teal-50/30"
                        placeholder={contactFormNamePlaceholder}
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                        {contactFormEmailLabel} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/50 transition-all duration-300 group-hover:bg-teal-50/30"
                        placeholder={contactFormEmailPlaceholder}
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                        {contactFormPhoneLabel}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/50 transition-all duration-300 group-hover:bg-teal-50/30"
                        placeholder={contactFormPhonePlaceholder}
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                        {contactFormTourLabel}
                      </label>
                      <select
                        value={formData.tourInterest}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            tourInterest: e.target.value,
                          })
                        }
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/50 pr-8 cursor-pointer transition-all duration-300 group-hover:bg-teal-50/30"
                      >
                        <option value="">{contactFormTourPlaceholder}</option>
                        <option value="maafushi">Maafushi Island Day Trip</option>
                        <option value="thulusdhoo">
                          Thulusdhoo Surfing &amp; Culture
                        </option>
                        <option value="sandbank">
                          Sandbank Picnic &amp; Snorkeling
                        </option>
                        <option value="dhiffushi">
                          Dhiffushi Island Experience
                        </option>
                        <option value="manta-ray">
                          Manta Ray &amp; Whale Shark Safari
                        </option>
                        <option value="sunset-cruise">
                          Sunset Dolphin Cruise
                        </option>
                        <option value="custom">Custom Experience</option>
                      </select>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                        {contactFormMessageLabel} *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/50 transition-all duration-300 group-hover:bg-teal-50/30"
                        placeholder={contactFormMessagePlaceholder}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teal-200/50 hover:-translate-y-1 whitespace-nowrap cursor-pointer"
                    >
                      {contactFormSubmit}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="scroll-reveal">
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8 hover-lift">
                  <h3
                    className="text-2xl font-bold text-slate-800 mb-6"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {contactInfoTitle}
                  </h3>

                  <div className="space-y-6">
                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-teal-50/50 transition-all duration-300 cursor-pointer">
                      <div className="w-12 h-12 bg-teal-100 group-hover:bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                        <i className="ri-phone-line text-xl text-teal-600 group-hover:text-white transition-colors duration-300"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 group-hover:text-teal-600 transition-colors duration-300">{contactInfoPhoneTitle}</h4>
                        <a
                          href={`https://wa.me/9609404623?text=${encodeURIComponent('Hello! I have a question about your tours.')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 group-hover:text-teal-600 transition-colors duration-300 cursor-pointer"
                        >
                          {contactInfoPhoneNumber}
                        </a>
                        <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
                          {contactInfoPhoneDesc}
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-teal-50/50 transition-all duration-300 cursor-pointer">
                      <div className="w-12 h-12 bg-teal-100 group-hover:bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                        <i className="ri-mail-line text-xl text-teal-600 group-hover:text-white transition-colors duration-300"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 group-hover:text-teal-600 transition-colors duration-300">{contactInfoEmailTitle}</h4>
                        <a
                          href="mailto:info@thetimelesstours.com"
                          className="text-slate-600 group-hover:text-teal-600 transition-colors duration-300 cursor-pointer"
                        >
                          {contactInfoEmailAddress}
                        </a>
                        <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
                          {contactInfoEmailDesc}
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-teal-50/50 transition-all duration-300 cursor-pointer">
                      <div className="w-12 h-12 bg-teal-100 group-hover:bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                        <i className="ri-whatsapp-line text-xl text-teal-600 group-hover:text-white transition-colors duration-300"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 group-hover:text-teal-600 transition-colors duration-300">{contactInfoWhatsappTitle}</h4>
                        <a
                          href={`https://wa.me/9609404623?text=${encodeURIComponent('Hello! I\'m interested in learning more about your Maldives tours.')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 group-hover:text-teal-600 transition-colors duration-300 cursor-pointer"
                        >
                          {contactInfoWhatsappNumber}
                        </a>
                        <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
                          {contactInfoWhatsappDesc}
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-teal-50/50 transition-all duration-300 cursor-pointer">
                      <div className="w-12 h-12 bg-teal-100 group-hover:bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                        <i className="ri-map-pin-line text-xl text-teal-600 group-hover:text-white transition-colors duration-300"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 group-hover:text-teal-600 transition-colors duration-300">{contactInfoLocationTitle}</h4>
                        <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                          {contactInfoLocationAddress}
                        </p>
                        <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
                          {contactInfoLocationDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-300 hover:-translate-y-1">
                  <iframe
                    src="https://www.google.com/maps?q=3.680855,73.416182&hl=en&z=15&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Timeless Tours Maldives Location - Fulidhoo"
                  ></iframe>
                </div>

                {/* Quick Answers */}
                {/* <div className="bg-white rounded-lg shadow-lg p-8 hover-lift">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    Quick Answers
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="/faq"
                      className="block text-teal-600 hover:text-teal-700 transition-colors duration-300 cursor-pointer"
                    >
                      → What's included in tours?
                    </a>
                    <a
                      href="/faq"
                      className="block text-teal-600 hover:text-teal-700 transition-colors duration-300 cursor-pointer"
                    >
                      → Best time to visit Maldives?
                    </a>
                    <a
                      href="/faq"
                      className="block text-teal-600 hover:text-teal-700 transition-colors duration-300 cursor-pointer"
                    >
                      → Cancellation policy?
                    </a>
                    <a
                      href="/faq"
                      className="block text-teal-600 hover:text-teal-700 transition-colors duration-300 cursor-pointer"
                    >
                      → Group discounts available?
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      </div>
    </>
  );
}
