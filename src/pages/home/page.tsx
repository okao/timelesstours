
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import Carousel from '../../components/base/Carousel';
import { tours } from '../../mocks/tours';   // ← Fixed syntax error
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { usePageTransition } from '../../hooks/usePageTransition';

export default function Home() {
  // Page‑transition effect
  usePageTransition();

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

  // Maldives hero carousel images
  const heroImages = [
    "https://readdy.ai/api/search-image?query=Stunning%20aerial%20view%20of%20Maldives%20crystal%20clear%20turquoise%20lagoon%20with%20overwater%20bungalows%2C%20pristine%20white%20sand%20beaches%2C%20tropical%20paradise%2C%20luxury%20resort%2C%20bright%20sunny%20day%2C%20professional%20travel%20photography&width=1920&height=1080&seq=hero-maldives-1&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Beautiful%20Maldives%20beach%20with%20palm%20trees%20swaying%20over%20crystal%20clear%20blue%20water%2C%20white%20sand%2C%20tropical%20paradise%2C%20peaceful%20serenity%2C%20golden%20hour%20lighting%2C%20professional%20travel%20photography&width=1920&height=1080&seq=hero-maldives-2&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Maldives%20underwater%20coral%20reef%20with%20colorful%20tropical%20fish%2C%20snorkeling%20paradise%2C%20crystal%20clear%20water%2C%20vibrant%20marine%20life%2C%20tropical%20diving%20destination%2C%20professional%20underwater%20photography&width=1920&height=1080&seq=hero-maldives-3&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Traditional%20Maldivian%20dhoni%20boat%20sailing%20on%20calm%20turquoise%20waters%20at%20sunset%2C%20golden%20hour%2C%20peaceful%20ocean%2C%20tropical%20paradise%2C%20romantic%20atmosphere%2C%20professional%20travel%20photography&width=1920&height=1080&seq=hero-maldives-4&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Maldives%20sandbank%20surrounded%20by%20crystal%20clear%20turquoise%20water%2C%20pristine%20white%20sand%2C%20tropical%20paradise%2C%20aerial%20view%2C%20perfect%20beach%20destination%2C%20professional%20travel%20photography&width=1920&height=1080&seq=hero-maldives-5&orientation=landscape"
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
            Explore the Unforgettable Maldives
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-200">
            Discover pristine islands, crystal waters, and thrilling water sports adventures
          </p>
          <Link
            to="/tours"
            className="hero-button inline-block bg-tea l-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift whitespace-nowrap cursor-pointer"
          >
            Explore Tours
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
            Welcome to Paradise
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Timeless Tours Maldives specializes in creating unforgettable
            experiences across the pristine islands of the Maldives. From luxury
            resort visits to authentic local island adventures, we bring you the
            very best of tropical paradise with personalized service and deep
            local knowledge.
          </p>
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
              Featured Experiences
            </h2>
            <p className="text-lg text-slate-600">
              Discover our most popular Maldivian adventures
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
                    alt={tour.name}
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
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-teal-600">
                      ${tour.price}
                    </span>
                    <span className="text-slate-500">{tour.duration}</span>
                  </div>
                  <Link
                    to={`/tour/${tour.id}`}
                    className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    More Info
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
              Why Choose Timeless Tours
            </h2>
            <p className="text-lg text-slate-600">
              Experience the Maldives like never before
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center hover-lift">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-gentle-float">
                <i className="ri-map-pin-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Local Expertise
              </h3>
              <p className="text-slate-600">
                Deep knowledge of hidden gems and authentic Maldivian experiences
              </p>
            </div>

            <div className="text-center hover-lift">
              <div
                className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-gentle-float"
                style={{ animationDelay: "2s" }}
              >
                <i className="ri-shield-check-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Safety First
              </h3>
              <p className="text-slate-600">
                Certified guides and equipment for worry‑free adventures
              </p>
            </div>

            <div className="text-center hover-lift">
              <div
                className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-gentle-float"
                style={{ animationDelay: "4s" }}
              >
                <i className="ri-heart-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Personalized Service
              </h3>
              <p className="text-slate-600">
                Tailored experiences to create your perfect Maldivian getaway
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 bg-white scroll-reveal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold text-slate-800 mb-16"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            What Our Guests Say
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
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 text-white text-center scroll-reveal parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Breathtaking%20sunset%20over%20Maldives%20ocean%20with%20traditional%20dhoni%20boat%20silhouette%2C%20golden%20hour%20lighting%2C%20calm%20turquoise%20waters%2C%20tropical%20paradise%2C%20romantic%20atmosphere%2C%20cinematic%20travel%20photography&width=1920&height=600&seq=cta-sunset-1&orientation=landscape')`,
        }}
      >
        <div className="animate-subtle-zoom max-w-4xl mx-auto px-4">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Ready for Your Maldivian Adventure?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let us create unforgettable memories in paradise
          </p>
          <Link
            to="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift whitespace-nowrap cursor-pointer"
          >
            Plan Your Adventure
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
