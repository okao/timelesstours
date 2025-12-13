
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import Carousel from '../../components/base/Carousel';
import SEO from '../../components/base/SEO';
import { tours, exclusivePackage } from '../../mocks/tours';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { usePageTransition } from '../../hooks/usePageTransition';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Home() {
  // Page‑transition effect
  usePageTransition();
  const { getText } = useLanguage();

  // Structured data for home page
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Timeless Tours Maldives",
    "url": "https://thetimelesstours.com",
    "description": "Authentic Maldivian tour experiences in Fulidhoo, Vaavu Atoll",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://thetimelesstours.com/tours?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // State for the rotating testimonial
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Scroll‑reveal refs for each section
  const heroRef = useScrollReveal();
  const aboutRef = useScrollReveal();
  const toursRef = useScrollReveal();
  const whyChooseRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  // Guard against missing or malformed mock data
  const toursData = Array.isArray(tours) ? tours : [];
  const featuredTours = toursData.slice(0, 3);

  // Static testimonials data
  const testimonials = [
    {
      text:
        "Our Maldives adventure with Timeless Tours was absolutely magical. The crystal-clear waters and pristine beaches exceeded all expectations!",
      author: "Sarah & Michael",
      location: "Australia",
    },
    {
      text:
        "The local island experience was authentic and beautiful. Swimming with manta rays was the highlight of our honeymoon!",
      author: "Emma Thompson",
      location: "United Kingdom",
    },
    {
      text:
        "Professional service, stunning locations, and unforgettable memories. We'll definitely be back to explore more islands!",
      author: "David Chen",
      location: "Singapore",
    },
  ];

  // Auto‑rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Hero texts - using static values
  const heroTitle = 'Discover the Timeless Beauty of the Maldives';
  const heroSubtitle = 'Where every journey becomes a memory that lasts forever.';
  const heroCta = 'Explore Packages';

  // About texts - using static values
  const aboutTitle = 'Sail Through the White Pearls of the Indian Ocean';
  const aboutBody = 'At timeless tours we invite you to lose yourself in moments that lasts forever.\n\nDrift into the heart of the Maldives — a shimmering chain of white pearls resting gently upon the turquoise embrace of the Indian Ocean.\n\nEvery tour with us is a whisper of wonder, a story written by the sea, and a memory that truly becomes timeless.';

  // Featured texts - using static values
  const featuredTitle = 'Featured Experiences';
  const featuredSubtitle = 'Discover our most popular Maldivian adventures';
  const featuredButton = 'More Info';

  // Why choose texts - using static values
  const whyTitle = 'Why Choose Timeless Tours';
  const whySubtitle = 'Experience the Maldives like never before';
  const whyExpertiseTitle = 'Local Expertise';
  const whyExpertiseDesc = 'Deep knowledge of hidden gems and authentic Maldivian experiences';
  const whySafetyTitle = 'Safety First';
  const whySafetyDesc = 'Certified guides and equipment for worry‑free adventures';
  const whyServiceTitle = 'Personalized Service';
  const whyServiceDesc = 'Tailored experiences to create your perfect Maldivian getaway';

  // Testimonials texts - using static values
  const testimonialsTitle = 'What Our Guests Say';

  // CTA texts - using static values
  const ctaTitle = 'Ready for Your Maldivian Adventure?';
  const ctaSubtitle = 'Let us create unforgettable memories in paradise';
  const ctaButton = 'Plan Your Adventure';

  // Maldives hero carousel images - using static Unsplash images
  const heroImages = [
    "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&h=1080&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&h=1080&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop&q=80",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop&q=80"
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Hero Section with Maldives Photo Carousel */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center text-white scroll-reveal overflow-hidden"
      >
        {/* Background Carousel */}
        <div className="absolute inset-0">
          <Carousel
            autoPlay={true}
            interval={4000}
            showDots={false}
            showArrows={false}
          >
            {heroImages.map((image, index) => (
              <div key={index} className="relative h-screen">
                <img
                  src={image}
                  alt={`Maldives Paradise ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Carousel Overlay */}
        <div className="animate-ocean-wave absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1
            className="hero-title text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Discover the Timeless Beauty of the Maldives
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-200">
            Where every journey becomes a memory that lasts forever.
          </p>
          <Link
            to="/tours"
            className="hero-button inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift whitespace-nowrap cursor-pointer"
          >
            {getText('hero.cta', heroCta)}
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 scroll-reveal">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold text-slate-800 mb-8"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Sail Through the White Pearls of the Indian Ocean
          </h2>
          <div className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed space-y-4">
            <p>At timeless tours we invite you to lose yourself in moments that lasts forever.</p>
            <p>Drift into the heart of the Maldives — a shimmering chain of white pearls resting gently upon the turquoise embrace of the Indian Ocean.</p>
            <p>Every tour with us is a whisper of wonder, a story written by the sea, and a memory that truly becomes timeless.</p>
          </div>
        </div>
      </section>

      {/* Exclusive Package */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-full mb-4">
              EXCLUSIVE PACKAGE
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              7-Day Exclusive Maldives Adventure
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The ultimate Maldivian experience — 7 days of adventure, relaxation, and unforgettable marine encounters in paradise!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-teal-500 hover:shadow-3xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-96 md:h-auto">
                <img
                  src={exclusivePackage.image}
                  alt={exclusivePackage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-teal-600 text-white px-4 py-2 rounded-full font-semibold">
                  {exclusivePackage.duration}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-slate-800">{exclusivePackage.type}</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {exclusivePackage.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {exclusivePackage.fullDescription}
                  </p>
                  <div className="flex items-center text-slate-600 mb-4">
                    <i className="ri-map-pin-line mr-2 text-teal-600"></i>
                    <span>{exclusivePackage.destination}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">What's Included:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {exclusivePackage.inclusions.slice(0, 6).map((item, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-600">
                        <i className="ri-check-line text-teal-600 mr-2"></i>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/tour/${exclusivePackage.id}`}
                  className="block w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white text-center py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Full Package Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section ref={toursRef} className="py-20 bg-white scroll-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-slate-800 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {getText('featured.title', featuredTitle)}
            </h2>
            <p className="text-lg text-slate-600">
              {getText('featured.subtitle', featuredSubtitle)}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <div
                key={tour.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover hover-scale"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {tour.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {tour.shortDescription}
                  </p>
                  <div className="mb-4">
                    <span className="text-slate-500">{tour.duration}</span>
                  </div>
                  <Link
                    to={`/tour/${tour.id}`}
                    className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    {getText('featured.button', featuredButton)}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyChooseRef} className="py-20 scroll-reveal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-slate-800 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {getText('why.title', whyTitle)}
            </h2>
            <p className="text-lg text-slate-600">
              {getText('why.subtitle', whySubtitle)}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-teal-100 group-hover:bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110">
                <i className="ri-map-pin-line text-2xl text-teal-600 group-hover:text-white transition-colors duration-500"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors duration-500">
                {getText('why.expertise.title', whyExpertiseTitle)}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-500">
                {getText('why.expertise.desc', whyExpertiseDesc)}
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <div
                className="w-16 h-16 bg-teal-100 group-hover:bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110"
                style={{ animationDelay: "2s" }}
              >
                <i className="ri-shield-check-line text-2xl text-teal-600 group-hover:text-white transition-colors duration-500"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors duration-500">
                {getText('why.safety.title', whySafetyTitle)}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-500">
                {getText('why.safety.desc', whySafetyDesc)}
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <div
                className="w-16 h-16 bg-teal-100 group-hover:bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110"
                style={{ animationDelay: "4s" }}
              >
                <i className="ri-heart-line text-2xl text-teal-600 group-hover:text-white transition-colors duration-500"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors duration-500">
                {getText('why.service.title', whyServiceTitle)}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-500">
                {getText('why.service.desc', whyServiceDesc)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section ref={testimonialsRef} className="py-20 bg-white scroll-reveal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold text-slate-800 mb-16"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {getText('testimonials.title', testimonialsTitle)}
          </h2>

          <div className="relative">
            <div className="bg-stone-50 rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <i className="ri-double-quotes-l text-4xl text-teal-600 mb-4"></i>
                <p className="text-lg text-slate-700 italic leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-slate-600">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentTestimonial
                      ? "bg-teal-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 text-white text-center scroll-reveal parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=600&fit=crop&q=80')`,
        }}
      >
        <div className="animate-subtle-zoom max-w-4xl mx-auto px-4">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {getText('cta.title', ctaTitle)}
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            {getText('cta.subtitle', ctaSubtitle)}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift whitespace-nowrap cursor-pointer"
          >
            {getText('cta.button', ctaButton)}
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      </div>
    </>
  );
}
