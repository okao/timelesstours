
import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { usePageTransition } from '../../hooks/usePageTransition';

export default function Contact() {
  usePageTransition();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourInterest: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Contact page texts state
  const [contactHeroTitle, setContactHeroTitle] = useState('Get In Touch');
  const [contactHeroSubtitle, setContactHeroSubtitle] = useState('Ready to plan your perfect Maldivian adventure?');
  const [contactFormTitle, setContactFormTitle] = useState('Plan Your Adventure');
  const [contactFormNameLabel, setContactFormNameLabel] = useState('Full Name');
  const [contactFormNamePlaceholder, setContactFormNamePlaceholder] = useState('Your full name');
  const [contactFormEmailLabel, setContactFormEmailLabel] = useState('Email Address');
  const [contactFormEmailPlaceholder, setContactFormEmailPlaceholder] = useState('your.email@example.com');
  const [contactFormPhoneLabel, setContactFormPhoneLabel] = useState('Phone Number');
  const [contactFormPhonePlaceholder, setContactFormPhonePlaceholder] = useState('+1 (555) 123-4567');
  const [contactFormTourLabel, setContactFormTourLabel] = useState('Tour of Interest');
  const [contactFormTourPlaceholder, setContactFormTourPlaceholder] = useState('Select a tour');
  const [contactFormMessageLabel, setContactFormMessageLabel] = useState('Message');
  const [contactFormMessagePlaceholder, setContactFormMessagePlaceholder] = useState('Tell us about your dream Maldives experience...');
  const [contactFormSubmit, setContactFormSubmit] = useState('Send Message');
  const [contactFormSuccessTitle, setContactFormSuccessTitle] = useState('Thank You!');
  const [contactFormSuccessMessage, setContactFormSuccessMessage] = useState('We\'ve received your message and will get back to you within 24 hours.');
  const [contactInfoTitle, setContactInfoTitle] = useState('Contact Information');
  const [contactInfoPhoneTitle, setContactInfoPhoneTitle] = useState('Phone');
  const [contactInfoPhoneNumber, setContactInfoPhoneNumber] = useState('+960 9990377');
  const [contactInfoPhoneDesc, setContactInfoPhoneDesc] = useState('Available 24/7 for emergencies');
  const [contactInfoEmailTitle, setContactInfoEmailTitle] = useState('Email');
  const [contactInfoEmailAddress, setContactInfoEmailAddress] = useState('info@timelesstours.mv');
  const [contactInfoEmailDesc, setContactInfoEmailDesc] = useState('We respond within 24 hours');
  const [contactInfoWhatsappTitle, setContactInfoWhatsappTitle] = useState('WhatsApp');
  const [contactInfoWhatsappNumber, setContactInfoWhatsappNumber] = useState('+960 7778899');
  const [contactInfoWhatsappDesc, setContactInfoWhatsappDesc] = useState('Quick responses and booking');
  const [contactInfoLocationTitle, setContactInfoLocationTitle] = useState('Location');
  const [contactInfoLocationAddress, setContactInfoLocationAddress] = useState('Marine Drive, Malé 20026, Maldives');
  const [contactInfoLocationDesc, setContactInfoLocationDesc] = useState('Visit our office in the capital');

  const heroRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const formRef = useScrollReveal() as React.RefObject<HTMLDivElement>;
  const infoRef = useScrollReveal() as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    let mounted = true;
    async function loadContactTexts() {
      try {
        const res = await fetch('/api/texts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            keys: [
              'contact.hero.title', 'contact.hero.subtitle',
              'contact.form.title', 'contact.form.name.label', 'contact.form.name.placeholder',
              'contact.form.email.label', 'contact.form.email.placeholder',
              'contact.form.phone.label', 'contact.form.phone.placeholder',
              'contact.form.tour.label', 'contact.form.tour.placeholder',
              'contact.form.message.label', 'contact.form.message.placeholder',
              'contact.form.submit', 'contact.form.success.title', 'contact.form.success.message',
              'contact.info.title', 'contact.info.phone.title', 'contact.info.phone.number', 'contact.info.phone.desc',
              'contact.info.email.title', 'contact.info.email.address', 'contact.info.email.desc',
              'contact.info.whatsapp.title', 'contact.info.whatsapp.number', 'contact.info.whatsapp.desc',
              'contact.info.location.title', 'contact.info.location.address', 'contact.info.location.desc'
            ]
          })
        });
        if (!res.ok) throw new Error('Failed to load contact texts');
        const data = (await res.json()) as Record<string, string>;
        if (!mounted) return;
        if (data['contact.hero.title']) setContactHeroTitle(data['contact.hero.title']);
        if (data['contact.hero.subtitle']) setContactHeroSubtitle(data['contact.hero.subtitle']);
        if (data['contact.form.title']) setContactFormTitle(data['contact.form.title']);
        if (data['contact.form.name.label']) setContactFormNameLabel(data['contact.form.name.label']);
        if (data['contact.form.name.placeholder']) setContactFormNamePlaceholder(data['contact.form.name.placeholder']);
        if (data['contact.form.email.label']) setContactFormEmailLabel(data['contact.form.email.label']);
        if (data['contact.form.email.placeholder']) setContactFormEmailPlaceholder(data['contact.form.email.placeholder']);
        if (data['contact.form.phone.label']) setContactFormPhoneLabel(data['contact.form.phone.label']);
        if (data['contact.form.phone.placeholder']) setContactFormPhonePlaceholder(data['contact.form.phone.placeholder']);
        if (data['contact.form.tour.label']) setContactFormTourLabel(data['contact.form.tour.label']);
        if (data['contact.form.tour.placeholder']) setContactFormTourPlaceholder(data['contact.form.tour.placeholder']);
        if (data['contact.form.message.label']) setContactFormMessageLabel(data['contact.form.message.label']);
        if (data['contact.form.message.placeholder']) setContactFormMessagePlaceholder(data['contact.form.message.placeholder']);
        if (data['contact.form.submit']) setContactFormSubmit(data['contact.form.submit']);
        if (data['contact.form.success.title']) setContactFormSuccessTitle(data['contact.form.success.title']);
        if (data['contact.form.success.message']) setContactFormSuccessMessage(data['contact.form.success.message']);
        if (data['contact.info.title']) setContactInfoTitle(data['contact.info.title']);
        if (data['contact.info.phone.title']) setContactInfoPhoneTitle(data['contact.info.phone.title']);
        if (data['contact.info.phone.number']) setContactInfoPhoneNumber(data['contact.info.phone.number']);
        if (data['contact.info.phone.desc']) setContactInfoPhoneDesc(data['contact.info.phone.desc']);
        if (data['contact.info.email.title']) setContactInfoEmailTitle(data['contact.info.email.title']);
        if (data['contact.info.email.address']) setContactInfoEmailAddress(data['contact.info.email.address']);
        if (data['contact.info.email.desc']) setContactInfoEmailDesc(data['contact.info.email.desc']);
        if (data['contact.info.whatsapp.title']) setContactInfoWhatsappTitle(data['contact.info.whatsapp.title']);
        if (data['contact.info.whatsapp.number']) setContactInfoWhatsappNumber(data['contact.info.whatsapp.number']);
        if (data['contact.info.whatsapp.desc']) setContactInfoWhatsappDesc(data['contact.info.whatsapp.desc']);
        if (data['contact.info.location.title']) setContactInfoLocationTitle(data['contact.info.location.title']);
        if (data['contact.info.location.address']) setContactInfoLocationAddress(data['contact.info.location.address']);
        if (data['contact.info.location.desc']) setContactInfoLocationDesc(data['contact.info.location.desc']);
      } catch {
        // keep fallback
      }
    }
    loadContactTexts();
    return () => { mounted = false };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      tourInterest: formData.tourInterest,
      message: formData.message,
    });

    try {
      const response = await fetch(
        'https://readdy.ai/api/form/d3ii27vuqofrij837p40',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: payload.toString(),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          tourInterest: '',
          message: '',
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-32 text-white text-center scroll-reveal parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Maldives%20resort%20reception%20area%20with%20traditional%20architecture%2C%20welcoming%20atmosphere%2C%20tropical%20island%20setting%2C%20luxury%20hospitality%2C%20warm%20lighting%2C%20professional%20service%20environment&width=1920&height=600&seq=contact-hero-1&orientation=landscape')`,
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
                        <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">{contactInfoPhoneNumber}</p>
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
                        <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">{contactInfoEmailAddress}</p>
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
                        <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">{contactInfoWhatsappNumber}</p>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0!2d73.5093!3d4.1755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTAnMzEuOCJOIDczwrAzMCczMy41IkU!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Timeless Tours Maldives Location"
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
  );
}
