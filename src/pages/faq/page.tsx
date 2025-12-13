import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import SEO from '../../components/base/SEO';
import Accordion from '../../components/base/Accordion';
import { faqs } from '../../mocks/tours';

export default function FAQ() {
  // Structured data for FAQ page
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  // FAQ data - using static values from mocks

  const faqTopics: Array<{
    id: number;
    title: string;
    description: string;
    icon: string;
    position: number;
  }> = [];

  // FAQ page texts - using static values
  const faqHeroTitle = 'Frequently Asked Questions';
  const faqHeroSubtitle = 'Everything you need to know about traveling with us';
  const faqSectionTitle = 'Common Questions';
  const faqSectionSubtitle = 'Find answers to the most frequently asked questions about our tours and services';
  const faqHelpTitle = 'Still Have Questions?';
  const faqHelpSubtitle = 'Our travel experts are here to help you plan the perfect journey';
  const faqHelpCallTitle = 'Call Us';
  const faqHelpCallDesc = 'Speak directly with our travel experts';
  const faqHelpCallNumber = '+960 9404623';
  const faqHelpCallHours = 'Available 24/7';
  const faqHelpEmailTitle = 'Email Us';
  const faqHelpEmailDesc = 'Get detailed answers to your questions';
  const faqHelpEmailAddress = 'info@thetimelesstours.com';
  const faqHelpEmailResponse = 'Response within 24 hours';
  const faqHelpChatTitle = 'Live Chat';
  const faqHelpChatDesc = 'Instant support for quick questions';
  const faqHelpChatButton = 'Start Chat';
  const faqHelpChatAvailability = 'Available 24/7';
  const faqTopicsTitle = 'Popular Help Topics';
  const faqTopicsSubtitle = 'Quick access to the information you need most';

  const faqAccordion = faqs.map((faq, index) => ({
    id: faq.id || index + 1,
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&h=600&fit=crop&q=80')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            {faqHeroTitle}
          </h1>
          <p className="text-xl md:text-2xl font-light">
            {faqHeroSubtitle}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {faqSectionTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {faqSectionSubtitle}
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
              {faqHelpTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {faqHelpSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-phone-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{faqHelpCallTitle}</h3>
              <p className="text-gray-600 mb-4">{faqHelpCallDesc}</p>
              <a
                href={`https://wa.me/9609404623?text=${encodeURIComponent('Hello! I have a question about your tours.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-teal-600 hover:text-teal-700 transition-colors cursor-pointer"
              >
                {faqHelpCallNumber}
              </a>
              <p className="text-sm text-gray-500 mt-2">{faqHelpCallHours}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-mail-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{faqHelpEmailTitle}</h3>
              <p className="text-gray-600 mb-4">{faqHelpEmailDesc}</p>
              <p className="text-lg font-semibold text-teal-600">{faqHelpEmailAddress}</p>
              <p className="text-sm text-gray-500 mt-2">{faqHelpEmailResponse}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-chat-3-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{faqHelpChatTitle}</h3>
              <p className="text-gray-600 mb-4">{faqHelpChatDesc}</p>
              <a
                href={`https://wa.me/9609404623?text=${encodeURIComponent('Hello! I need help with my booking.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors duration-300 whitespace-nowrap cursor-pointer"
              >
                {faqHelpChatButton}
              </a>
              <p className="text-sm text-gray-500 mt-2">{faqHelpChatAvailability}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {faqTopicsTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {faqTopicsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqTopics.map((topic) => (
              <div key={topic.id} className="bg-stone-50 rounded-lg p-6 hover:bg-stone-100 transition-colors duration-300 cursor-pointer">
                <i className={`${topic.icon} text-2xl text-teal-600 mb-3`}></i>
                <h3 className="font-semibold text-slate-800 mb-2">{topic.title}</h3>
                <p className="text-gray-600 text-sm">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
}