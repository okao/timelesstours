
import { useState } from 'react';
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

  const heroRef = useScrollReveal();
  const formRef = useScrollReveal();
  const infoRef = useScrollReveal();

  const handleSubmit = async (e) => {
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
            Get In Touch
          </h1>
          <p className="hero-subtitle text-xl text-gray-200">
            Ready to plan your perfect Maldivian adventure?
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
                  Plan Your Adventure
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-8 animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-check-line text-2xl text-green-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-slate-600">
                      We've received your message and will get back to you within
                      24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="hover-lift">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="hover-lift">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="hover-lift">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="hover-lift">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Tour of Interest
                      </label>
                      <select
                        value={formData.tourInterest}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            tourInterest: e.target.value,
                          })
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-8 cursor-pointer transition-all duration-300"
                      >
                        <option value="">Select a tour</option>
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

                    <div className="hover-lift">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="Tell us about your dream Maldives experience..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover-lift whitespace-nowrap cursor-pointer"
                    >
                      Send Message
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
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 hover-lift">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-phone-line text-xl text-teal-600"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Phone</h4>
                        <p className="text-slate-600">+960 9990377</p>
                        <p className="text-sm text-slate-500">
                          Available 24/7 for emergencies
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 hover-lift">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-mail-line text-xl text-teal-600"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Email</h4>
                        <p className="text-slate-600">info@timelesstours.mv</p>
                        <p className="text-sm text-slate-500">
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 hover-lift">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-whatsapp-line text-xl text-teal-600"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">WhatsApp</h4>
                        <p className="text-slate-600">+960 7778899</p>
                        <p className="text-sm text-slate-500">
                          Quick responses and booking
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 hover-lift">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-map-pin-line text-xl text-teal-600"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Location</h4>
                        <p className="text-slate-600">
                          Marine Drive, Malé 20026, Maldives
                        </p>
                        <p className="text-sm text-slate-500">
                          Visit our office in the capital
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift">
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
                <div className="bg-white rounded-lg shadow-lg p-8 hover-lift">
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
                </div>
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
