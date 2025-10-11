import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import Accordion from '../../components/base/Accordion';

export default function FAQ() {
  const [faqs, setFaqs] = useState<Array<{
    id: number;
    question: string;
    answer: string;
    position: number;
  }>>([]);

  const [faqTopics, setFaqTopics] = useState<Array<{
    id: number;
    title: string;
    description: string;
    icon: string;
    position: number;
  }>>([]);

  // FAQ page texts state
  const [faqHeroTitle, setFaqHeroTitle] = useState('Frequently Asked Questions');
  const [faqHeroSubtitle, setFaqHeroSubtitle] = useState('Everything you need to know about traveling with us');
  const [faqSectionTitle, setFaqSectionTitle] = useState('Common Questions');
  const [faqSectionSubtitle, setFaqSectionSubtitle] = useState('Find answers to the most frequently asked questions about our tours and services');
  const [faqHelpTitle, setFaqHelpTitle] = useState('Still Have Questions?');
  const [faqHelpSubtitle, setFaqHelpSubtitle] = useState('Our travel experts are here to help you plan the perfect journey');
  const [faqHelpCallTitle, setFaqHelpCallTitle] = useState('Call Us');
  const [faqHelpCallDesc, setFaqHelpCallDesc] = useState('Speak directly with our travel experts');
  const [faqHelpCallNumber, setFaqHelpCallNumber] = useState('+1 (555) 123-4567');
  const [faqHelpCallHours, setFaqHelpCallHours] = useState('Mon-Fri: 9AM-6PM EST');
  const [faqHelpEmailTitle, setFaqHelpEmailTitle] = useState('Email Us');
  const [faqHelpEmailDesc, setFaqHelpEmailDesc] = useState('Get detailed answers to your questions');
  const [faqHelpEmailAddress, setFaqHelpEmailAddress] = useState('info@timelesstours.com');
  const [faqHelpEmailResponse, setFaqHelpEmailResponse] = useState('Response within 24 hours');
  const [faqHelpChatTitle, setFaqHelpChatTitle] = useState('Live Chat');
  const [faqHelpChatDesc, setFaqHelpChatDesc] = useState('Instant support for quick questions');
  const [faqHelpChatButton, setFaqHelpChatButton] = useState('Start Chat');
  const [faqHelpChatAvailability, setFaqHelpChatAvailability] = useState('Available 24/7');
  const [faqTopicsTitle, setFaqTopicsTitle] = useState('Popular Help Topics');
  const [faqTopicsSubtitle, setFaqTopicsSubtitle] = useState('Quick access to the information you need most');

  useEffect(() => {
    let mounted = true;
    async function loadFaqs() {
      try {
        const res = await fetch('/api/faq');
        if (!res.ok) throw new Error('Failed to load FAQs');
        const data = (await res.json()) as Array<{
          id: number;
          question: string;
          answer: string;
          position: number;
        }>;
        if (mounted) {
          setFaqs(data);
        }
      } catch {
        // keep empty array fallback
      }
    }
    loadFaqs();
    return () => { mounted = false };
  }, []);

  useEffect(() => {
    let mounted = true;
    async function loadFaqTopics() {
      try {
        const res = await fetch('/api/faq-topics');
        if (!res.ok) throw new Error('Failed to load FAQ topics');
        const data = (await res.json()) as Array<{
          id: number;
          title: string;
          description: string;
          icon: string;
          position: number;
        }>;
        if (mounted) {
          setFaqTopics(data);
        }
      } catch {
        // keep empty array fallback
      }
    }
    loadFaqTopics();
    return () => { mounted = false };
  }, []);

  useEffect(() => {
    let mounted = true;
    async function loadFaqTexts() {
      try {
        const res = await fetch('/api/texts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            keys: [
              'faq.hero.title', 'faq.hero.subtitle',
              'faq.section.title', 'faq.section.subtitle',
              'faq.help.title', 'faq.help.subtitle',
              'faq.help.call.title', 'faq.help.call.desc', 'faq.help.call.number', 'faq.help.call.hours',
              'faq.help.email.title', 'faq.help.email.desc', 'faq.help.email.address', 'faq.help.email.response',
              'faq.help.chat.title', 'faq.help.chat.desc', 'faq.help.chat.button', 'faq.help.chat.availability',
              'faq.topics.title', 'faq.topics.subtitle'
            ]
          })
        });
        if (!res.ok) throw new Error('Failed to load FAQ texts');
        const data = (await res.json()) as Record<string, string>;
        if (!mounted) return;
        if (data['faq.hero.title']) setFaqHeroTitle(data['faq.hero.title']);
        if (data['faq.hero.subtitle']) setFaqHeroSubtitle(data['faq.hero.subtitle']);
        if (data['faq.section.title']) setFaqSectionTitle(data['faq.section.title']);
        if (data['faq.section.subtitle']) setFaqSectionSubtitle(data['faq.section.subtitle']);
        if (data['faq.help.title']) setFaqHelpTitle(data['faq.help.title']);
        if (data['faq.help.subtitle']) setFaqHelpSubtitle(data['faq.help.subtitle']);
        if (data['faq.help.call.title']) setFaqHelpCallTitle(data['faq.help.call.title']);
        if (data['faq.help.call.desc']) setFaqHelpCallDesc(data['faq.help.call.desc']);
        if (data['faq.help.call.number']) setFaqHelpCallNumber(data['faq.help.call.number']);
        if (data['faq.help.call.hours']) setFaqHelpCallHours(data['faq.help.call.hours']);
        if (data['faq.help.email.title']) setFaqHelpEmailTitle(data['faq.help.email.title']);
        if (data['faq.help.email.desc']) setFaqHelpEmailDesc(data['faq.help.email.desc']);
        if (data['faq.help.email.address']) setFaqHelpEmailAddress(data['faq.help.email.address']);
        if (data['faq.help.email.response']) setFaqHelpEmailResponse(data['faq.help.email.response']);
        if (data['faq.help.chat.title']) setFaqHelpChatTitle(data['faq.help.chat.title']);
        if (data['faq.help.chat.desc']) setFaqHelpChatDesc(data['faq.help.chat.desc']);
        if (data['faq.help.chat.button']) setFaqHelpChatButton(data['faq.help.chat.button']);
        if (data['faq.help.chat.availability']) setFaqHelpChatAvailability(data['faq.help.chat.availability']);
        if (data['faq.topics.title']) setFaqTopicsTitle(data['faq.topics.title']);
        if (data['faq.topics.subtitle']) setFaqTopicsSubtitle(data['faq.topics.subtitle']);
      } catch {
        // keep fallback
      }
    }
    loadFaqTexts();
    return () => { mounted = false };
  }, []);

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
              <p className="text-lg font-semibold text-teal-600">{faqHelpCallNumber}</p>
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
              <button className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors duration-300 whitespace-nowrap cursor-pointer">
                {faqHelpChatButton}
              </button>
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
  );
}